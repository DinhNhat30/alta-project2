import React, { useEffect, useState } from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { Input, Space, DatePicker } from 'antd';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import { Select } from 'antd';
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import moment from 'moment';
import Modal from '../../template/Modal/Modal';
import './Capso.css';
import xanhduong from '../../../assets/images/xanhduong.png';
import maudo from '../../../assets/images/do.png';
import tim from '../../../assets/images/tim.png';

const { RangePicker } = DatePicker;


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];



const { Option } = Select;
const { Search } = Input;
const onSearch = (value: any) => console.log(value);

const Capso = () => {

  //table
  const data1: any = [

    {
      id:'1212',
      tenKhachHang:'Lê Huỳnh Ái Vân',
      tenDichVu:'khám tim mạch',
      thoiGianCap:'14:35 - 07/11/2021',
      hanSuDung:'14:35 - 07/12/2021',
      trangThai:'Đang chờ',
      nguonCap:'Kiosk'

    },
    {
      id:'1213',
      tenKhachHang:'Huỳnh Ái Vân',
      tenDichVu:'khám tim mạch',
      thoiGianCap:'14:35 - 07/11/2021',
      hanSuDung:'14:35 - 07/12/2021',
      trangThai:'Đã sử dụng',
      nguonCap:'Kiosk'

    },
    {
      id:'1212',
      tenKhachHang:'Lê Ái Vân',
      tenDichVu:'khám tim mạch',
      thoiGianCap:'14:35 - 07/11/2021',
      hanSuDung:'14:35 - 07/12/2021',
      trangThai:'Bỏ qua',
      nguonCap:'Kiosk'

    },
    

  ];
  const columns: any = [
    {
      title: 'STT ',
      width: 93,
      dataIndex: 'id',
      key: 'id',

    },
    {
      title: 'Tên khách hàng',
      width: 162,
      dataIndex: 'tenKhachHang',
      key: 'tenKhachHang',

    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'tenDichVu',
      key: 'tenDichVu',
      width: 171,
    },
    {
      title: 'Thời gian cấp',
      dataIndex: 'thoiGianCap',
      key: 'thoiGianCap',
      width: 161,
    },
    {
      title: 'Hạn sử dụng ',
      dataIndex: 'hanSuDung',
      key: 'hanSuDung',
      width: 174,
    },
    {
      title: 'Trạng thái ',
      dataIndex: 'trangThai',
      key: 'trangThai',
      width: 147,
      render: (trangThai: any) => {
        if (trangThai === 'Đang chờ') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src={xanhduong} alt="" />
              Đang chờ
            </div>
          )
        }
        else if (trangThai === 'Đã sử dụng') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src={tim} alt="" />
              Đã sử dụng
            </div>
          )
        }
        else if (trangThai === 'Bỏ qua') {
          return (
            <div >
              <img style={{ paddingRight: '5px' }} src={maudo} alt="" />
              Đã sử dụng
            </div>
          )
        }
      }
    },

    {
      title: 'Nguồn cấp ',
      dataIndex: 'nguonCap',
      key: 'nguonCap',
      width: 120,
      
    },


    {
      title: '',
      dataIndex: 'chiTiet',
      key: 'chiTiet',
      width: 106,
      render: () => <a >Chi tiết</a>,
    },
  ];


  return (
    <div className='layout_ThietBi'>
      <div className='layout_Thietbi_Header row' >
        <div className='layout_Thietbi_Header_Text col-8'>
          <div>
            <strong style={{ color: '#7E7D88' }}>Cấp số  </strong>
            <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
            <strong>Danh sách cấp số </strong>
          </div>
        </div>
        <div className=' layout_Thietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
          <Modal />
        </div>
        <div className='clear_both'></div>
      </div>


      <div className="row layout_ThietBi_row">
        <div className='layout_ThietBi_row_text'> Quản lý cấp số</div>
      </div>
      <div className="row layout_ThietBi_row1">
        <div className="layout_Capso_text">
          <div className='layout_ThietBi_row1_text'>Tên dịch vụ </div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Khám sản - Phụ khoa">Khám sản - Phụ khoa</Option>
              <Option className='hoverOption' value="Khám răng hàm mặt">Khám răng hàm mặt</Option>
              <Option className='hoverOption' value="khám tai mũi họng">khám tai mũi họng </Option>
            </Select>

          </div>
        </div>
        <div className="layout_Capso_text">
          <div className='layout_ThietBi_row1_text'>Tình trạng</div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Đang chờ">Đang chờ</Option>
              <Option className='hoverOption' value="Đã sử dụng">Đã sử dụng</Option>
              <Option className='hoverOption' value="Bỏ qua">Bỏ qua </Option>
            </Select>

          </div>
        </div>
        <div className="layout_Capso_text">
          <div className='layout_ThietBi_row1_text'>Nguồn cấp</div>
          <div>
            <Select defaultValue="Tất cả" style={{ width: '100%' }} >
              <Option className='hoverOption' value="Tất cả">Tất cả</Option>
              <Option className='hoverOption' value="Đang chờ">Kiosk</Option>
              <Option className='hoverOption' value="Đã sử dụng">Hệ thống</Option>

            </Select>

          </div>
        </div>
        <div style={{ width: '340px' }} className="">
          <div className='layout_ThietBi_row1_text'>Chọn thời gian </div>
          <div className='row'>
            <div className="col-5" style={{ paddingRight: '0px' }}>
              <Space direction="vertical">
                <DatePicker defaultValue={moment('10/10/2021', dateFormatList[0])} format={dateFormatList} />
              </Space>
            </div>
            <div className="col-2 text-center"><AiFillCaretRight /></div>
            <div className="col-5" style={{ paddingLeft: '0px' }}>
              <Space direction="vertical">
                <DatePicker defaultValue={moment('18/10/2021', dateFormatList[0])} format={dateFormatList} />
              </Space></div>
          </div>
        </div>

        <div style={{ width: '281px', float: 'left' }} className="">
          <div className='layout_ThietBi_row1_text'>Từ khóa  </div>
          <Search

            placeholder="Nhập từ khóa "
            allowClear
            onSearch={onSearch}
            style={{ width: '100%' }}
          />
        </div>

      </div>
      <div style={{ clear: 'both' }}></div>
      <div className="row">
        <div style={{ padding: '20px 12px 10px 25px' }} className="col-11">
          <Table columns={columns} dataSource={data1} style={{ height: '400px' }} />
        </div>
        <div className="col-1 " style={{ padding: '23px 0px' }}>
          <div className='layout_ThietBi_ThemDichVu'>
            <Link to={'/capso/capsomoi'} className='layout_ThietBi_ThemDichVu_link' >
              <BsFillPlusSquareFill className='layout_ThietBi_ThemDichVu_icon' />

            </Link>
            <div>Cấp số mới</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Capso