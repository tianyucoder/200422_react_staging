import React,{Component} from 'react'
// import qs from 'querystring'

const detailDatas = [
	{id:'001',content:"加油，中国"},
	{id:'002',content:"加油，北京"},
	{id:'003',content:"加油，尚硅谷"},
	{id:'004',content:"加油，我未来的女朋友"},
]
export default class Detail extends Component{
	render(){
		// 接收路由传递的params参数
		//#region 
		/* const {id,name} = this.props.match.params
		console.log(id,name);
		const result = detailDatas.find(d => d.id === id) || {}  */
		//#endregion

		// 接收路由传递的search参数
		//#region 
		/* const {search} = this.props.location
		const searchObj = qs.parse(search.split('?')[1])
		const {id,name} = searchObj
		const result = detailDatas.find(d => d.id === id) || {} */ 
		//#endregion
		
		// 接收路由传递的location.state参数
		//#region 
		const {state} = this.props.location
		const {id,name} = state || {}
		const result = detailDatas.find(d => d.id === id) || {}
		//#endregion
		return (
			<ul>
				<li>ID:{id}</li>
				<li>NAME:{name}</li>
				<li>CONTENT:{result.content}</li>
			</ul>
		)
	}
}