import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	state = {
		//初始化状态
		todos:[
			{id:'0001',title:'吃饭',completed:false},
			{id:'0002',title:'睡觉',completed:true},
			{id:'0003',title:'敲键盘',completed:false},
		]
	}
	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header/>
					<List todos={this.state.todos}/>
					<Footer/>
				</div>
			</div>
		)
	}
}
