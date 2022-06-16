import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { TeamOutlined, HomeOutlined, ExportOutlined, SettingOutlined, BugOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import {reducer_isLogin} from '../../redux/slices/login';
import { removeLoginInfo } from '../../utils/LoginUtility';
import { useDispatch } from 'react-redux'

const { confirm } = Modal;

export default function SideMenu() {
    
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
            label: "ログアウ",
            icon: <ExportOutlined />,
            onClick: () => { 
                confirm({
                    title: <span>ログアウト確認</span>,
                    icon: <ExclamationCircleOutlined />,
                    content: 'ログアウトします、よろしいですか？',

                    onOk() {
                        removeLoginInfo();
                        dispatch(reducer_isLogin(false));
                        
                    },
                onCancel() {},
            }); }
        },
        {
            key: "test",
            label: <Link to="/test">Test</Link>,
            icon: <BugOutlined />,
        },
    ];



    const dispatch = useDispatch();
    
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


