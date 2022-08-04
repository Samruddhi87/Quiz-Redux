import logo from './logo.svg';
import './App.css';
import Counter from './StateManagement/Counter';
import EventBind from './EventBind';
import {Parent} from './MethodAsProps/Parent';
import UserGreeting from './ConditionalRendering/UserGreeting';
import NameList from './ListRender/NameList';
import StyleSheet from './ReactCss/StyleSheet';
import Form from './ReactForms/Form';
import React, { Component, createContext, useContext } from 'react';
import CompoentA from './Hooks/CompoentA';
import { OrderSummary } from './Navigation/Home';
import {Routes,Route} from 'react-router-dom'
import Home from './Navigation/Home';
import About from './Navigation/About';
import Contact from './Navigation/Contact';
import Blog from './Navigation/Blog';
import Database from './Navigation/Database';
import Admin from './Navigation/Admin';
import  Users  from './Navigation/Users';
import { UserDetails } from './Navigation/UserDetails';
import Navbar from './Navbar/Navbar';
import {AuthProvider} from './Navigation/Auth';
import BasicTable from './ReactTable/BasicTable';
import Callback from './Hooks/Callback';
import PureComp from './PureComponent/PureComp';
import RegularComp from './PureComponent/RegularComp';
import ParentComp from './PureComponent/ParentComp';
import Profile from './React-redux/Profile'
import Login from './React-redux/Login'
import Create from './React-CRUD/Create';
function App() {
//  const UseContext=createContext();
  return (
    <div className='app'>
      <Create/>
{/*    
 <Profile/>
 <Login/> */}
 <button type="button" class="btn btn-primary">Primary</button>
      {/* <Callback/>
<PureComp/>
<RegularComp/>
<ParentComp/> */}
    {/* <BasicTable/> */}
     {/* <AuthProvider> */}
       {/* <UseContext.Provider value={'User'}>
//      <CompoentA/>
//       </UseContext.Provider> */}
       {/* <Counter/>
//       <EventBind/>
//       <Parent/>
//  <UserGreeting/>
//  <NameList/>
//  <StyleSheet/>
//       <Form/> */}
       {/* <OrderSummary/> */}
 {/* <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="contact" element={<Contact/>}></Route>
         <Route path="blog" element={<Blog/>}></Route>
         <Route path="database" element={<Database/>}></Route>
         <Route path="profile" element={<Profile/>}></Route>
         <Route path="login" element={<Login/>}></Route>

     <Route path='users' element={<Users/>}>
     <Route path =':userId' element={<UserDetails/>}/>
      <Route path='admin' element={<Admin/>}/>
       </Route>
       </Routes>
       </AuthProvider> */}

</div>

  );
}

export default App;
