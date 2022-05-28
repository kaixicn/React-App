import React, {useState} from 'react'
import Login from './Pages/Login'
import Main from './Pages/Main'
import './App.css';

export default function App(props){
  const [ isLogined ]= useState(false);
  return isLogined ? <Login/> : <Main />
}
