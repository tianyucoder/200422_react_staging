import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {nanoid} from 'nanoid'
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

	//添加一个todo
	addTodo = (title)=>{
		//向状态中往前追加一个todo对象
		const todoObj = {id:nanoid(),title,completed:false}
		/* 
			关于操作状态的2个原则：
					1.状态数据不能直接修改
					2.不允许通过setState以外的方式，操作原状态
		*/
		const {todos} = this.state
		this.setState({todos:[todoObj,...todos]})
	}

	//勾选、取消勾选一个todo
	checkTodo = (id,completed)=>{
		const {todos} = this.state
		const newTodos = todos.map(todo =>{
			//第一种写法：
			/* if(todo.id === id) todo.completed = completed
			return todo */
			//第二种写法：
			if(todo.id === id) return {...todo,completed}
			return todo
		})
		this.setState({todos:newTodos})
	}

	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos={this.state.todos} checkTodo={this.checkTodo}/>
					<Footer/>
				</div>
			</div>
		)
	}
}
