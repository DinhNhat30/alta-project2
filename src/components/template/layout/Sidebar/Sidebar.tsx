import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { Layout, Menu } from 'antd';
import { BsColumnsGap, BsFileEarmarkBarGraph, BsOctagon } from "react-icons/bs";
import { BiLayer } from "react-icons/bi";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { AiOutlineComment ,AiOutlineExport } from "react-icons/ai";
import { DesktopOutlined, } from '@ant-design/icons'
import "./Sidebar.css";
import 'antd/dist/antd.css';
import Cty from '../../../../assets/images/Logoalta.png';

const { Header, Content, Footer, Sider } = Layout;

const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <BsColumnsGap />
    },
    {
        title: "Thiết bị ",
        path: "/thietbi",
        icon: <DesktopOutlined />
    },
    {
        title: "Dịch vụ",
        path: "/dichvu",
        icon: <AiOutlineComment />
    },
    {
        title: "Cấp số",
        path: "/capso",
        icon: <BiLayer />
    },
    {
        title: "Báo cáo",
        path: "/baocao",
        icon: <BsFileEarmarkBarGraph />
    },
    {
        title: "Cài đặt hệ thống",
        path: "/hethong",
        icon: <BsOctagon />,
        icon1: <IoEllipsisVerticalOutline />
    }
]

const Sidebar = () => {

    return (
        <div >

            <Sider >
                <div className="Sidebar_logo" >
                    <img className='Sidebar_logo_img' width={80} src={Cty} alt="" />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    {SidebarData.map((item, index) => {
                        return (
                            <Menu.Item key={index} >
                                <Link to={`${item.path}`}>
                                    {item.icon} {item.title} {item.icon1}
                                </Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
                <div className='Siderbar_Logout'>
                    <Link className='Siderbar_Logout_Link' to={`/login`}> <strong style={{ marginRight:"10px" , fontSize:"20px" }}> <AiOutlineExport/></strong> <strong>Đăng xuất</strong></Link>
                </div>

            </Sider>


        </div>
    )
}
export default Sidebar