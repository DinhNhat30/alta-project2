import { ApiOutlined, AppstoreOutlined, DesktopOutlined, MessageOutlined, WindowsOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsColumnsGap ,BsFileEarmarkBarGraph,BsOctagon} from "react-icons/bs";
import { BiLayer } from "react-icons/bi";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { AiOutlineComment } from "react-icons/ai";
const LeftMenu = () => {
    const leftmenu = [
        {
            title: "Dashboard",
            path:"/",
            icon: <BsColumnsGap/>
        },
        {
            title: "Thiết bị ",
            path:"/thietbi",
            icon: <DesktopOutlined />
        },
        {
            title: "Dịch vụ",
            path:"/dichvu",
            icon: <AiOutlineComment />
        },
        {
            title: "Cấp số",
            path:"/capso",
            icon: <BiLayer />
        },
        {
            title: "Báo cáo",
            path:"/baocao",
            icon: <BsFileEarmarkBarGraph />
        },
        {
            title: "Cài đặt hệ thống",
            path:"/caidathethong",
            icon: <BsOctagon />,
            icon1: <IoEllipsisVerticalOutline/>
        }
    ]
  return (
    <div>
      <ul>
          {
              leftmenu.map(e => {
                  return <Link to = {e.path} >
                    <li>
                        <div>{e.icon}</div>
                        {e.title} 
                        <div>{e.icon1}</div>
                    </li>      
                </Link>
              })
          }
      </ul>
    </div>
  )
}

export default LeftMenu
