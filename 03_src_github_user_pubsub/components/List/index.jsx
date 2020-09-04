import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

	state = {
		first:true, //是否是第一次打开页面
		loading:false, //标识是否处于加载中
		error:'',//错误信息
		users:[] //用户列表
	}

	componentDidMount(){
		//订阅消息
		this.pub = PubSub.subscribe('update_list',(_,stateObj)=>{
			this.setState(stateObj)
		})
	}

	componentWillUnmount(){
		PubSub.unsubscribe(this.pub)
	}
	
	render() {
		const {users,first,loading,error} = this.state
		return (
			<div className="row">
				{
					first ? <h1>输入关键字，随后点击搜索</h1> :
					loading ? <h1>加载中......</h1> :
					error ? <h1>{error.message}</h1> :
					users.map((user)=>{
						return (
							<div key={user.login} className="card">
								<a href={user.html_url} rel="noopener noreferrer" target="_blank">
									<img src={user.avatar_url} style={{width:'100px'}} alt="img"/>
								</a>
								<p className="card-text">{user.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
