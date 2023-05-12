
import './AddUser.css'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { AddedUser, FetchUserList } from '../redux/Action';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [error, setError] = useState({
    fullname: '',
    email: '',
    role: ''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validForm = () => {
    let status = true;
    let localError = { ...error }

    if (fullname === '') {
      localError.fullname = 'Fullname is required'
      status = false
    }
    if (email === '') {
      localError.email = 'Email is required'
      status = false
    }
    if (role === '') {
      localError.role = 'Role is required'
      status = false

    }
    setError(localError)
    console.log(localError)
    return status;
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(validForm()){
    const data = {
      fullname,
      email,
      role
    }
    await dispatch(AddedUser(data))
    await dispatch(FetchUserList())
    navigate('/users')
  }else{
    console.log('form invalid!')
  }


  }

  return (
    <>
      <h1 style={{ margin: '30px', position: 'relative', top: '100px' }}>ADD USER</h1>
      <Form style={{ position: 'relative', top: '200px' }}>
        <Form.Group className="mb-3" controlId="formBasicFullName">

          <Form.Control type="text" placeholder="Enter FullName" className='form-control'
            n ame="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}
          />
          {error.fullname !== '' ? <div style={{color:'red'}} className="position-relative top-100 start-0">{error.fullname} </div> : ''} 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control type="email" placeholder="Enter email" className='form-control'
            name='email' value={email} onChange={(e) => setEmail(e.target.value)}
          />
                    {error.email !== '' ? <div style={{color:'red'}}>{error.email} </div> : ''} 
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Select aria-label="Default select example" className='form-control'
          value={role} onChange={(e) => setRole(e.target.value)}
        >
          <option>Select your role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>

        </Form.Select>
        {error.role !== '' ? <div style={{color:'red'}} className="position-relative top-100 start-0">{error.role} </div> : ''} 


        <Button variant="primary" type="submit" style={{
          padding: '0.2em 5em', height: '50px',
          margin: '20px', fontSize: '20px',
          position: 'relative',
          top: '100px'
        }}
          onClick={handleSubmit}
        >
          Add_Now

        </Button>
      </Form>


    </>
  )
}

export default AddUser