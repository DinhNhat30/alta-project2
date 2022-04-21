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
import AddThietBi from './components/pages/thietbi/addThietBi/AddThietBi';
import AddDichVu from './components/pages/Dichvu/addDichVu/AddDichVu';
import { ThongTinNguoiDung } from './components/pages/thongTinNguoiDung/ThongTinNguoiDung';
import AddCapSo from './components/pages/Capso/addCapSo/AddCapSo';

import { createBrowserHistory } from 'history';
import NotFound from './components/pages/notFound/NotFound';
import DashBoardChartNgay from './components/pages/dashBoard/dashBoardChart/DashBoardChartNgay';
import DashBoardChartTuan from './components/pages/dashBoard/dashBoardChart/DashBoardChartTuan';
import DashBoardChartThang from './components/pages/dashBoard/dashBoardChart/DashBoardChartThang';
import QuanLyVaiTro from './components/pages/quanLyVaiTro/QuanLyVaiTro';
import AddVaiTro from './components/pages/quanLyVaiTro/addVaiTro/AddVaiTro';
import QuanLyTaiKhoan from './components/pages/quanLyTaiKhoan/QuanLyTaiKhoan';
import AddTaiKhoan from './components/pages/quanLyTaiKhoan/addTaiKhoan/AddTaiKhoan';
import NhatKyNguoiDung from './components/pages/nhatKyNguoiDung/NhatKyNguoiDung';
import DetailThietBi from './components/pages/thietbi/detailThietBi/DetailThietBi';
import UpdateThietBi from './components/pages/thietbi/updateThietBi/UpdateThietBi';
export const history = createBrowserHistory();




const App: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} >
          <Route path='/' element={<DashBoard />} >
            <Route path='/' element={<DashBoardChartNgay />} />
            <Route path='/1' element={<DashBoardChartTuan />} />
            <Route path='/2' element={<DashBoardChartThang />} />
            
          </Route>
          <Route path='/thietbi' element={<ThietBi />} />
          <Route path='/dichvu' element={<Dichvu />} />
          <Route path='/capso' element={<Capso />} />
          <Route path='/baocao' element={<BaoCao />} />
          <Route path='/hethong' element={<HeThong />} />
          <Route path='/thietbi/themthietbi' element={<AddThietBi />} />
          <Route path='/thietbi/detailthietbi' element={<DetailThietBi />} />
          <Route path='/thietbi/capnhatthietbi' element={<UpdateThietBi />} />
          <Route path='/dichvu/themdichvu' element={<AddDichVu />} />
          <Route path='/thongtinnguoidung' element={<ThongTinNguoiDung />} />
          <Route path='/capso/capsomoi' element={<AddCapSo />} />
          <Route path='/quanlyvaitro' element={<QuanLyVaiTro />} />
          <Route path='/quanlyvaitro/themvaitro' element={<AddVaiTro />} />
          <Route path='/quanlytaikhoan' element={<QuanLyTaiKhoan />} />
          <Route path='/quanlytaikhoan/themtaikhoan' element={<AddTaiKhoan />} />
          <Route path='/nhatkynguoidung' element={<NhatKyNguoiDung />} />
         

          {/* no other router match */}
          <Route path='*' element={<NotFound />} />

        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/reset' element={<ResetPassword />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
