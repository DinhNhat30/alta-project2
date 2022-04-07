import React, { useState } from 'react'
import './ThietBi.css'
import { Modal } from 'antd';
import { AiOutlineRight } from "react-icons/ai";
import { Cascader } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import { Select } from 'antd';

const { Option } = Select;

const columns: any = [
  {
    title: 'Mã thiết bị ',
    width: 103,
    dataIndex: 'maTB',
    key: 'maTB',
    fixed: 'left',
  },
  {
    title: 'Tên thiết bị',
    width: 120,
    dataIndex: 'tenTB',
    key: 'tenTB',
    fixed: 'left',
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
  },
  {
    title: '',
    dataIndex: 'chiTiet',
    key: 'chiTiet',
    width: 77,
    render: () => <a>Chi tiết</a>,
  },


  {
    title: '',
    dataIndex: 'capNhat',
    key: 'capNhat',
    fixed: 'right',
    width: 106,
    render: () => <a>Cập nhật</a>,
  },
];

const data: any = [

  {
    maTB: '1',
    tenTB: 'John Brown',
    address: 'New York No. 1 Lake ',
    trangThaiHD: 'Hoạt động',
    trangThaiKN: 'Mất kết nối',
    dichVu: 'sadsa'
  }
  ,
  {
    maTB: '1',
    tenTB: 'John Brown',
    address: 'New York No. 1 Lake ',
    trangThaiHD: 'Ngưng hoạt động',
    trangThaiKN: 'Kết nối',
    dichVu: 'sadsa'
  }

];
// for (let i = 0; i < 100; i++) {
//   data.push({


//     address: `London Park no. ${i}`,

//     maTB: i,
//       tenTB: `John Brown ${i}`,

//       trangThaiHD:`dang hoạt động ${i}`,
//       trangThaiKN:'áds',
//       dichVu:'sadsa'
//   });
// }

const { Search } = Input;


const onSearch = (value: any) => console.log(value);

const options = [
  {
    value: 'Tất cả',
    label: 'Tất cả',

  },
  {
    value: 'Hoạt động',
    label: 'Hoạt động',

  },
  {
    value: 'Ngưng hoạt động',
    label: 'Ngưng hoạt động',

  },
];
const options1 = [
  {
    value: 'Tất cả',
    label: 'Tất cả',

  },
  {
    value: 'Kết nối',
    label: 'Kết nối',

  },
  {
    value: 'Mất kết nối         ',
    label: 'Mất kết nối         ',

  },
];

function onChange1(value: any) {
  console.log(value);
}




const ThietBi = () => {
  const [visible, setVisible] = useState(false);
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
          <div className='layout_Thietbi_Header_img' onClick={() => setVisible(true)}>
            <img src="./image/thongbao.png" alt="" />
          </div>
          <div className='layout_Thietbi_Header_img1'>
            <img src="./image/avata.png" alt="" />
          </div>
          <div className='layout_Thietbi_Header_TT'>
            <p style={{ marginTop: "13px" }}>xin chào</p>
            <p style={{ color: "#535261", fontSize: '16px', fontWeight: "700", }}>Lê Quỳnh Ái Vân</p>
          </div>
          <div className='clear_both'></div>
        </div>
        <div className='clear_both'></div>
      </div>

      <Modal
        title={
          <div style={{
            width: '100%',
            background: '#FF9138',
            height: '50px',
            padding: '16px',
            color: 'white',
            fontSize: '20px',
            fontWeight: '700px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'

          }}>
            Thông báo
          </div>
        }
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={400}
        footer={null}
      >
        <div className='Dashboard_Modal'>
          <div className='Dashboard_Modal_NguoiDung'>Người dùng: Nguyễn Thị Thùy Dung</div>
          <div className='Dashboard_Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2021</div>
        </div>
        <div className='Dashboard_Modal'>
          <div className='Dashboard_Modal_NguoiDung'>Người dùng: Nguyễn Thiên Chinh</div>
          <div className='Dashboard_Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2021</div>
        </div>
        <div className='Dashboard_Modal'>
          <div className='Dashboard_Modal_NguoiDung'>Người dùng: Võ Thị Kim Liên</div>
          <div className='Dashboard_Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2021</div>
        </div>
        <div className='Dashboard_Modal'>
          <div className='Dashboard_Modal_NguoiDung'>Người dùng: Nguyễn Quốc Huy</div>
          <div className='Dashboard_Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2021</div>
        </div>
        <div className='Dashboard_Modal'>
          <div className='Dashboard_Modal_NguoiDung'>Người dùng: Võ Ngọc Lan Anh</div>
          <div className='Dashboard_Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2021</div>
        </div>
        <div className='Dashboard_Modal'>
          <div className='Dashboard_Modal_NguoiDung'>Người dùng: Nguyễn thị Trúc Anh</div>
          <div className='Dashboard_Modal_Time'>Thời gian nhận số: 12h20 ngày 30/11/2021</div>
        </div>



      </Modal>
      <div className="row layout_ThietBi_row">
        <div className='layout_ThietBi_row_text'> Danh sách thiết bị </div>
      </div>
      <div className="row layout_ThietBi_row1">
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Trạn thái hoạt động </div>
          <div>
            <Select defaultValue="Tất cả" style={{ width:'100%' }} >
              <Option value="Tất cả">Tất cả</Option>
              <Option value="Hoạt động">Hoạt động</Option>
              <Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
            </Select>

          </div>
        </div>
        <div className="col-3">
          <div className='layout_ThietBi_row1_text'>Trạng thái kết nối </div>
          <div>
          <Select defaultValue="Tất cả" style={{ width:'100%' }} >
              <Option value="Tất cả">Tất cả</Option>
              <Option value="Kết nối">Kết nối</Option>
              <Option value="Mất kết nối">Mất kết nối</Option>
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
          <Table columns={columns} dataSource={data} style={{ height: '400px' }} />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}

export default ThietBi