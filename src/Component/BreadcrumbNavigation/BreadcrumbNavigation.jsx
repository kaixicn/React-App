import React from 'react'
import { Breadcrumb } from 'antd';

export default class BreadcrumbNavigation extends React.Component{
    render(){
        return(
            <Breadcrumb style={{ margin: '16px 0', }} >
                <Breadcrumb.Item>Breadcrumb1</Breadcrumb.Item>
                <Breadcrumb.Item>Breadcrumb2</Breadcrumb.Item>
                <Breadcrumb.Item>工事中</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}