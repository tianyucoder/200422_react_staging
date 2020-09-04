import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

	state = {
		keyWord:'' //用户输入的关键词
	}

	//保存关键词到状态
	saveKeyWord = (event)=>{
		this.setState({keyWord:event.target.value})
	}

	//点击搜索的回调
	search = async ()=>{
		//1.获取用户的输入
		const {keyWord} = this.state
		//更新App的状态
		PubSub.publish('update_list',{first:false,loading:true})
		//2.发请求(使用axios)
		try {
			const result = await axios({
				url:`https://api.github.com/search/users?q=${keyWord}`,
				method:'GET',
			})
			const {items:users} = result.data
			PubSub.publish('update_list',{users,loading:false})
		} catch (error) {
			PubSub.publish('update_list',{error,loading:false})
		}
		//2.发请求(使用fetch)
		/* fetch(`https://api.github.com/search/users22222222?q=${keyWord}`).then(
			response => {
				console.log('联系服务器成功了',response)
				if(response.status !== 200) return Promise.reject(response.statusText)
				return response.json()
			},
		).then(
			response => {console.log('获取数据成功了',response);}
		).catch(
			(error)=>{console.log('失败了',error);}
		) */

		//2.发请求(使用fetch+await+async)
		/* try {
			const reuslt1 = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
			const result2 = await reuslt1.json()
			const {items} = result2
			PubSub.publish('update_list',{users:items,loading:false})
		} catch (error) {
			console.log('失败了',error);
			PubSub.publish('update_list',{error,loading:false})
		} */
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
