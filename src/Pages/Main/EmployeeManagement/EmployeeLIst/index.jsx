import React from 'react'
import {Space} from 'antd';
import SearchAreaLogic from './SearchAreaLogic';
import SearchResultListLogic from './SearchResultListLogic'

//
export default function EmployeeList_fn(props) {
    return(
        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <SearchAreaLogic/>
            <SearchResultListLogic/>
        </Space>
    )
}


