import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { TeamOutlined, } from '@ant-design/icons';
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
            <Menu theme="dark" mode="inline" items={items} />{/*  defaultSelectedKeys={['1']}  */}
        </Sider>
    )
}

//　メニュー内容
const items = [
    {
        key: "EmployeeManagement",
        label: 'Employee',
        icon: <TeamOutlined />,
        children:[
            {
                key: "EmployeeList",
                label: <Link to="/employee/management">EmployeeList</Link>,
            },
            {
                key: "IssueEmployeeId",
                label: <Link to="/employee/IssueEmployeeId">工事中</Link>,
            },
    
        ]
    },
];

