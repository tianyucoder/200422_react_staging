import React,{Component} from 'react'

const detailDatas = [
	{id:'001',content:"加油，中国"},
	{id:'002',content:"加油，北京"},
	{id:'003',content:"加油，尚硅谷"},
	{id:'004',content:"加油，我未来的女朋友"},
]
export default class Detail extends Component{
	render(){
		// 接收路由传递的params参数
		const {id,name} = this.props.match.params
		const result = detailDatas.find(d => d.id === id) || {}
		return (
			<ul>
				<li>ID:{id}</li>
				<li>NAME:{name}</li>
				<li>CONTENT:{result.content}</li>
			</ul>
		)
	}
}