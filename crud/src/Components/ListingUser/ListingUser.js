import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchUserList, RemoveUser } from '../redux/Action'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUserCheck } from "react-icons/fa";

const ListingUser = () => {

    const dispatch = useDispatch()

    const users = useSelector(state => state.user.userList)

    useEffect(() => {
        dispatch(FetchUserList())
    }, [])

const handelDelete = async (id)=>{
console.log(id)
if(window.confirm('Do you want to remove this user?')){
    await dispatch(RemoveUser(id))
     await   dispatch(FetchUserList())
toast.success('User removed successfully.')
}
}




    return (
        <>


            <h2 className='m-5'>User Listing</h2>

            <div className="card">
  
                <div className="card-header" >
                    <Link to={'/user/add'} className="btn btn-success">Add User <FaUserCheck style={{fontSize:'24px',gap:'15px',position:'relative',bottom:'4px'}}/></Link>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">FullName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>


                        <tbody>
                            {users.map((item, index) => {
                                return <tr key={index}>

                                    <td>{index + 1}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <Link className="btn btn-primary m-2" to={`/update/${item._id}`}  >Update</Link>
                                        <Button variant="danger" onClick={()=>handelDelete(item._id)} style={{gap:'20%'}} >Delete</Button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default ListingUser
