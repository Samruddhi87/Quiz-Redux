import {React,useNavigate }from 'react'
import useAuth from './Auth';

 const Profile = () => {
    const auth=useAuth()
    const navigate=useNavigate()
    const handlerLogout=()=>{
        auth.logout()
        navigate('/')
    }
  return (
    <div className='profile'> 
    <h2>Welcome {auth.user}</h2>
    <button onClick={handlerLogout}></button>Logout
    </div>
  )
}
export default Profile;
