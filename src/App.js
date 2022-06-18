import React from 'react';
import Login from './Pages/Login';
import Main from './Pages/Main';
import axios from "axios";
import cookie from 'react-cookies';
import cookieKeys from './ContentMaster/cookieKeys';
import { reducer_isLogin } from './redux/slices/login';
import { useDispatch, useSelector } from 'react-redux';
import { Decrypt } from './utils/secret'
import './App.css';

export default function App(props){
  // redux hook
  const dispatch = useDispatch()
  // 从cookie获取token密文
  const token = cookie.load(cookieKeys.token);
  // tokenの取得ができない場合
  if (token === undefined || token === null){
    console.log("未登録: tokenの取得結果がundefinedまたはnull、登録画面を表示する");
  // tokenの取得ができた場合
  }else{
    console.log("token確認開始")
    // 发送验证token请求
    axios.post('http://localhost:3000/management/login/verification?token=' + Decrypt(token)).then(
        //请求成功
        response => {
            if (response.data) { 
              // 修改redux中登陆的状态
              dispatch(reducer_isLogin(true))
              console.log("token一致確認に成功しました、メイン画面を表示する")
            }else{
              dispatch(reducer_isLogin(false))
              console.log("token一致確認に失敗しました、ログイン画面を表示する")
            }
        },
        //请求失败
        error => {
          dispatch(reducer_isLogin(false))
          console.log("token確認チェックに失敗しました、登録画面を表示する")
        }
    ).finally(() => { 
      console.log("token確認終了");
    })
  }

  return useSelector((state) => state.login.isLogin) ? <Main /> : <Login/> 
}
