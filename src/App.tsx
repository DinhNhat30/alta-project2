import React from 'react';
import 'antd/dist/antd.css';
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Forgot } from './components/forgot/Forgot';
import ResetPassword from './components/resetPassword/ResetPassword';
import LeftMenu from './components/template/leftMenu/LeftMenu';
import Layout from './components/template/Layout';

function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot' element={<Forgot/>}/>
            <Route path='/reset' element={<ResetPassword/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
