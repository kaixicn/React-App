import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css'
import { PageHeader } from 'antd';
import { Breadcrumb } from 'antd';
import { Space } from 'antd';

export default function Header(props) {
    return(
        <>
        <PageHeader 
            className="site-page-header-ghost-wrapper" 
            title = "title"
            subTitle="This is a subtitle" 
            onBack={() => window.history.back()}
            extra = {
                <Space size={20}>
                    <span>ID: <p className="inline">123456</p></span>
                    <span>名前: <p className="inline">テスト太郎</p></span>
                    <Avatar shape="square" size={32} icon={<UserOutlined />} />
                </Space>
            }
        />
        <div>
            <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item>工事中</Breadcrumb.Item>
                <Breadcrumb.Item>工事中1</Breadcrumb.Item>
                <Breadcrumb.Item>工事中2</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        </>
    )
}