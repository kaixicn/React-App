import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { TeamOutlined, HomeOutlined, ExportOutlined, SettingOutlined, BugOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

export default function SideMenu() {
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

//　メニュー内容
const items = [
    {
        key: "Top",
        label: <Link to="/">トップ</Link>,
        icon: <HomeOutlined />,
    },
    {
        key: "EmployeeManagement",
        label: '社員管理',
        icon: <TeamOutlined />,
        children:[
            {
                key: "EmployeeList",
                label: <Link to="/employee/management">社員一覧</Link>,
            },
            {
                key: "coding",
                label: <Link to="/employee/coding">PAGE【工事中】</Link>,
            },
    
        ]
    },

    {
        key: "setting",
        label: <Link to="/setting">設定</Link>,
        icon: <SettingOutlined />,
    },
    {
        key: "logOut",
        label: <Link to="/logout">ログアウト</Link>,
        icon: <ExportOutlined />,
    },
    {
        key: "test",
        label: <Link to="/test">Test</Link>,
        icon: <BugOutlined />,
    },
];

