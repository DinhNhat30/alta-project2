import React from 'react'
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import "./Dashboard.css"

const DashBoard = () => {
    return (
        <div>
            <Layout className='layout_Dashboard'>
                <Header className='layout_Dashboard_Header' >
                    <div style={{ float:"left" }}>Dashboard</div>
                    <div>Lê quỳnh ái vâng</div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 , color: 'blue' }}>
                        DashBoard sadsa
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default DashBoard