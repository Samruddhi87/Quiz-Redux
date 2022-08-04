import React from 'react'
import {useDispatch} from 'react-redux'
import { login } from './User';
function Login() {
    const dispatch=useDispatch();
  return (
    <div className='app'>
{/* <h2>Login Page</h2> */}
<button onClick={()=>{ dispatch(login({name:"max",age:22,email:"max@gmail.com"}))

}}>Login</button>
    </div>
  )
}

export default Login