import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const {users} = this.props
		return (
			<div className="row">
				{
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
