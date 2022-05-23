import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

export default class PageFooter extends React.Component{
    render(){
        return(
            <Footer style={{ textAlign: 'center', }} >
                Ant Design ©2021 Created by Ant UED
            </Footer>
        )
    }
}