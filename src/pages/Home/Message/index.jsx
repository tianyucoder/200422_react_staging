import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

	state = {
		messages:[
			{id:'001',name:'消息1'},
			{id:'002',name:'消息2'},
			{id:'003',name:'消息3'},
			{id:'004',name:'消息4'}
		]
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.messages.map((msg)=>{
							return (
								<li key={msg.id}>
									{/* 路由跳转--传递params参数 */}
									<Link to={`/home/message/detail/${msg.id}/${msg.name}`}>{msg.name}</Link>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<hr/>

				{/* 注册路由---声明接收params参数 */}
				<Route path="/home/message/detail/:id/:name" component={Detail}/>
			</div>
		)
	}
}
