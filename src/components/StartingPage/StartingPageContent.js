import classes from './StartingPageContent.module.css';
import Context from '../../Store/context-store';
import React,{useContext} from 'react';

const StartingPageContent = () => {
  let ctx = useContext(Context)
  console.log('user login state before',ctx.idToken)
      console.log('user login state',ctx.isLoggedin)
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
};

export default StartingPageContent;
