import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, HomeOutlined, TeamOutlined } from '@ant-design/icons';
import './index.css'
import { PageHeader } from 'antd';
import { Breadcrumb } from 'antd';
import { Space } from 'antd';
import { useLocation } from 'react-router-dom';
import cookie from 'react-cookies';
import cookieKeys from '../../ContentMaster/cookieKeys';
import { Decrypt } from '../../utils/secret'

export default function Header(props) {

    const breadcrumbMap = new Map();
    breadcrumbMap.set("employee", [<TeamOutlined/>,"社員管理"]);
    breadcrumbMap.set("employeeList", ["社員一覧"]);

    let location = useLocation();
    let locationArray = location.pathname.split("/")
    let breadcrumb = []

    if(locationArray[1] === ""){
        breadcrumb[0] = <Breadcrumb.Item><HomeOutlined/>トップ</Breadcrumb.Item>
    }else{
        let breadcrumbPath;
        for(let i = 1; i < locationArray.length; i++){

            if(i === 1){
                breadcrumb[i-1] = <Breadcrumb.Item>{breadcrumbMap.get(locationArray[i])}</Breadcrumb.Item>
            }else if(i !== locationArray.length -1) {
                breadcrumbPath = locationArray[i] + "/"
                let newBreadcrumbPath = breadcrumbPath
                breadcrumbPath = []
                breadcrumb[i-1] = <Breadcrumb.Item href={newBreadcrumbPath}>{breadcrumbMap.get(locationArray[i])}</Breadcrumb.Item>
            }else {
                breadcrumb[i-1] = <Breadcrumb.Item>{breadcrumbMap.get(locationArray[i])}</Breadcrumb.Item>
            }
        }
    }
    
    const employeeId = Decrypt(cookie.load(cookieKeys.login_id))
    const employeeName = Decrypt(cookie.load(cookieKeys.employee_name))
    return(
        <>
            <PageHeader 
                className="site-page-header-ghost-wrapper" 
                title = "title"
                subTitle="This is a subtitle" 
                onBack={() => window.history.back()}
                extra = {
                    <Space size={20}>
                        <span>ID: <p className="inline">{employeeId}</p></span>
                        <span>名前: <p className="inline">{employeeName}</p></span>
                        <Avatar shape="square" size={32} icon={<UserOutlined />} />
                    </Space>
                }
            />
            <div>
                <Breadcrumb className="breadcrumb" separator=">">
                    {/* <Breadcrumb.Item href="/">工事中</Breadcrumb.Item>
                    <Breadcrumb.Item href="/employee/employeeList"><TeamOutlined/>工事中1</Breadcrumb.Item>
                    <Breadcrumb.Item>工事中2</Breadcrumb.Item> */}
                    {breadcrumb.map((item) => item)}
                </Breadcrumb>
            </div>
        </>
    )
}