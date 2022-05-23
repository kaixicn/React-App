import React from 'react'
import { Layout, Menu } from 'antd';
import { TeamOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { Sider } = Layout;

export default class SideMenu extends React.Component{
    
    state = {
        collapsed: false,
    };
    
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
        });
    };

    render(){
        const { collapsed } = this.state;
        return(
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" items={items} />{/*  defaultSelectedKeys={['1']}  */}
            </Sider>
        )
    }
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

