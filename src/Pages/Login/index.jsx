import React from 'react'
import { Form, Input, Button, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";
import store from './redux/store'
import { login } from './redux/action'
import cookie from 'react-cookies'
import './index.css'

export default class Login extends React.Component {
  
  componentDidMount(){
    store.subscribe(()=> {this.setState({})})
  }

  state = {
    loginId:"",
    password:"",
    loading: false 
  }

  changeHandelLoginId = (e) => {
    const newLoginId = e.target.value
    this.setState({
      loginId:newLoginId
    })
  }
  changeHandelPassword = (e) => {
    const newPassword = e.target.value
    this.setState({
      password: newPassword
    })
  }
  onFinish = (values) => {
    
    this.setState({loading: true})

    axios.post('http://localhost:3000/management/login?login_id=' + this.state.loginId + "&password=" + this.state.password).then(
      //登陆成功
      response => {
        if(response.data){
          cookie.save("logined", true, {path: "/"});
          store.dispatch(login(true));
          console.log("登陆成功");
        }else{
          this.setState({loading: false});
          Modal.error({
            title: '登陆失败',
            content: '用户名或密码出错'
          });
        }
      },
      //登陆失败
      error => {
        Modal.error({
          title: error.request.status,
          content: error.message
        });
        this.setState({loading: false});
      }
    )
  };
  render(){
    
    return (
      <div className="login">
        <div className="loginTitile"><h1>ログイン<hr/></h1></div>
        
        <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={this.onFinish} >
          
          <Form.Item name="username" rules={[ { required: true, message: 'Please input your Username!', }, ]} >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={this.changeHandelLoginId}/>
          </Form.Item>
          
          <Form.Item name="password" rules={[ { required: true, message: 'Please input your Password!', }, ]} >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" onChange={this.changeHandelPassword}/>
          </Form.Item>

          <Form.Item>
            <div className="center">
              <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                登陆
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
  
};
