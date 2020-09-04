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

	//删除一个todo
	deleteTodo = (id)=>{
		//使用filter删除
		/* const todos = this.state.todos.filter((todo)=>{
			return todo.id !== id
		}) */

		//使用splice删除
		const finnId = this.state.todos.findIndex(todo=>todo.id === id)
		const todos = [...this.state.todos] //复制一份状态中todos
		todos.splice(finnId,1)
		this.setState({todos})
	}

	//全选/全不选
	checkAll = (completed)=>{
		const todos = this.state.todos.map((todo)=>{
			return {...todo,completed}
		})
		this.setState({todos})
	}

	//清除所有已完成的
	clearCompleted = ()=>{
		const todos = this.state.todos.filter((todo)=>{
			if(!todo.completed) return todo
			return null
		})
		this.setState({todos})
	}

	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos={this.state.todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos={this.state.todos} checkAll={this.checkAll} clearCompleted={this.clearCompleted} />
				</div>
			</div>·
		)
	}
}
