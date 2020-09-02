import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	checkAll = ()=>{
		//函数体
	}
	
	render() {
		const {todos} = this.props
		const total = todos.length
		const completedCount = todos.reduce((pre,current)=> pre + (current.completed ? 1 : 0),0)
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.checkAll} checked={total === completedCount && total >0}/>
				</label>
				<span>
				<span>已完成{completedCount}</span> / 全部{total}
				</span>
				<button className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
}
