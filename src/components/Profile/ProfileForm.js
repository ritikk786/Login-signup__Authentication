import React,{useContext, useRef} from 'react';
import Context from '../../Store/context-store';
import { useNavigate } from 'react-router-dom';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const enterdPassword = useRef()

  const navigate=useNavigate()
  const ctx = useContext(Context)

  const submithandler = async (e)=>{
      e.preventDefault()
    try{
      const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key= AIzaSyAfqsC6GYo0nj89-yXZd7B_H76N1N76_LU',{
        method:'POST',
        body: JSON.stringify({
          idToken : ctx.idToken,
          password : enterdPassword.current.value,
          returnSecureToken : false,
        }),
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      console.log(response)
       
      
      if(!response.ok){
        throw new Error ('Authentication failed !')
      }
      alert('password changed succesfully')
     navigate('/')
    }
    catch(error){
      if(error){
        alert(error.message)
      }
    }
    // Login condition ends here --/
  }
  
  return (

    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={enterdPassword} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button onClick={submithandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
