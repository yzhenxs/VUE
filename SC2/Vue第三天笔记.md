# 内容回顾

## 单向数据绑定 & 双向数据绑定
	单向 : Model ---> View
	
	

------------------

# 今日课程目标

## 网络请求
	ajax
	jquery

### vue-resource【只能用在Vue中】
	参考:https://github.com/pagekit/vue-resource/blob/develop/docs/http.md

### axios【use anywhere】
	参考:https://www.kancloud.cn/yunye/axios/234845
	
	https://www.awesomes.cn/repo/axios/axios
	
### vue-resource 和 axios 的比较
	不同点:
		1、vue-resource基于vue，必须先导入vue，axios不基于vue
		
		2、vue-resource只能用在浏览器端，axios既可以用浏览器端也可以用node端
		
		3、接收服务器返回值 vue-resource response.body
						  axios response.data


### 前端跨域的解决方案【重要】
	前提:
		1、只有浏览器才会存在跨域，iOS/Android/小程序压根就没有跨域这一说
		
		2、浏览器只有在发送Ajax请求的时候，才会有跨域这个限制
		
	解决方案:
		不管哪种解决方案，后台都必须配合，如果不配合，浏览器拿不到数据
		
		1、jsonp
			原理：利用script天然跨域特性，服务器返回的是一个函数调用
			
			缺点:
				只支持GET
				后台还得专门给你写一个jsonp的接口
				
		2、cors
			工作就是后台来做，设置一下响应头
			
			优点:
				既支持GET、POST
				后台不用在专门写接口
		
		3、服务器反向代理解决跨域问题
			使用:一般是访问别人家的服务器的接口的时候，大多数是POST接口
				
------------------


## 品牌管理网络版

### 列表显示，新增，删除
	查询列表:
		http://www.huangjiangjun.top:6688/api/getbrandlist
		
	新增:
		http://www.huangjiangjun.top:6688/api/addproduct 【post请求,要传递一个name属性】
		
	删除:
		http://www.huangjiangjun.top:6688/api/delproduct/要删除的id
		

### 动画
	1、被动画的元素，必须使用transition包裹起来
	
	2、被动画的元素，必须通过v-if、v-show显示或是隐藏

### 搜索【难】
	js数组的filter
	
	计算属性
		依赖数组
		依赖关键字
		
	步骤:
		1、先利用计算属性，查询所有
		
		2、在进行过滤

------------------


## 路由【重点】

### 作用
	单页面应用(SPA)
	
	Single Page Application
	
	网易云音乐
	
	在Vue中实现单页面应用靠 Vue-Router

### 基础语法
	html
		两个可以点击的a标签
			router-link
		
		写一个东西占着位置
		
	js
		定义两个组件
		
		把点击的url和组件建立关联
	
		把路由对象挂在到根实例上面去

------------------

## Vue 项目的生成及运行
	1、安装脚手架
		npm install -g @vue/cli
		
		vue --version  ===> 3.0.1
		
	2、生成项目
		切换到桌面，执行 vue create szhmqd21_vue
		