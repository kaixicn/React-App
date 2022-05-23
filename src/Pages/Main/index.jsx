import React from 'react'
import { Layout } from 'antd';
import './index.css'
import SideMenu from '../../Component/sideMenu/SideMenu'
import PageFooter from '../../Component/PageFooter/PageFooter'
import BreadcrumbNavigation from '../../Component/BreadcrumbNavigation/BreadcrumbNavigation'
import { Routes, Route } from 'react-router-dom'
import EmpolyeeLIst from './EmployeeManagement/EmployeeLIst'

const { Header, Content } = Layout;

export default class Main extends React.Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh', }} >
        <SideMenu/>
        <Layout className="site-layout">
          
          <Routes>
              <Route path="/" element={<Header className="site-layout-background" style={{ padding: 0, }} />}/>
              <Route path="/employee/IssueEmployeeId" element={<Header className="site-layout-background" style={{ padding: 0, }} />}/>
          </Routes>
          
          <Content style={{ margin: '0 16px', }} >
          
          <BreadcrumbNavigation />

            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }} >
              <Routes>
                <Route path="/employee/management" element={ <EmpolyeeLIst/>} />
                <Route path="/employee/IssueEmployeeId" element={ <div>aaaaaaa</div>} />
              </Routes>
            </div>

          </Content>
          <PageFooter/>
        </Layout>
      </Layout>
    );
  }
}