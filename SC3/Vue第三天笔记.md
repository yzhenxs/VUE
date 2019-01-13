# 内容回顾

## 动画
	前提:
		1、被动画元素，要被transition包裹起来
		2、被动画元素，必须在被插入、更新、移除时候，才能有动画

	CSS
		1、按照他提供好的类名写样式
		2、利用第三方的CSS动画库，Animate.css
	
	JS
		1、利用动画钩子
		2、利用第三方的JS动画库Velocity.js实现动画
		
## watch & computed
	共同点:
		能监控data的变化，再做什么事情。
		watch，computed都是对象

	不同点:
		1、watch只能一个一个监控
		2、计算属性可以同时监控多个
	
## 组件
	复用
	
	五种:
		掌握前四种
		
	注意点:
		1、组件中的data必须是一个函数，并且函数中返回一个新对象
		2、组件的template必须要有一个根元素

----------------------

## 今日课程目标

### 过滤器
	作用：对呈现在页面上面的数据，先进行过滤，再显示
	
	分类:
		私有过滤器
			它只能在它组件里面使用
			
			它跟data、computed一样的，都是对象，里面
			写的跟computed一样，也是一个函数，它叫 filters
			
			注意点:
				1、过滤器函数，必须要有一个参数，这个参数就是过滤的原始数据
				2、过滤器函数，必须要有返回值
				3、过滤器中的第一个参数，就是我们管道符`|`前面的原始数据
				4、调用过滤器函数的时候，我们过滤器里面传递的实参，是从第二个开始的
				
		
		全局过滤器
			所有的组件都可以使用，只是在定义的时候，和私有过滤器不太一样，里面的逻辑都是一样滴
			
			语法:
				Vue.filter('过滤器名称',处理函数)
			
			注意点:
				1、建议写在组件注册之前
	
	私有的优先级，要高于全局的，就近原则

-----------------------
	
### Vue中如何发送网络请求
	1、基于Vue【了解】
		The HTTP client for Vue.js
	
		vue-resource
		
		使用步骤:
			1、导入vue
			2、导入vue-resource
			3、调用 this.$http.get/post
			
		参考:https://github.com/pagekit/vue-resource
		
	2、不基于Vue
		Promise based HTTP client for the browser and node.js
	
		axios
			https://www.kancloud.cn/yunye/axios/234845
			
		使用:
			1、导入axios和vue
			2、调用 axios get/post
		
	总结:
		在使用上面的小差异
			1、axios不基于vue，所以导入的时候，不需要注意顺序，并且也不会挂载到vue的实例上面去，使用的时候，直接使用axios
			
			2、vue-resource基于Vue，必须在vue导入之后，再导入，挂载到Vue实例上，使用的时候，使用this.$http
			
			3、获取结果的时候，vue-resource从response.body，而axios从response.data中获取


### 跨域的终极解决方案
	1、几乎不用jsonp 
		GET ，非异步
		
	2、后台设置响应头
		我们浏览器中才有跨域问题，百度搜索
		JAVA 允许跨域
		PHP 允许跨域
		Node 允许跨域

-----------------------


### 品牌管理网络版
	网络请求
	动画的回顾
	计算属性去查询数据

-----------------------

### 路由
	前端：实现单页面应用(SPA)
		single page application
		
	网易云音乐：
		前后端分离  SPA
	
-----------------------