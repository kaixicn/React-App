import React from 'react'
import { Space } from 'antd';
import SearchArea from './SearchArea';
import SearchResultList from './SearchResultList'


export default class EmployeeList extends React.Component{

    render(){
        return(
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <SearchArea/>
                <SearchResultList/>
            </Space>
        )
    }
}