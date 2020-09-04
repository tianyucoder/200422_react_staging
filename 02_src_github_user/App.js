import React, { Component } from 'react'
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {

	state = {
		first:true, //是否是第一次打开页面
		loading:false, //标识是否处于加载中
		error:'',//错误信息
		users:[] //用户列表
	}

	//更新App的状态
	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}

	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<List {...this.state}/>
			</div>
		)
	}
}
