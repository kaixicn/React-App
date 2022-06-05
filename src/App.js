import React from 'react'
import Login from './Pages/Login'
import Main from './Pages/Main'
import './App.css';
import { useDispatch, useSelector} from 'react-redux'
import { isLogin } from './utils/LoginUtility'
import {reducer_isLogin} from './redux/slices/login';

export default function App(props){
  
  const dispatch = useDispatch()
  const loginStatus = useSelector((state) => state.login.isLogin)
  if(!loginStatus){
    dispatch(reducer_isLogin(isLogin()))
  }

  return loginStatus ? <Main /> : <Login/> 
}
