import { Table, Space, } from 'antd';



export default function SearchResultList(props) {

  console.log("state_loading: ", props.state_loading)
  console.log("employee_list: ", props.employee_list)

  const columns = [
    { title: '社員ID',    dataIndex: 'employeeId', sorter: (a, b) => a.age - b.age, },
    { title: '社員名(漢字)',    dataIndex: 'employeeNameKanji', },
    { title: '社員名(カタカナ)',    dataIndex: 'employeeNameKatakana', },
    { title: '分課',    dataIndex: 'subdivision', },
    { title: '入社日',     dataIndex: 'entryDate',     sorter: (a, b) => a.age - b.age, },
    { title: '操作', key: 'action', render: (record) => ( <Space size="middle"> <span>{record.age}</span> </Space> ), },
  ];
  
  let data = [];
  
  // TODO set Data from store.getState
  for (let i = 0; i < props.employee_list.length; i++) {
    data.push({
      key: i,
      employeeId: props.employee_list[i].employeeId,
      employeeNameKanji: props.employee_list[i].employeeNameKanji,
      employeeNameKatakana: props.employee_list[i].employeeNameKatakana,
      subdivision: props.employee_list[i].subdivision,
      entryDate: props.employee_list[i].entryDate,
      description: `工事中`,
    });
  }
  
  const expandable = { expandedRowRender: record => <p>{record.description}</p> };

  //页面一览的配置
  let state = {
    bordered: true,
    loading: props.state_loading, //検索中
    bottom: 'bottomCenter',
    size: 'small',
    expandable,
    title: () => '検索結果一覧',
    showHeader:true,
    hasData: data.length < 1 ? false:true,
    top: 'none',
  };

  const tableColumns = columns.map(item => ({ ...item }));
  return (
    <>
      <Table
        {...state}
        pagination={{ position: [state.top, state.bottom] }}
        columns={tableColumns}
        dataSource={state.hasData ? data : null}
      />
    </>
  );
}
