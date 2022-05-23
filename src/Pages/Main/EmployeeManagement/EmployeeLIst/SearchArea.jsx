import React from 'react'
import { Input, Button, Space, Checkbox, Card   } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from "axios";
import store from './redux/store'
import { addEmployeeList } from './redux/action'

export default class SearchArea extends React.Component{
    state = {
        employeeId:"",
        employeeNameKanji:"",
        employeeNameKatakana:"",
        subdivision:[],
        loadings:false,
    }
    clickSearch = () => {
        this.setState({loadings:true})
        
        axios.get('http://localhost:3000/management/employee/search').then(
            //请求成功
            response => {
                if(response.data){
                    console.log(response.data)
                    //TODO Uncaught (in promise) TypeError: _redux_store__WEBPACK_IMPORTED_MODULE_2__.default.dispath is not a function
                    store.dispath(addEmployeeList(() => {return [...response.data]} ))
                    
                    this.setState({loadings:false})
                }else{
                    
                    this.setState({loadings:false})
                }
            },
            //请求失败
            error => {
                console.log("请求失败")
                this.setState({loadings:false})
            }
        )
        
    }
    handleChangeEmployeeId = (e) => {
        const newEmployeeId = e.target.value
        this.setState({
            employeeId:newEmployeeId,
        })
    }
    handleChangeEmployeeNameKanji = (e) => {
        const newEmployeeNameKanji = e.target.value
        this.setState({
            employeeNameKanji:newEmployeeNameKanji,
        })
    }
    handleChangeEmployeeNameKatakana = (e) => {
        const newEmployeeNameKatakana = e.target.value
        this.setState({
            employeeNameKatakana:newEmployeeNameKatakana,
        })
    }
    handleChangeSubdivision = (e) => {
        const newSubdivision = e
        this.setState({
            subdivision:[...newSubdivision],
        })
    }
    render(){

        const plainOptions = [
            { label: '営業', value: 1, },
            { label: '開発', value: 2, },
            { label: '事務', value: 3, },
        ];

        return(
            <Card title="検索条件" size="small" extra={
                <Button type="primary" icon={<SearchOutlined />} loading = { this.state.loadings} onClick={this.clickSearch} >
                    Search
                </Button>
            }>
                <Space size={[50, 5]} wrap>
                    <Input addonBefore="社員ID :" placeholder="000000" onChange={this.handleChangeEmployeeId}/>
                    <Input addonBefore="社員名(漢字) :" onChange={this.handleChangeEmployeeNameKanji} />
                    <Input addonBefore="社員名(カタカナ) :" onChange={this.handleChangeEmployeeNameKatakana}/>
                    <Checkbox.Group options={plainOptions} defaultValue={[1, 2, 3]} onChange={this.handleChangeSubdivision} name="subdivision"/>
                </Space>
            </Card>
        )
    }
}