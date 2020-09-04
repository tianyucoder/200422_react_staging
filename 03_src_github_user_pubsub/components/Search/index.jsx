import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

	state = {
		keyWord:'' //用户输入的关键词
	}

	//保存关键词到状态
	saveKeyWord = (event)=>{
		this.setState({keyWord:event.target.value})
	}

	//点击搜索的回调
	search = ()=>{
		//1.获取用户的输入
		const {keyWord} = this.state
		//更新App的状态
		PubSub.publish('update_list',{first:false,loading:true})
		//2.发请求
		axios({
			url:`https://api.github.com/search/users?q=${keyWord}`,
			method:'GET',
		}).then(
			response => {
				const {items:users} = response.data
				PubSub.publish('update_list',{users,loading:false})
			},
			error => {
				PubSub.publish('update_list',{error,loading:false})
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input onChange={this.saveKeyWord} type="text" placeholder="enter the name you search"/>&nbsp;
					<button onClick={this.search}>Search</button>
				</div>
			</section>
		)
	}
}
