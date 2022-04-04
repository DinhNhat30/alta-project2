import React from 'react'
import './Forgot.css'
import '../login/Login.css'
export const Forgot = () => {
    return (
        <div className='forgot_layout'>
            <div className='login_Layout_Left'>
                <div className='login_Layout_Left_logo'>
                    <img className='login_Layout_Left_logo_img' src="./image/Logoalta.png" alt="" />
                </div>
                <div className='forgot_Layout_Left_text'>
                    Đặt lại mật khẩu
                </div>
                <div className='forgot_Layout_Left_text_1'>
                    Vui lòng nhập email để đặt lại mật khẩu của bạn *
                </div>
                <div >
                    <input className='forgot_Layout_Left_input' type="text" />
                </div>

                   <div className='forgot_Layout_Left_button_group' >
                   <button className='forgot_Layout_Left_button'>Hủy</button>
                    <button className='forgot_Layout_Left_button_1'>Tiếp tục</button>
                   </div>
                
            </div>
            <div className='forgot_Layout_Right'>
                <img className='forgot_Layout_Right_img' src="./image/Frame.png" alt="" />
            </div>
            <div className='clear_both'></div>
        </div>
    )
}

