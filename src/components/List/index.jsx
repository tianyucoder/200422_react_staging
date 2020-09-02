import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
	render() {
		const {todos,checkTodo,deleteTodo} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map((todo)=>{
						return <Item key={todo.id} {...todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
					})
				}
			</ul>
		)
	}
}
