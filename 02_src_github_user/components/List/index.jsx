import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const {users,first,loading,error} = this.props
		console.log(users);
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
