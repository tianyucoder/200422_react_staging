import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Route,Redirect,Switch} from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyNavLink replace to="/home/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink replace to="/home/message">Message</MyNavLink>
						</li>
					</ul>
					<Switch>
						<Route path='/home/message' component={Message}/>
						<Route path='/home/news' component={News}/>
						<Redirect to="/home/news"/>
					</Switch>
				</div>
			</div>
		)
	}
}
