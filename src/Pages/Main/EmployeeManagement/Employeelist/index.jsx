import React from 'react'
import { Space } from 'antd';
import SearchArea from './SearchArea';
import SearchResultList from './SearchResultList'

export default function EmployeeList_fn(props) {
    return(
        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <SearchArea/>
            <SearchResultList/>
        </Space>
    )
}


