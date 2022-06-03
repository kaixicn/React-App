import React from 'react'
import {Button, Card, Checkbox, Input, Space} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {reducer_loading} from "../../../../redux/store_new";


function useFunctions() {
    const isLoading = useSelector((state) => state.counter.store_loading)
    const dispatch = useDispatch()

    const updateLoading = (value) => {
        dispatch(reducer_loading(value))
    }

    return {isLoading, updateLoading}
}

export default function SearchArea(props) {
    const plainOptions = [
        {label: '営業', value: 1,},
        {label: '開発', value: 2,},
        {label: '事務', value: 3,},
    ];

    const {isLoading, updateLoading} = useFunctions()


    return (
        <Card title="検索条件" size="small" extra={
            <Button type="primary" icon={<SearchOutlined/>} loading={props.state_loading}
                    onClick={() => {
                        props.onClick_search(
                            true,
                            props.state_employeeId,
                            props.state_employeeNameKanji,
                            props.state_employeeNameKatakana,
                            props.state_subdivision,
                        )
                    }}>
                Search
            </Button>
        }>
            <Space size={[50, 5]} wrap>
                <Input addonBefore="社員ID :" placeholder="000000" onChange={props.onChange_employeeId}/>
                <Input addonBefore="社員名(漢字) :" onChange={props.onChange_employeeNameKanji}/>
                <Input addonBefore="社員名(カタカナ) :" onChange={props.onChange_employeeNameKatakana}/>
                <Checkbox.Group options={plainOptions} defaultValue={[1, 2, 3]} onChange={props.onChange_subdivision}
                                name="subdivision"/>
            </Space>
        </Card>
    )
}




