import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Route} from 'react-router-dom'
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
							<MyNavLink to="/home/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="/home/message">Message</MyNavLink>
						</li>
					</ul>
					<Route path='/home/message' component={Message}/>
					<Route path='/home/news' component={News}/>
				</div>
			</div>
		)
	}
}
