import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';
import { json } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isloggingin, setIsLoggingin]=useState(false);

  
  const email=useRef();
  const password=useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function clearvalue(){
    email.current.value='';
    password.current.value='';
  }



  // function submithandler start from here ------------------------/

  const submithandler= async (e)=>{

    e.preventDefault();
  // extracting values from ref;
    const enterdEmail=email.current.value;
    const enterdPassword=password.current.value;
              
               
    // change state for loader
    setIsLoggingin(true)

    if(isLogin){
      try{
        const singinresponse= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfqsC6GYo0nj89-yXZd7B_H76N1N76_LU',{
          method:'POST',
          body: JSON.stringify({
            email : enterdEmail,
            password : enterdPassword,
            returnSecureToken : true,
          }),
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        console.log(singinresponse)
        const data = await singinresponse.json();
        console.log(data.idToken)
        if(!singinresponse.ok){
          throw new Error ('Authentication failed !')
        }
       
      }
      catch(error){
        if(error){
          alert(error.message)
        }
      }
      // Login condition ends here --/
    }
    else {
      // this work for signup ------/
      try{
        const signupresponse= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfqsC6GYo0nj89-yXZd7B_H76N1N76_LU',{
          method : 'POST',
          body  : JSON.stringify({
            email : enterdEmail,
            password : enterdPassword,
            returnSecureToken : true,
          }),
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        var data = await signupresponse.json()
        
        if(!signupresponse.ok){
          clearvalue()
          throw new Error(`${data.error.message}`)
        }
        
        

        // show alert after signup
        alert('Congrantulation!')
      }
      catch(error){
        if(error){
          let errormessage = 'Authentication Failed !'
          if(data && data.error && data.error.message){
            errormessage = data.error.message
          }
          alert(errormessage)
        }
      }
      // signup condition ends here -----/
    }


    // stop loader
    setIsLoggingin(false) 

    // clear value
    clearvalue()

    // submithandler function END here ------/;
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submithandler} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={email} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={password}
            type='password'
            id='password'
            required
          />
        </div>
        <div className={classes.actions}>
          {!isloggingin &&<button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isloggingin && <p>Sending Request....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
