import { Table, Space, } from 'antd';
import { useSelector, } from 'react-redux';

export default function SearchResultList(props) {
  const columns = [
    { title: '社員ID',    dataIndex: 'employeeId', sorter: (a, b) => a.age - b.age, },
    { title: '社員名(漢字)',    dataIndex: 'employeeNameKanji', },
    { title: '社員名(カタカナ)',    dataIndex: 'employeeNameKatakana', },
    { title: '分課',    dataIndex: 'subdivision', },
    { title: '入社日',     dataIndex: 'entryDate',     sorter: (a, b) => a.age - b.age, },
    { title: '操作', key: 'action', render: (record) => ( <Space size="middle"> <span>{record.age}</span> </Space> ), },
  ];
  
  const employeeInfoList = useSelector((state) => state.employeeList.employeeInfoList)
  
  let data = [];
  
  // TODO set Data from store.getState
  for (let i = 0; i < employeeInfoList.length; i++) {
    data.push({
      key: i,
      employeeId: employeeInfoList[i].employeeId,
      employeeNameKanji: employeeInfoList[i].employeeNameKanji,
      employeeNameKatakana: employeeInfoList[i].employeeNameKatakana,
      subdivision: employeeInfoList[i].subdivision,
      entryDate: employeeInfoList[i].entryDate,
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
