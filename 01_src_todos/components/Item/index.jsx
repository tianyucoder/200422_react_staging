import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	state = {
		bgColor:'#fff',
		isShowDelBtn:false
	}

	//勾选&取消勾选的回调
	handleCheck = (id)=>{
		const {checkTodo} = this.props
		return (event)=>{
			//获取是否选中的布尔值
			const {checked} = event.target
			checkTodo(id,checked);
		}
	}

	//鼠标移入移出的回调
	handleMouse = (isEnter)=>{
		return ()=>{
			isEnter ? 
			this.setState({bgColor:'#ddd',isShowDelBtn:true}):
			this.setState({bgColor:'#fff',isShowDelBtn:false})
		}
	}

	//删除的回调
	deleteTodo = (id)=>{
		if(window.confirm('确定删除吗')){
			console.log(id);
			this.props.deleteTodo(id)
		}
	}

	render() {
		const {id,title,completed} = this.props
		const {bgColor,isShowDelBtn} = this.state
		return (
			<li 
				style={{backgroundColor:bgColor}} 
				onMouseLeave={this.handleMouse(false)} 
				onMouseEnter={this.handleMouse(true)}
			>
				<label>
					<input type="checkbox" checked={completed} onChange={this.handleCheck(id)}/>
					<span>{title}</span>
				</label>
				<button className="btn btn-danger" onClick={()=>this.deleteTodo(id)} style={{display:isShowDelBtn ? 'block' : 'none'}}>删除</button>
			</li>
		)
	}
}
