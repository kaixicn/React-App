import React, { useState } from 'react'
import axios from "axios";
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined, QuestionCircleTwoTone } from '@ant-design/icons';
import { Button, Card, Checkbox, Input, Space, message, Popover, Radio } from 'antd';
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
                    message.success('検索成功、結果['+ response.data.length + ']件', [1]);
                    dispatch(reducer_employeeInfoList(response.data))
                }
            },
            //请求失败
            error => {
                message.error('検索失敗しました', [1]);
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
    
    const text = <span>検索条件</span>;
    const content = (
        <div>
            <p>有：指定条件の社員を検索する</p>
            <p>無：全ての在籍社員を検索する</p>
        </div>
    );

    const [searchCondtions,setSearchCondtions] = useState(true)
    return (
        <Card title={
                <>
                    <Space size={[10, 0]} wrap={false}>
                        検索条件:
                        <Radio.Group onChange={console.log("aaaa")} size="small" value={searchCondtions}>
                            <Radio.Button value={true} onClick={()=> setSearchCondtions(true)}>有</Radio.Button>
                            <Radio.Button value={false} onClick={()=> setSearchCondtions(false)}>無</Radio.Button>
                        </Radio.Group>
                        <Popover title={text} content={content}>
                            <QuestionCircleTwoTone />
                        </Popover>
                    </Space>
                </>
            } 
            size="small" extra={
                <Button type="primary" icon={<SearchOutlined/>} loading={isLoading} onClick={onClickSeartch}>
                    Search
                </Button>
            }>
            
            <Space size={[0, 10]} wrap={true}>
                <Space size={[20, 5]} wrap={false}>
                    <Space size={[5, 5]} wrap={true}>
                        社員ID : <Input placeholder="000000" onChange={handleChangeEmployeeId} disabled={!searchCondtions}/>
                    </Space>
                    <Space size={[5, 5]} wrap={true}>
                        社員名 : <Input onChange={handleChangeEmployeeName} disabled={!searchCondtions}/>
                    </Space>
                    <Space size={[5, 5]} wrap={true}>
                        社員名(カタカナ) : <Input onChange={handelChangeEmployeeNameKana} disabled={!searchCondtions}/>
                    </Space>
                    <Space size={[5, 5]} wrap={true}>
                        分課 : <Checkbox.Group options={plainOptions} defaultValue={[1, 2, 3]} onChange={handelChangeSubdivision} name="subdivision" disabled={!searchCondtions}/>
                    </Space>
                </Space>
                <Space size={[30, 5]} wrap={false}>
                    <Space size={[5, 5]} wrap={true}>
                    </Space>
                    <Space size={[5, 5]} wrap={true}>
                    </Space>
                    <Space size={[5, 5]} wrap={true}>
                    </Space>
                    <Space size={[5, 5]} wrap={true}>
                    </Space>
                </Space>
            </Space>
        </Card>
    )
}