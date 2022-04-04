import React from 'react';
import 'antd/dist/antd.css';
import Login from './components/pages/login/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Forgot } from './components/pages/forgot/Forgot';
import ResetPassword from './components/pages/resetPassword/ResetPassword';

import { Menu } from './components/template/layout/Menu';
import BaoCao from './components/pages/baoCao/BaoCao';
import DashBoard from './components/pages/dashBoard/DashBoard';
import Capso from './components/pages/Capso/Capso';
import Dichvu from './components/pages/Dichvu/Dichvu';
import HeThong from './components/pages/hethong/HeThong';
import ThietBi from './components/pages/thietbi/ThietBi';




const App: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} >
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/thietbi' element={<ThietBi />} />
          <Route path='/dichvu' element={<Dichvu />} />
          <Route path='/capso' element={<Capso />} />
          <Route path='/baocao' element={<BaoCao />} />
          <Route path='/hethong' element={<HeThong />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/reset' element={<ResetPassword />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
