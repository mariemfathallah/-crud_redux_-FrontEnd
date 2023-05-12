

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom'
import AddUser from './Components/AddUser/AddUser';
import ListingUser from './Components/ListingUser/ListingUser';
import Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify'
import UpdateUser from './Components/UpdateUser/UpdateUser';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <Link to={'/'} className='a'>Home</Link>
        <Link to={'/users'} className='a'>User</Link>
      </div>
      <Routes>
        <Route path='/add' element={<AddUser />} />
        <Route path='/' element={<Home></Home>} />
        <Route path='/users' element={<ListingUser/>} />
        <Route path='/user/add' element={<AddUser/>} />
        <Route path='/update/:id' element={<UpdateUser/>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
