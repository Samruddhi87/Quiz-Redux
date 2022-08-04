import React from 'react'
import {NavLink} from 'react-router-dom'
import useAuth from '../Navigation/Auth'
export default function Navbar() {
    const navLinkStyles=({isActive})=>{
        return{
            fontWeight:isActive ? 'bold' :'normal',
            TextDecoration:isActive ? 'none' :'underline',

        }
    }
    const auth=useAuth()
  return (
 <nav className='primary-nav'>
    <NavLink styles={navLinkStyles} to='/'>Home</NavLink>
    <NavLink styles={navLinkStyles} to='/about'>About</NavLink>
    <NavLink styles={navLinkStyles} to='/blog'>Blog</NavLink>
    <NavLink styles={navLinkStyles} to='contact/'>Contact</NavLink>
    <NavLink styles={navLinkStyles} to='/database'>Database</NavLink>
    <NavLink styles={navLinkStyles} to='/profile'>Profile</NavLink>
{
    !auth.user && (
        <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
    )
}
 </nav>
  )
}
