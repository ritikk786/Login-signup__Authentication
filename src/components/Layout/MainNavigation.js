import React,{useContext} from 'react';
import Context from '../../Store/context-store';
import { Link } from 'react-router-dom';


import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const ctx = useContext(Context)
  console.log('ctx',ctx.idToken)
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul> 
          { !ctx.idToken &&  
          <li>
            <Link to='/auth'>Login</Link>
          </li>}
         
         { ctx.idToken && <> <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <button onClick={ctx.Logouthandler} >Logout</button>
          </li> </>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
