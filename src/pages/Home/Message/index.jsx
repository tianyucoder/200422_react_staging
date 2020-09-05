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

	showDetail = (msg,isPush)=>{
		return ()=>{
			isPush ? 
			this.props.history.push('/home/message/detail',{id:msg.id,name:msg.name}):
			this.props.history.replace('/home/message/detail',{id:msg.id,name:msg.name})
		}
	}

	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
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
									{/* <Link to={`/home/message/detail/${msg.id}/${msg.name}`}>{msg.name}</Link> */}

									{/* 路由跳转--传递search参数 */}
									{/* <Link to={`/home/message/detail/?id=${msg.id}&name=${msg.name}`}>{msg.name}</Link> */}

									{/* 路由跳转--传递location.state参数 */}
									<Link to={{pathname:'/home/message/detail',state:{id:msg.id,name:msg.name}}}>{msg.name}</Link>
									&nbsp;<button onClick={this.showDetail(msg,true)}>push查看</button>
									&nbsp;<button onClick={this.showDetail(msg,false)}>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<button onClick={this.back}>回退</button>
				<button onClick={this.forward}>前进</button>
				<hr/>

				{/* 注册路由---声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id/:name" component={Detail}/> */}

				{/* 注册路由---可以接收search参数 */}
				{/* <Route path="/home/message/detail" component={Detail}/> */}

				{/* 注册路由---可以接收location.state参数 */}
				<Route path="/home/message/detail" component={Detail}/>

			</div>
		)
	}
}
