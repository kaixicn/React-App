import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { TeamOutlined, HomeOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom'

export default function SideMenu() {
    
    //　メニュー内容
    const items = [
        {
            key: "Top",
            label: <Link to="/">トップ</Link>,
            icon: <HomeOutlined />,
            children: null
        },
        {
            key: "EmployeeManagement",
            label: '社員管理',
            icon: <TeamOutlined />,
            children:[
                {
                    key: "EmployeeList",
                    label: <Link to="/employee/employeeList">社員一覧</Link>,
                },
                {
                    key: "coding",
                    label: <Link to="/employee/coding">PAGE【工事中】</Link>,
                },
            ]
        },
    ];


    const { Sider } = Layout;
    const [ collapse, setCollapse ] = useState(false);

    function onCollapse(){
        setCollapse(!collapse)
    }
    
    return(
        <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" items={items} defaultSelectedKeys={['Top']}/>{/*  defaultSelectedKeys={['1']}  */}
        </Sider>
    )
}


