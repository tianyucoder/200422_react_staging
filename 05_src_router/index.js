//引入核心库
import React from 'react'
//引入react-dom
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
//引入BrowserRouter
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
	<App/>
</BrowserRouter>,
document.getElementById('root'))