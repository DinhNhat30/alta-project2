import React, { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { Form, Modal, message, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import Modal1 from '../../../template/Modal/Modal';
import './AddCapSo.css';


const { Option } = Select;
function handleChange(value: any) {
    console.log(`selected ${value}`);
}

const AddCapSo = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };



    return (
        <div className='layout_AddThietBi'>
            <div className='layout_AddThietbi_Header row' >
                <div className='layout_AddThietbi_Header_Text col-8'>
                    <div>
                        <strong style={{ color: '#7E7D88' }}>Cấp số</strong>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <strong style={{ color: '#7E7D88' }}>Danh sách cấp số</strong>
                        <AiOutlineRight style={{ color: '#7E7D88', fontSize: '14px', width: '25px' }} />
                        <strong>Cấp số mới</strong>
                    </div>
                </div>
                <div className=' layout_AddThietbi_Header_HoTen col-4' style={{ background: '#F7F7F7' }}>
                    <Modal1 />
                </div>
                <div className='clear_both'></div>
            </div>


            <div className="row layout_AddThietBi_row">
                <div className='layout_AddThietBi_row_text'> Quản lý cấp số </div>
            </div>
            <Form
                form={form}
                layout="vertical"
                style={{ height: '585px' }}
                autoComplete="off"
                className="layout_AddThietBi_row1">
                <div className="layout_AddCapSo_Form_text">
                    Cấp số mới
                </div>
                <div className='layout_AddCapSo_Form_text_1'>
                    Dịch vụ khách hàng lựa chọn
                </div>
                <div className='layout_AddCapSo_Form_Select' >
                    <Select defaultValue="Chọn dịch vụ" style={{ width: '100%', marginLeft: '352px', marginTop: '15px' }} onChange={handleChange}>
                        <Option className="layout_AddCapSo_Form_Select_option" value="Khám tim mạch">Khám tim mạch</Option>
                        <Option className="layout_AddCapSo_Form_Select_option" value="khám sản - phụ khoa">khám sản - phụ khoa</Option>

                        <Option className="layout_AddCapSo_Form_Select_option" value="khám răng hàm mặt">khám răng hàm mặt</Option>
                        <Option className="layout_AddCapSo_Form_Select_option" value="khám tai mũi họng">khám tai mũi họng</Option>
                    </Select>
                </div>
                <div className='layout_AddCapSo_Form_Button'>
                    <Link to={'/capso'}> <Button className='layout_AddCapSo_Form_Button_1'>Hủy bỏ</Button></Link>

                    <Button className='layout_AddCapSo_Form_Button_2' onClick={showModal}>In số</Button>
                </div>

            </Form>
            <Modal visible={isModalVisible} footer={null} onCancel={()=>{setIsModalVisible(false)}}>
               <div className='layout_AddCapSo_Modal'>
                   Số thứ tự được cấp 
               </div>
               <div className='layout_AddCapSo_Modal_random'>
                  {((Math.random()*10000000) +1).toFixed(0) }
               </div>
               <div className='layout_AddCapSo_Modal_DichVu'>
                   DV: khám răng hàm mặt <strong>(tại quầy số 1)</strong>
               </div>
               <div className='layout_AddCapSo_Modal_footer'>
                   <div className='layout_AddCapSo_Modal_footer_text'>
                       Thời gian cấp: 09:30 11/10/2021
                   </div>
                   <div className='layout_AddCapSo_Modal_footer_text mt-2'>
                       Hạn sử dụng: 17:30 11/10/2021
                   </div>
               </div>
            </Modal>
        </div>
    )
}

export default AddCapSo
