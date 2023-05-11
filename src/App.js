import {  Route, Routes, useNavigate } from 'react-router-dom';
import React,{useContext,useState} from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ContextProvider from './Store/Contextprovider';
import Context from './Store/context-store';



function App() {
  const ctx=useContext(Context);

  
  console.log('user login state before',ctx.idToken)
      console.log('user login state',ctx.isLoggedin)

  return (
    
    <Layout>
      
      <Routes>

       { /* Homepage shows to user only if User is loged in otherwise Loginpage on Homepage path  */}
       
       <Route path='/'  element= {ctx.isLoggedin ? <HomePage/> : <AuthPage/> }/>
        {/* <Route path='/' element={<HomePage/>}/> */}

        <Route path='/auth' element= {ctx.isLoggedin ? <UserProfile/> : <AuthPage/> }/>
         {/* <Route path='/auth' element={<AuthPage/>} />  */}

         <Route path='/profile' element= {ctx.isLoggedin ? <UserProfile/> : <AuthPage/> }/>
        {/* <Route path='/profile' element={<UserProfile/>} />   */}
       
       
        
      </Routes>
      
       
     
    </Layout>
 
  );
}

export default App;
