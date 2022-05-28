import React from 'react'
import {Button, Card, Checkbox, Input, Space} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

export default function SearchArea(props) {
    console.log(props)
    const plainOptions = [
        {label: '営業', value: 1,},
        {label: '開発', value: 2,},
        {label: '事務', value: 3,},
    ];

    const employeeIdRef = React.useRef()
    const employeeNameRef = React.useRef()
    const employeeKatakanaRef = React.useRef()
    const employeeSubdivisionRef = React.useRef()

    return (
        <Card title="検索条件" size="small" extra={
            <Button type="primary" icon={<SearchOutlined/>} loading={props.loading}
                    onClick={() => {
                        props.search(true,
                            employeeIdRef.current,
                            employeeNameRef.current,
                            employeeKatakanaRef.current,
                            employeeSubdivisionRef.current
                    )}}>
                Search
            </Button>
        }>
            <Space size={[50, 5]} wrap>
                <Input addonBefore="社員ID :" placeholder="000000" onChange={console.log("coding")} ref={employeeIdRef}/>
                <Input addonBefore="社員名(漢字) :" onChange={console.log("coding")} ref={employeeNameRef}/>
                <Input addonBefore="社員名(カタカナ) :" onChange={console.log("coding")} ref={employeeKatakanaRef} />
                <Checkbox.Group options={plainOptions} defaultValue={[1, 2, 3]} onChange={console.log("coding")} name="subdivision" ref={employeeSubdivisionRef}/>
            </Space>
        </Card>
    )
}




