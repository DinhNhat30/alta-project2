import React, { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { Form, Input, message, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import Modal from '../../../template/Modal/Modal';
import './AddCapSo.css'

const { Option } = Select;

function handleChange(value: any) {
    console.log(`selected ${value}`);
}

const AddCapSo = () => {
    const [form] = Form.useForm();
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
                    <Modal />
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
                <div>
                    <div className="chosen-wrapper" data-js="custom-scroll">
                        <select className="chosen-select" data-placeholder="Lorem ipsum dolor sit amet">
                            <option></option>
                            <option>Consectetur adipiscing</option>
                            <option>Sed do eiusmod tempor</option>
                            <option>Incididunt ut labore</option>
                            <option>Voluptatem accusantium</option>
                            <option>Duis aute irure dolor </option>
                            <option>Nemo enim</option>
                            <option>Consectetur adipiscing</option>
                            <option>Sed do eiusmod tempor</option>
                            <option>Incididunt ut labore</option>
                            <option>Voluptatem accusantium</option>
                            <option>Duis aute irure dolor </option>
                            <option>Nemo enim</option>
                            <option>Consectetur adipiscing</option>
                            <option>Sed do eiusmod tempor</option>
                            <option>Incididunt ut labore</option>
                            <option>Voluptatem accusantium</option>
                            <option>Duis aute irure dolor </option>
                            <option>Nemo enim</option>
                        </select>
                    </div>
                </div>


            </Form>




        </div>
    )
}

export default AddCapSo
