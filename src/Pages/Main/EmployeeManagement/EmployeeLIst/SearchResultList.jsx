import React from 'react'
import { Table, Space, } from 'antd';

const columns = [
  { title: '社員ID',    dataIndex: 'employeeId', sorter: (a, b) => a.age - b.age, },
  { title: '社員名(漢字)',    dataIndex: 'employeeNameKanji', },
  { title: '社員名(カタカナ)',    dataIndex: 'employeeNameKatakana', },
  { title: '分課',    dataIndex: 'subdivision', },
  { title: '入社日',     dataIndex: 'entryDate',     sorter: (a, b) => a.age - b.age, },
  { title: '操作', key: 'action', render: (record) => ( <Space size="middle"> <span>{record.age}</span> </Space> ), },
];

const data = [];

//set Data from store.getState
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    employeeId: i,
    employeeNameKanji: 'employeeNameKanji' + i,
    employeeNameKatakana: 'employeeNameKatakana' + i,
    subdivision: "subdivision",
    entryDate: `${i}2`,
    description: `工事中`,
  });
}

const expandable = { expandedRowRender: record => <p>{record.description}</p> };

export default class FromList extends React.Component {
  state = {
    bordered: true,
    loading: false,
    bottom: 'bottomCenter',
    size: 'small',
    expandable,
    title: () => '検索結果一覧',
    showHeader:true,
    hasData: true,
    top: 'none',
  };

  render() {
    const { ...state } = this.state;
    const tableColumns = columns.map(item => ({ ...item }));
    return (
      <>
        <Table
          {...this.state}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
        />
      </>
    );
  }
}
