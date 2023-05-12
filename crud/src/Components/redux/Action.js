import { toast } from "react-toastify"
import instanceAxios from "../../instanceAxios"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST, UPDATE_USER } from "./ActionType"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}
export const deleteUser = () => {
    return {
        type: DELETE_USER,

    }
}
export const addUser = () => {
    return {
        type: ADD_USER,
    }
}
export const updateUser = () => {
    return {
        type: UPDATE_USER
    }
}
export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        instanceAxios.get('/listeUser').then(res => {
            const userList = res.data;
            dispatch(getUserList(userList))
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

    }
}

export const RemoveUser = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        instanceAxios.delete(`/deleteUser/${id}`).then(res => {
            console.log(res)
            dispatch(deleteUser())
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const AddedUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        instanceAxios.post('/addUser', data).then(res => {

            dispatch(addUser(res.data))
            toast.success('User Added successfully.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const UpdatedUser = (id, data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        instanceAxios.put(`/updateUser/${id}`, data).then(res => {
            dispatch(updateUser(res.data))
            toast.success('User Updated successfully.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}