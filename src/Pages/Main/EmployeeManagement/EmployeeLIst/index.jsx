import React from 'react'
import {Space} from 'antd';
import SearchAreaLogic from './SearchAreaLogic';
import SearchResultList from './SearchResultList'

//没在用
export function EmployeeList_fn(props) {

    return <Space direction="vertical" size="middle" style={{display: 'flex'}}>
        <SearchAreaLogic/>
        <SearchResultList/>
    </Space>
}

export default class EmployeeList extends React.Component {

    render() {
        return (
            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                <SearchAreaLogic/>
                <SearchResultList/>
            </Space>
        )
    }
}
