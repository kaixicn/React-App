import React from 'react'
import axios from "axios";
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Input, Space } from 'antd';
import { 
    reducer_loading, 
    reducer_employeeId, 
    reducer_employeeName, 
    reducer_employeeNameKana, 
    reducer_subdivision, 
    reducer_employeeInfoList,
} from "../../../../redux/slices/employeeList";

export default function SearchArea(props) {
    const plainOptions = [
        {label: '営業', value: 1,},
        {label: '開発', value: 2,},
        {label: '事務', value: 3,},
    ];

    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.employeeList.loading)
    const employeeId = useSelector((state) => state.employeeList.employeeId)
    const employeeName = useSelector((state) => state.employeeList.employeeName)
    const emplyeeNameKana = useSelector((state) => state.employeeList.emplyeeNameKana)
    const subdivision = useSelector((state) => state.employeeList.subdivision)

    function onClickSeartch(){ 
        dispatch(reducer_loading(true))
        axios.get('http://localhost:3000/management/employee/search',{
            params: {
                employee_Id : employeeId,
                employee_name_kanji : employeeName,
                employee_Name_Katakana : emplyeeNameKana,
                employee_subdivision : qs.stringify({"subdivision":subdivision}, { indices: false })
            }
        }).then(
            //请求成功
            response => {
                if (response.data) {
                    console.log("请求成功")
                    dispatch(reducer_employeeInfoList(response.data))
                }
            },
            //请求失败
            error => {
                console.log("请求失败")
            }
        ).finally(() => {
            dispatch(reducer_loading(false))
        })
        
    }
    function handleChangeEmployeeId(data){
        const newEmployeeId = data.target.value;
        dispatch(reducer_employeeId(newEmployeeId));
    }
    function handleChangeEmployeeName(data) {
        const newEmployeeName = data.target.value;
        dispatch(reducer_employeeName(newEmployeeName));
    }
    function handelChangeEmployeeNameKana(data) {
        const newEmplyeeNameKana = data.target.value;
        dispatch(reducer_employeeNameKana(newEmplyeeNameKana));
    }
    function handelChangeSubdivision(data) {
        const newSubdivision = [...data]
        dispatch(reducer_subdivision(newSubdivision));
    }
    
    return (
        <Card title="検索条件" size="small" extra={
            <Button type="primary" icon={<SearchOutlined/>} loading={isLoading} onClick={onClickSeartch}>
                Search
            </Button>
        }>
            <Space size={[50, 5]} wrap>
                <Input addonBefore="社員ID :" placeholder="000000" onChange={handleChangeEmployeeId}/>
                <Input addonBefore="社員名(漢字) :" onChange={handleChangeEmployeeName}/>
                <Input addonBefore="社員名(カタカナ) :" onChange={handelChangeEmployeeNameKana}/>
                <Checkbox.Group options={plainOptions} defaultValue={[1, 2, 3]} onChange={handelChangeSubdivision} name="subdivision"/>
            </Space>
        </Card>
    )
}