import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { Layout, Menu } from 'antd';
import { BsColumnsGap, BsFileEarmarkBarGraph, BsOctagon } from "react-icons/bs";
import { BiLayer } from "react-icons/bi";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { DesktopOutlined, } from '@ant-design/icons'
import "./Sidebar.css";

const { Header, Content, Footer, Sider } = Layout;

const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
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
                    <img className='Sidebar_logo_img' width={80} src="./image/Logoalta.png" alt="" />
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
            </Sider>


        </div>
    )
}
export default Sidebar