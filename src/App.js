import React from 'react'
import cookie from 'react-cookies'
import store from './Pages/Login/redux/store'

import Login from './Pages/Login'
import Main from './Pages/Main'

import './App.css';
import 'antd/dist/antd.min.css'


export default class App extends React.Component{
  componentDidMount(){
    store.subscribe(()=> {this.setState({})})
  }

  render(){
    const isLogined = cookie.load("logined") === undefined
    return isLogined ? <Login /> : <Main />
  }
}