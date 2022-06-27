import { TeamOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import EmpolyeeList from './Pages/Main/EmployeeManagement/Employeelist';

const menuRouter = [
    {
        key: "Top",
        icon: <HomeOutlined />,
        label: <Link to="/">トップ</Link>,
        path: "/",
        page: <div>Top</div>,
        children: null
    },
    {
        key: "employeeManagement",
        icon: <TeamOutlined />,
        label: '社員管理',
        path: null,
        page: null,
        children:[
            {
                key: "employeeList",
                icon: null,
                label: <Link to="/employee/employeeList">社員一覧</Link>,
                path: "/employee/employeeList",
                page: <EmpolyeeList />,
                children: null
            },
            {
                key: "coding",
                icon: null,
                label: <Link to="/employee/coding">PAGE【工事中】</Link>,
                path: "/employee/coding",
                page: <div>aaaa</div>,
                children: null
            },
        ]
    },
]

export default menuRouter;