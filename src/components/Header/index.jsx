import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

@withRouter
class Header extends Component {
	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}
	render() {
		console.log(this.props);
		return (
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={this.back}>后退</button>
				<button onClick={this.forward}>前进</button>
			</div>
		)
	}
}
export default Header
