import React from 'react';
import { Layout, BackTop, } from 'antd';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import SideMenu from '../../Component/SideMenu';
import PageFooter from '../../Component/PageFooter';
import PageHeader from '../../Component/PageHeader';
import MenuRouter from '../../routers';

const { Content } = Layout;

export default class Main extends React.Component {
  
  render() {

    let RouterObj = [];
    MenuRouter.map(obj => {
      if(obj.children !== null){
        return RouterObj = [...RouterObj, ...obj.children]
      }else {
        return RouterObj = [RouterObj, obj]
      }
    })

    RouterObj.shift()
    console.log(RouterObj)
    return (
      <Layout style={{ minHeight: '100vh', }} >
        <SideMenu/>
        <Layout className="site-layout">
          <PageHeader />
          <Content style={{ margin: '0 16px', }} >
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }} >
              <Routes>
                {
                  RouterObj.map(obj => <Route path={obj.path} element={obj.page} key={obj.key}></Route>)
                }
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