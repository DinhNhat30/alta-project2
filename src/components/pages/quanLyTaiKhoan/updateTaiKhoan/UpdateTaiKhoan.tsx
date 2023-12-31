import React, { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { Form, Input, Button, Select } from 'antd';
import Modal from '../../../template/Modal/Modal';
import sao from '../../../../assets/images/sao.png';
import { Link } from 'react-router-dom';
import Vector from '../../../../assets/images/Vector.png'

const { Option } = Select;

function handleChange(value: any) {
    console.log(`selected ${value}`);
}


const { TextArea } = Input;


const UpdateTaiKhoan = () => {
    const [form] = Form.useForm();
  return (
    <div className='layout_AddThietBi'>
    <div className='layout_AddThietbi_Header row' >
        <div className='layout_AddThietbi_Header_Text col-8'>
            <div>
                <strong style={{ color: '#7E7D88' }}>Cài đặt hệ thống</strong>
                <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                <Link style={{ textDecoration: 'none' }} to='/quanlytaikhoan'><strong style={{ color: '#7E7D88' }}>Quản lý tài khoản </strong></Link>
                <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                <strong>Cập nhật tài khoản  </strong>
            </div>
        </div>
        <div className=' layout_AddThietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
            <Modal />
        </div>
        <div className='clear_both'></div>
    </div>
    <div className="row layout_AddThietBi_row">
        <div className='layout_AddThietBi_row_text'> Danh sách vai trò </div>
    </div>
    <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        className="">
        <div className='layout_addVaiTro_form mt-3'>
            <div className='layout_addVaiTro_form_thongTin'>
                Thông tin tài khoản
            </div>
            <div className='layout_addVaiTro_form_left'>
                <div className='layout_addVaiTro_form_left_text'>
                    Họ tên <img style={{ marginLeft: '5px' }} src={sao} />
                </div>
                <Input value='Nguyen Van A' />
                <div className='layout_addVaiTro_form_left_text_1'>
                    Số điện thoại <img style={{ marginLeft: '5px' }} src={sao} />
                </div>
                <Input value='090990909'  />
                <div className='layout_addVaiTro_form_left_text_1'>
                    Email <img style={{ marginLeft: '5px' }} src={sao} />
                </div>
                <Input value='NguyenA123@gmail.com' type='email' />
                <div className='layout_addVaiTro_form_left_text_1'>
                    Vai trò <img style={{ marginLeft: '5px' }} src={sao} />
                </div>
                <Select defaultValue="Chọn vai trò" style={{ width: '100%', fontSize: '16px', marginTop: '8px' }} onChange={handleChange} suffixIcon={ <img src={Vector} /> }>
                    <Option value="ketoan">Kế toán</Option>
                    <Option value="bacsi">Bác sĩ</Option>
                    <Option value="letan">Lễ tân</Option>
                </Select>
                <div className='layout_addVaiTro_form_left_text mt-4'>
                    <img src={sao} /> Là trường thông tin bắt buộc
                </div>
            </div>
            <div className='layout_addVaiTro_form_right'>
                <div className='layout_addVaiTro_form_right_text' style={{ marginBottom:'7px' }}>
                    Tên đăng nhập  <img style={{ marginLeft: '5px' }} src={sao} />
                </div>
                <Input style={{ height:'44px' }} value='tuyetnguyen123' />
                <div className='layout_addVaiTro_form_left_text_1' style={{ marginTop:'17px', marginBottom:'7px' }}>
                    Mật khẩu <img style={{ marginLeft: '5px' }} src={sao} />
                </div>
                <Input.Password style={{ height:'44px' , borderRadius:'8px' }} value='tuyetnguyen123'  />
                <div className='layout_addVaiTro_form_left_text_1' style={{ marginTop:'17px', marginBottom:'7px' }}>
                    Nhập lại mật khẩu <img style={{ marginLeft: '5px' }} src={sao} />
                </div>
                <Input.Password value='tuyetnguyen123' style={{ height:'44px' , borderRadius:'8px' }}  />
                <div className='layout_addVaiTro_form_left_text_1' style={{ marginTop:'17px' }}>
                    Tình trạng <img style={{ marginLeft: '5px' }} src={sao} />
                </div>
                <Select defaultValue="Hoạt động" style={{ width: '100%', fontSize: '16px', marginTop: '8px' }} onChange={handleChange}>
                    <Option value="hoatdong">Hoạt động</Option>
                    <Option value="ngunghoatdong">Ngưng hoạt động</Option>
                </Select>
            </div>
            <div style={{ clear: 'both' }}></div>
        </div>
        <div className='row mt-4'>
            <div className='col-6 text-end' >
                <Button className='layout_addThietBi_row_Button' type="primary" htmlType="submit">
                    Hủy bỏ
                </Button>
            </div>
            <div className='col-6 text-start'>
                <Button className='layout_addThietBi_row_Button1'>
                Cập nhật
                </Button>
            </div>

        </div>

    </Form>


</div>
  )
}

export default UpdateTaiKhoan
