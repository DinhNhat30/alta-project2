import React, { useEffect, useState } from 'react'
import './ThietBi.css'
import { AiOutlineRight } from "react-icons/ai";
import { Input, Space } from 'antd';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import { Select } from 'antd';
import { ICollection } from './../../../state/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioCreator, State } from '../../../state';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Modal from '../../template/Modal/Modal';


import { Popover, Button } from 'antd';

const content = (
  <div>
    <div>khám tim mạch , khám sản - phụ khoa , khám răng hàm mặt </div>
    <div>khám tai mũi họng , khám hô hấp </div>
  </div>
);
const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);
const ThietBi = () => {



  //lấy dữ liêu từ firebase lên 
  const data: ICollection[] = []
  const dispatch = useDispatch();
  const { setAllThietBi } = bindActionCreators(actioCreator, dispatch)
  const dataCollectionRef = collection(db, 'thietBi')
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(dataCollectionRef)
      querySnapshot.forEach((doc) => {
        data.push({ maTB: `${doc.id}`, ...doc.data() });
        console.log('data', data);

      })
      dispatch(setAllThietBi(data))
    }
    getData()
  }, [])

  //table
  const data1: any = [

    {
      address: "192.168.2.0",
      dichVu: "khám tim mạch , khám sản - phụ khoa , khám răng hàm mặt, khám tai mũi họng . khám hô hấp, khám tổng quát ",
      maTB: "KIO_01",
      tenTB: "kiosk",
      trangThaiHD: "Hoạt động",
      trangThaiKN: "Mất kết nối"
    },
    {
      address: "192.168.10.255",
      dichVu: "khám tim mạch , khám sản- phụ khoa, khám răng hàm mặt , khái tai mũi họng , khám tổng quát , khám hô hấp",
      maTB: "KIO-02",
      tenTB: "kiosk2",
      trangThaiHD: "Ngưng hoạt động",
      trangThaiKN: "Kết nối"
    }
  ];
  const columns: any = [
    {
      title: 'Mã thiết bị ',
      width: 103,
      dataIndex: 'maTB',
      key: 'maTB',

    },
    {
      title: 'Tên thiết bị',
      width: 120,
      dataIndex: 'tenTB',
      key: 'tenTB',

    },
    {
      title: 'Địa chỉ IP',
      dataIndex: 'address',
      key: 'address',
      width: 138,


    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'trangThaiHD',
      key: 'trangThaiHD',
      width: 171,
      render: (trangThaiHD: any) => {
        if (trangThaiHD === 'Ngưng hoạt động') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src="./image/chamdo.png" alt="" />
              Ngưng hoạt động
            </div>
          )
        }
        else if (trangThaiHD === 'Hoạt động') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src="./image/chamluc.png" alt="" />
              Hoạt động
            </div>
          )
        }
      }
    },
    {
      title: 'Trạng thái kết nối',
      dataIndex: 'trangThaiKN',
      key: 'trangThaiKN',
      width: 145,
      render: (trangThaiKN: any) => {
        if (trangThaiKN === 'Mất kết nối') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src="./image/chamdo.png" alt="" />
              Mất kết nối
            </div>
          )
        }
        else if (trangThaiKN === 'Kết nối') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src="./image/chamluc.png" alt="" />
              Kết nối
            </div>
          )
        }
      }
    },
    {
      title: 'Dịch vụ sử dụng',
      dataIndex: 'dichVu',
      key: 'dichVu',
      width: 250,
      render: () => <div>
        <div>khám tim mạch , khám măt...</div>
        <Popover content={content} >
          <u style={{ cursor:'pointer', color:'#4277FF'}} >xem thêm</u>
        </Popover>

      </div>
    },
    {
      title: '',
      dataIndex: 'chiTiet',
      key: 'chiTiet',
      width: 77,
      render: () =>  <u style={{ cursor:'pointer', color:'#4277FF'}} >chi tiết</u>,
    },


    {
      title: '',
      dataIndex: 'capNhat',
      key: 'capNhat',

      width: 106,
      render: () =>  <u style={{ cursor:'pointer', color:'#4277FF'}} >Cập nhật</u>,
    },
  ];


  const thietBi = useSelector((state: State) => state.thietBi)
  // console.log('thietBi', thietBi);

  return (
    <div className='layout_ThietBi'>
      <div className='layout_Thietbi_Header row' >
        <div className='layout_Thietbi_Header_Text col-8'>
          <div>
            <strong style={{ color: '#7E7D88' }}>Thiết bị </strong>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>Danh sách thiết bị </strong>
          </div>
        </div>
        <div className=' layout_Thietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal />
        </div>
        <div className='clear_both'></div>
      </div>


      <div className="row layout_ThietBi_row">
        <div className='layout_ThietBi_row_text'> Danh sách thiết bị </div>
      </div>
      <div className="row layout_ThietBi_row1">
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Trạn thái hoạt động </div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Hoạt động">Hoạt động</Option>
              <Option className='hoverOption' value="Ngưng hoạt động">Ngưng hoạt động</Option>
            </Select>

          </div>
        </div>
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Trạng thái kết nối </div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Kết nối">Kết nối</Option>
              <Option className='hoverOption' value="Mất kết nối">Mất kết nối</Option>
            </Select>
          </div>
        </div>
        <div className="col-2">
        </div>
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Từ khóa  </div>
          <Search

            placeholder="Nhập từ khóa "
            allowClear
            onSearch={onSearch}
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-1">
        </div>
      </div>
      <div className="row">
        <div style={{ padding: '20px 12px 10px 25px' }} className="col-11">
          <Table pagination={{ pageSize:8 }} columns={columns} dataSource={data1} style={{ height: '400px' }} />
        </div>
        <div className="col-1 " style={{ padding: '23px 0px' }}>
          <div className='layout_ThietBi_ThemDichVu'>
            <Link to={'/thietbi/themthietbi'} className='layout_ThietBi_ThemDichVu_link' >
              <BsFillPlusSquareFill className='layout_ThietBi_ThemDichVu_icon' />

            </Link>
            <div>Thêm thiết bị</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ThietBi