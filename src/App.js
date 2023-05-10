import {  Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ContextProvider from './Store/Contextprovider';


function App() {
  return (
    <ContextProvider>
    <Layout>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/profile' element={<UserProfile/>} />
      </Routes>
      
       
     
    </Layout>
  </ContextProvider>
  );
}

export default App;
