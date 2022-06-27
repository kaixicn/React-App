import { useState } from 'react'
import { Table, Space, Button, } from 'antd';
import { useSelector, } from 'react-redux';

export default function SearchResultList(props) {

  const employeeInfoList = useSelector((state) => state.employeeList.employeeInfoList)
  const isLoading = useSelector((state) => state.employeeList.loading)
  
  //Columns
  const columns = [
    { title: '社員ID',    dataIndex: 'employeeId', sorter: (a, b) => a.age - b.age, },
    { title: '社員名(漢字)',    dataIndex: 'employeeNameKanji', },
    { title: '社員名(カタカナ)',    dataIndex: 'employeeNameKatakana', },
    { title: '分課',    dataIndex: 'subdivision', },
    { title: '入社日',     dataIndex: 'entryDate',     sorter: (a, b) => a.age - b.age, },
    { title: '操作', key: 'action', render: (record) => (
        <Space>
          <Button type="primary" loading={false} size="small" onClick={() => {  }}>編集</Button>{/* {record.employeeId} */}
          <Button loading={false} size="small" onClick={() => {  }} danger>離職</Button>
        </Space>
      )
    },
  ];
  const tableColumns = columns.map(item => ({ ...item }));
  
  
  //checkBox
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
    console.log('selectedRowKeys changed: ', selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  //Data
  let data = [];
  for (let i = 0; i < employeeInfoList.length; i++) {
    data.push({
      key: i,
      employeeId: employeeInfoList[i].employeeId,
      employeeNameKanji: employeeInfoList[i].employeeNameKanji,
      employeeNameKatakana: employeeInfoList[i].employeeNameKatakana,
      subdivision: employeeInfoList[i].subdivision,
      entryDate: employeeInfoList[i].entryDate,
      //description: `工事中`, 十字展开
    });
  }

  //十字展开
  // const expandable = { expandedRowRender: record => <p>{record.description}</p> };

  //页面一览的配置
  let state = {
    bordered: true,
    loading: isLoading, //検索中
    bottom: 'bottomCenter',
    size: 'small',
    // expandable,　十字展开
    showHeader:true,
    hasData: data.length < 1 ? false:true,
    top: 'topRight',
    tableLayout: "fixed",
    title: () => {
      return(
        <Space>
          <span>検索結果一覧</span>
          <span>(</span>
          <span>総件数 : {employeeInfoList.length}</span> 
          <span>|</span>
          <span>選択中 : {selectedRowKeys.length}</span> 
          <span>)</span>
        </Space>
      )
    },
    footer: () => {
      return (
        <div style={{ textAlign: 'right', }}>
          <Space>
            <Button type="primary" loading={false} onClick={() => { setSelectedRowKeys([]) }} disabled={selectedRowKeys.length === 0}>選択をクリア</Button>
            <Button type="primary" loading={false} onClick={() => { setSelectedRowKeys([]) }} danger disabled={selectedRowKeys.length === 0}>一括離職</Button>
          </Space>
        </div>
      )},
  };

  return (
    <>
      <Table
        {...state}
        columns={tableColumns}
        rowSelection={rowSelection}
        dataSource={state.hasData ? data : null}
        pagination={{ position: [state.top, state.bottom, ] }}
      />
    </>
  );
}
