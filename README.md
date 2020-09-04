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