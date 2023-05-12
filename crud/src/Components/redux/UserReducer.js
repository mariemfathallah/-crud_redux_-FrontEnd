
import { ADD_USER,DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType"

const initialState = {

    userList: [],
    userObj: {},
    errmessage: ''
}
 const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case MAKE_REQUEST:
            return {
                ...state,
        
            }
        case FAIL_REQUEST:
            return {
                ...state,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return {
                ...state,
                errmessage:'',
                userList: action.payload,
                userObj:{}
            }
            case DELETE_USER:
                return{
                    ...state,
                  
                }
                case ADD_USER:
                    return{
                        ...state,
                        
                    }

        default: return state
    }
}


export default Reducer