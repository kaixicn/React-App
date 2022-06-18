import React, { useState } from 'react'
import './index.css'
import { ImportOutlined  } from '@ant-design/icons';
import axios from "axios";
import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import {reducer_isLogin} from '../../redux/slices/login';
import CreateNewAcount from './CreateNewAcount'
import cookie from 'react-cookies';
import cookieKeys from '../../ContentMaster/cookieKeys';
import { Encrypt } from '../../utils/secret'

export default function Login(props) {
  const dispatch = useDispatch()
  const [hasError, setHasError ] = React.useState(false)
  const [errTitle, setErrorTitle ] = React.useState("")
  const [errMessage, setErrMessage ] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  //登録ボタン押下
  const onFinish = (values) => {
    setLoading(true) //登録ボタン -> Loading状態
    
    //生成token
    const token = uuidv4();
  
    axios.post('http://localhost:3000/management/login?' + 
    'login_id=' + values.username +
    '&password=' + values.password +
    '&token=' + token
    ).then(
      //apiにアクセス成功
      response => {
        console.log("连接成功");
        if(response.data.LoginResult){//登録成功の場合
          console.log("登録成功")
          cookie.save(cookieKeys.token, Encrypt(token));//加密token并存放cookie
          cookie.save(cookieKeys.login_id, Encrypt(values.username));//加密ID并存放cookie
          dispatch(reducer_isLogin(true)) //ログイン状態 -> ログイン済み

        }else{//登録失敗の場合
          console.log("登録失敗")
          setErrorTitle("登録失敗しました")
          setErrMessage("ログインIDまたはパスワードが違います。")
          setHasError(true)
        }
      },
      //apiにアクセス失败
      error => {
        console.log(error)
        setErrorTitle(error.code)
        setErrMessage(error.message)
        setHasError(true)
      }
    ).finally(() => {
      setLoading(false)
    })
  };

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {setVisible(true);};
  const onClose = () => {setVisible(false);};

  return (
    <div> 
      {hasError ? <Alert message={errTitle} description={errMessage} type="error" showIcon closable onClose={()=> {setHasError(false)}}/> : ""}
      <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish} >
        <Form.Item className='loginTitile'>
          Login
        </Form.Item>
        <Form.Item name="username" rules={[ { required: true, message: 'Please input your Username!', }, ]} >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" allowClear/>
        </Form.Item>
        <Form.Item name="password" rules={[ {required: true, message: 'Please input your Password!',},]} >
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" allowClear/>
        </Form.Item>
        <Form.Item>
          <span className="register" onClick={showDrawer}>register now!</span>
          <span className="login-form-forgot"> Forgot password </span>
        </Form.Item>
        <Form.Item>
          <Button icon={<ImportOutlined/>} type="primary" htmlType="submit" className="login-form-button" loading={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
      <CreateNewAcount showDrawer={showDrawer} onClose={onClose} visible={visible}/>
    </div>
  );
};


