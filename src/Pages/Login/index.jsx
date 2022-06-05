import React from 'react'
import './index.css'
import { ImportOutlined  } from '@ant-design/icons';
import axios from "axios";
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { saveLoginInfo } from '../../utils/LoginUtility';
import { useDispatch } from 'react-redux'
import {reducer_isLogin} from '../../redux/slices/login';

export default function Login(props) {
  const dispatch = useDispatch()

  const [hasError, setHasError ] = React.useState(false)
  const [errTitle, setErrorTitle ] = React.useState("")
  const [errMessage, setErrMessage ] = React.useState("")

  //登録ボタン押下
  const onFinish = (values) => {
    setLoading(true) //登録ボタン -> Loading状態
    
    const token = uuidv4();
    
    axios.post('http://localhost:3000/management/login?' + 
    'login_id=' + values.username +
    '&password=' + values.password +
    '&remember=' + values.remember + 
    '&token=' + token 
    ,).then(
      //apiにアクセス成功
      response => {
        if(response.data){//登録成功の場合
          console.log("登録成功")
          saveLoginInfo("Employee_ID",values.username) //IDを記録
          saveLoginInfo(values.username, token) //ログイン暗号を記録
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

  const [loading, setLoading] = React.useState(false)

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
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot"> Forgot password </a>
        </Form.Item>

        <Form.Item>
          <Button icon={<ImportOutlined/>} type="primary" htmlType="submit" className="login-form-button" loading={loading}>
            Log in
          </Button>
          Or <a>register now!</a>
        </Form.Item>
      </Form>
    </div>
      
  );
};


