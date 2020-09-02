import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	handleCheck = (id)=>{
		const {checkTodo} = this.props
		return (event)=>{
			//获取是否选中的布尔值
			const {checked} = event.target
			checkTodo(id,checked);
		}
	}

	render() {
		const {id,title,completed} = this.props
		return (
			<li>
				<label>
					<input type="checkbox" checked={completed} onChange={this.handleCheck(id)}/>
					<span>{title}</span>
				</label>
				<button className="btn btn-danger" style={{display:'none'}}>删除</button>
			</li>
		)
	}
}
