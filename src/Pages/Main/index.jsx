import React from 'react';
import { Layout, BackTop, } from 'antd';
import './index.css';
import SideMenu from '../../Component/SideMenu';
import PageFooter from '../../Component/PageFooter';
import PageHeader from '../../Component/PageHeader';
import { Routes, Route } from 'react-router-dom';
import EmpolyeeList from './EmployeeManagement/Employeelist';

import Test from '../Test';

const { Content } = Layout;

export default class Main extends React.Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh', }} >
        <SideMenu/>
        <Layout className="site-layout">
          <PageHeader />
          <Content style={{ margin: '0 16px', }} >
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }} >
              <Routes>
                <Route path="/" element={ <p>Top Page</p>} />
                <Route path="/employee">
                  <Route path="employeeList" element={ <EmpolyeeList/>} />
                  <Route path="coding" element={ <p>Coding</p>} />
                </Route>
                <Route path="/test" element={ <Test/>} />
                <Route path="/setting" element={ <p>Setting Page</p>} />
                <Route path="/logout" element={ <p>Log out</p>} />
              </Routes>
            </div>
          </Content>
          <PageFooter/>
          <BackTop/>
        </Layout>
      </Layout>
    );
  }
}