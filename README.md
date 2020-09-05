## 1.github用户头像显示失败的解决办法：
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
## 2.消息订阅与发布
		类比：生活中的订报纸 =====> 先去邮局交钱，说明地址，随后邮递员送报纸
		先订阅，后发布	
## 3.react中的路由：
		1.明确：导航区、展示区
		2.借助：react-router-dom
		3.在index.js中使用BrowserRouter或HashRouter包裹App
		4.导航区，用Link或NavLink去写,例如：<Link to="/about">About</Link>
		5.展示区，用Route去写，例如：<Route path="/about" component={About}/>
## 4.封装NavLink
		注意：标签体内容在：this.props.children属性上
## 5.一般组件与路由组件
		1.写法上的区别：
				路由组件：<Route path="/about" component={About}/>
				一般组件：<Header/>
		2.位置的区别：
				路由组件：pages里
				一般组件：components
		3.属性上的区别:组件实例对象props属性不同
				路由组件：多了三个属性，如下：
						history:
								goBack: ƒ goBack() //后退一个路由
								goForward: ƒ goForward() //前进一个路由
								push: ƒ push(path, state) //push跳转
								replace: ƒ replace(path, state) //replace跳转
						location:
								pathname: "/about" //当前的路径
								search: "" //收集search参数
								state: null //收集state参数
						match:
								isExact: true //标识是否为严格匹配
								params: {} //收集params参数
								path: "/about" //当前的路径
				一般组件：你传什么，就接到什么
## 6.Switch的使用：
			一般使用Switch包裹一个一个的Route，提高效率。
## 7.解决样式丢失的问题
		1.index.html中使用%PUBLIC_URL%引入样式
		2.index.html中使用/引入样式
		3.使用HashRouter代替BrowserRouter
## 8.精准匹配与模糊匹配
		1.默认开启的是模糊匹配，若要精准匹配要加exact属性
		2.注意模糊匹配是从路径开头，以/作为分隔去匹配
## 9.二级路由的使用
		注意：二级路由的路径中要体现出其一级路由的路径
## 10.路由组件间传参：
		1.传递params参数：
					导航链接写法：<Link to='/home/message/detail/xxxx/yyyyy'>消息1</Link>
					注册路由写法：<Route path="/home/message/detail/:id/:name" component={Detail}/>
					组件内获取参数写法：this.props.match.params，获取到的是所有参数组成的对象
		2.传递search参数：
					导航链接写法：
					注册路由写法：
					组件内获取参数写法：
		3.传递location.state参数:
					导航链接写法：
					注册路由写法：
					组件内获取参数写法：

