## github用户头像显示失败的解决办法：
		第一步：打开：C:\Windows\System32\drivers\etc
		第二步：打开上方文件夹中的hosts，追加如下内容：
						#github
						140.82.113.3 github.com
						140.82.114.6 api.github.com
						52.74.223.119 www.github.com
						192.30.253.118 gist.github.com
						192.30.253.119 gist.github.com
						# GitHub Start 
						151.101.184.133    assets-cdn.github.com
						151.101.184.133    raw.githubusercontent.com
						151.101.184.133    gist.githubusercontent.com
						151.101.184.133    cloud.githubusercontent.com
						151.101.184.133    camo.githubusercontent.com
						151.101.184.133    avatars0.githubusercontent.com
						151.101.184.133    avatars1.githubusercontent.com
						151.101.184.133    avatars2.githubusercontent.com
						151.101.184.133    avatars3.githubusercontent.com
						151.101.184.133    avatars4.githubusercontent.com
						151.101.184.133    avatars5.githubusercontent.com
						151.101.184.133    avatars6.githubusercontent.com
						151.101.184.133    avatars7.githubusercontent.com
						151.101.184.133    avatars8.githubusercontent.com
## 消息订阅与发布
		类比：生活中的订报纸 =====> 先去邮局交钱，说明地址，随后邮递员送报纸
		先订阅，后发布	
## react中的路由：
		1.明确：导航区、展示区
		2.借助：react-router-dom
		3.在index.js中使用BrowserRouter包裹App
		4.页面导航区用Link去写,例如：<Link to="/about">About</Link>
		5.展示区，用Route去写，例如：<Route path="/about" component={About}/>
## 封装NavLink
		注意：标签体内容在：this.props.children属性上
## 一般组件与路由组件
		1.写法上的区别：
				路由组件：<Route path="/about" component={About}/>
				一般组件：<Header/>
		2.位置的区别：
				路由组件：pages里
				一般组件：components
		3.属性上的区别:组件实例对象props属性不同
				路由组件：多了三个属性，如下：
						history:
								action: "PUSH"
								block: ƒ block(prompt)
								createHref: ƒ createHref(location)
								go: ƒ go(n)
								goBack: ƒ goBack()
								goForward: ƒ goForward()
								length: 50
								listen: ƒ listen(listener)
								location: {pathname: "/about", search: "", hash: "", state: null, key: "5hdnx2"}
								push: ƒ push(path, state)
								replace: ƒ replace(path, state)
						location:
								hash: ""
								key: "5hdnx2"
								pathname: "/about"
								search: ""
								state: null
						match:
								isExact: true
								params: {}
								path: "/about"
								url: "/about"
				一般组件：你传什么，就接到什么
## Switch的使用：
			一般使用Switch包裹一个一个的Route，提高效率。