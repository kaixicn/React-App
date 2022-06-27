import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import MenuRouter from '../../routers'

export default function SideMenu() {
    
    const items = MenuRouter;

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


