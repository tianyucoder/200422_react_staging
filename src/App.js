import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'
import {NavLink,Route,Switch} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
import './App.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header a={1}/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原始的html中靠a标签实现跳转 */}
							{/*<a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a>*/}

							{/* 使用react-router-dom的Link实现更改浏览器路径 */}
							{/* <NavLink activeClassName="high_light" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="high_light" className="list-group-item" to="/home">Home</NavLink>*/}

							{/* 封装NavLink */}
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
							<Switch>
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
								<Route path="/about" component={Test}/>
							</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
