import React, { useEffect, useState } from 'react'
import { AiOutlineComment } from "react-icons/ai";
import { BiLayer } from "react-icons/bi";
import { DesktopOutlined, } from '@ant-design/icons'
import "./Dashboard.css"
import { Modal } from 'antd';
import { Area } from '@ant-design/charts';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;



const DemoRingProgress = () => {

    const config = {
        height: 70,
        width: 80,
        autoFit: false,
        percent: 0.9,
        color: ['#FF7506', '#E8EDF3'],

    };
    return <RingProgress {...config} />;
};

const DemoRingProgress1 = () => {

    const config = {
        height: 70,
        width: 80,
        autoFit: false,
        percent: 0.76,
        color: ['#4277FF', '#E8EDF3'],

    };
    return <RingProgress {...config} />;
};

const DemoRingProgress2 = () => {

    const config = {
        height: 70,
        width: 80,
        autoFit: false,
        percent: 0.86,
        color: ['#35C75A', '#E8EDF3'],

    };
    return <RingProgress {...config} />;
};




const DashBoard = () => {

    const [visible, setVisible] = useState(false);
    const DemoArea = () => {
        const data = [
            {
                "timePeriod": "1",
                "value": 1000
            },
            {
                "timePeriod": "2",
                "value": 1080
            },
            {
                "timePeriod": "3",
                "value": 1170
            },
            {
                "timePeriod": "4",
                "value": 1260
            },
            {
                "timePeriod": "5",
                "value": 1340
            },
            {
                "timePeriod": "6",
                "value": 1410
            },
            {
                "timePeriod": "7",
                "value": 1520
            },
            {
                "timePeriod": "8",
                "value": 1670
            },
            {
                "timePeriod": "9",
                "value": 1840
            },
            {
                "timePeriod": "10",
                "value": 2070
            },
            {
                "timePeriod": "11",
                "value": 2390
            },
            {
                "timePeriod": "12",
                "value": 2710
            },
            {
                "timePeriod": "13",
                "value": 3030
            },
            {
                "timePeriod": "14",
                "value": 3330
            },
            {
                "timePeriod": "15",
                "value": 3500
            },
            {
                "timePeriod": "16",
                "value": 3370
            },
            {
                "timePeriod": "17",
                "value": 3150
            },
            {
                "timePeriod": "18",
                "value": 3010
            },
            {
                "timePeriod": "19",
                "value": 2800
            },
            {
                "timePeriod": "20",
                "value": 2800
            },
            {
                "timePeriod": "21",
                "value": 2840
            },
            {
                "timePeriod": "22",
                "value": 2750
            },
            {
                "timePeriod": "23",
                "value": 2640
            },
            {
                "timePeriod": "24",
                "value": 5550
            },
            {
                "timePeriod": "25",
                "value": 2460
            },
            {
                "timePeriod": "26",
                "value": 2450
            },
            {
                "timePeriod": "27",
                "value": 2570
            },
            {
                "timePeriod": "28",
                "value": 2680
            },
            {
                "timePeriod": "29",
                "value": 2800
            },
            {
                "timePeriod": "30",
                "value": 2890
            }

        ];
        const config = {
            data,

            xField: 'timePeriod',
            yField: 'value',

            xAxis: {
                range: [0, 1],
                tickCount: 6,
            },
            smooth: true,
            line: {
                color: '#5185F7',
                size: 2,
                height: 400,
            },


            areaStyle: () => {
                return {
                    fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
                    height: 300,
                };
            },
        };

        return <Area {...config} />;
    };


    return (
        <div>
            <div className='layout_Dashboard '>
                <div className='layout_Dashboard_Header row' >
                    <div className='layout_Dashboard_Header_Text col-8'>
                        <p>Dashboard</p>
                    </div>
                    <div className=' layout_Dashboard_Header_HoTen col-4'>
                        <div className='layout_Dashboard_Header_img' onClick={() => setVisible(true)}>
                            <img src="./image/thongbao.png" alt="" />
                        </div>
                        <div className='layout_Dashboard_Header_img1'>
                            <img src="./image/avata.png" alt="" />
                        </div>
                        <div className='layout_Dashboard_Header_TT'>
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
                <div className='row'>
                    <div className='col-8'>
                        <div className='layout_Dashboard_BieuDo'>Biểu đồ cấp số</div>
                        <div className='row' style={{ padding: '0px 45px' }}>
                            <div className="layout_Dashboard_STT col-3">
                                <div style={{ height: '61px' }}>
                                    <img className='layout_Dashboard_STT_img' src="./image/1.png" alt="" />
                                    <div className='layout_Dashboard_STT_text'>Số thứ tự đã cấp </div>
                                </div>
                                <div  >
                                    <div className='layout_Dashboard_STT_text_1'>4.221</div>
                                    <div >
                                        <img className='layout_Dashboard_STT_img_1' src="./image/tang1.png" alt="" />
                                    </div>
                                </div>
                                <div className='clear_both'></div>
                            </div>
                            <div className="layout_Dashboard_STT col-3">
                                <div style={{ height: '61px' }}>
                                    <img className='layout_Dashboard_STT_img' src="./image/2.png" alt="" />
                                    <div className='layout_Dashboard_STT_text'>Số thứ tự đã sử dụng</div>
                                </div>
                                <div  >
                                    <div className='layout_Dashboard_STT_text_1'>3.721</div>
                                    <div >
                                        <img className='layout_Dashboard_STT_img_1' src="./image/tang2.png" alt="" />
                                    </div>
                                </div>
                                <div className='clear_both'></div>
                            </div>
                            <div className="layout_Dashboard_STT col-3">
                                <div style={{ height: '61px' }}>
                                    <img className='layout_Dashboard_STT_img' src="./image/3.png" alt="" />
                                    <div className='layout_Dashboard_STT_text'>Số thứ tự đang chờ </div>
                                </div>
                                <div  >
                                    <div className='layout_Dashboard_STT_text_1'>462</div>
                                    <div >
                                        <img className='layout_Dashboard_STT_img_1' src="./image/tang3.png" alt="" />
                                    </div>
                                </div>
                                <div className='clear_both'></div>
                            </div>
                            <div className="layout_Dashboard_STT col-3">
                                <div style={{ height: '61px' }}>
                                    <img className='layout_Dashboard_STT_img' src="./image/1.png" alt="" />
                                    <div className='layout_Dashboard_STT_text'>Số thứ tự đã bỏ qua </div>
                                </div>
                                <div  >
                                    <div className='layout_Dashboard_STT_text_1'>32</div>
                                    <div >
                                        <img className='layout_Dashboard_STT_img_1' src="./image/tang4.png" alt="" />
                                    </div>
                                </div>
                                <div className='clear_both'></div>
                            </div>

                        </div>
                        <div style={{ padding: "19px 70px", marginLeft: '-25px' }}>
                            <div className='layout_Dashboard_charts row'>
                                <div className='layout_Dashboard_charts_Thongke col-6'>
                                    <div className='layout_Dashboard_charts_Thongke_text'>Bảng thống kê theo ngày </div>
                                    <div>Tháng 11/2021</div>
                                </div>
                                <div style={{ padding: '20px', height: '42px', display: 'block' }} className='col-6'>
                                    <div className='layout_Dashboard_charts_Thongke_text1'>
                                        Xem theo
                                    </div>

                                   

                                    <Select defaultValue="Ngày" style={{ width: 100, marginLeft:'10px' }} >
                                        <Option value="Ngày">Ngày</Option>
                                        <Option value="Tuần">Tuần</Option>
                                        <Option value="Tháng">Tháng</Option>
                                    </Select>

                                </div>
                                <div style={{ height: '280px' }}>
                                    <DemoArea />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 bg-white layout_Dashboard_left'>
                        <div className='layout_Dashboard_TongQuan'>Tổng quan</div>
                        <div className='layout_Dashboard_menu'>
                            <div className='layout_Dashboard_menu_charts' >
                                <DemoRingProgress />
                            </div>
                            <div className='layout_Dashboard_menu_Thongso'>
                                <div className='layout_Dashboard_menu_Thongso_text'>4221</div>
                                <div style={{ color: '#FF7506' }}><DesktopOutlined /> thiết bị</div>
                            </div>
                            <div className=''>
                                <ul className='layout_Dashboard_menu_hoatdong_ul'>
                                    <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamvang.png" alt="" /> Đang hoạt động <strong>3.779</strong></li>
                                    <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxam.png" alt="" /> ngưng hoạt động <strong>422</strong></li>
                                </ul>

                            </div>
                        </div>

                        <div className='layout_Dashboard_menu'>
                            <div className='layout_Dashboard_menu_charts' >
                                <DemoRingProgress1 />
                            </div>
                            <div className='layout_Dashboard_menu_Thongso' >
                                <div className='layout_Dashboard_menu_Thongso_text'>276</div>
                                <div style={{ color: '#4277FF' }}><AiOutlineComment /> Dịch vụ</div>
                            </div>
                            <div className=''>
                                <ul className='layout_Dashboard_menu_hoatdong_ul'>
                                    <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxanh.png" alt="" /> Đang hoạt động <strong style={{ color: '#4277FF' }}>210</strong></li>
                                    <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxam.png" alt="" /> ngưng hoạt động <strong style={{ color: '#4277FF' }}>66</strong></li>
                                </ul>

                            </div>
                        </div>

                        <div className='layout_Dashboard_menu'>
                            <div className='layout_Dashboard_menu_charts' >
                                <DemoRingProgress2 />
                            </div>
                            <div className='layout_Dashboard_menu_Thongso'>
                                <div className='layout_Dashboard_menu_Thongso_text'>4221</div>
                                <div style={{ color: '#35C75A' }}><BiLayer /> Cấp số </div>
                            </div>
                            <div className=''>
                                <ul className='layout_Dashboard_menu_hoatdong_ul'>
                                    <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxanh.png" alt="" /> Đang sử dụng <strong style={{ color: '#35C75A' }}>3.779</strong></li>
                                    <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamxam.png" alt="" /> Đang chờ <strong style={{ marginLeft: '35px', color: '#35C75A' }}>422</strong></li>
                                    <li className='layout_Dashboard_menu_hoatdong_ul_li'> <img src="./image/chamhong.png" alt="" /> Bỏ qua <strong style={{ marginLeft: '50px', color: '#35C75A' }}>32</strong></li>
                                </ul>

                            </div>
                        </div>
                        {/* calendar lịch  */}
                        <div className="site-calendar-demo-card">
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard