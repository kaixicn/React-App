import React from 'react'
import Login from './Pages/Login'
import Main from './Pages/Main'
import './App.css';
import { useDispatch, useSelector} from 'react-redux'
import {reducer_isLogin} from './redux/slices/login';
import cookie from 'react-cookies'
import axios from "axios";

export default function App(props){

  // redux hook
  const dispatch = useDispatch()
  
  // redux中のログイン状態をリセット(false:未登録)
  dispatch(reducer_isLogin(false))

  const token = cookie.load("TOKEN");

  if (token === undefined || token === null){
    console.log("未登録: tokenの取得結果がundefinedまたはnull、登録画面を表示する")
  }else{
    console.log("token確認開始")
    
    axios.post('http://localhost:3000/management/login/verification',{
      params: { token: token }
    }).then(
        //请求成功
        response => {
            if (response.data) { 
              dispatch(reducer_isLogin(true))
              console.log("token一致確認に成功しました、メイン画面を表示する")
            }else{
              console.log("token一致確認に失敗しました、ログイン画面を表示する")
            }
        },
        //请求失败
        error => {
          console.log("token確認チェックに失敗しました、登録画面を表示する")
        }
    ).finally(() => { 
      console.log("token確認終了")
    })
  }

  const loginFlag = useSelector((state) => state.login.isLogin)
  return loginFlag ? <Main /> : <Login/> 
}
