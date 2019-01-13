//1.导包
const express = require('express');
const bodyParser = require('body-parser')
const request = require('request')

//2.创建App
const app = express();

// parse application/x-www-form-urlencoded  只支持 usernname=lisi&password=lisi
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 只支持 "{username:'lisi',password:'lisi'}"
app.use(bodyParser.json())


//服务器端设置允许跨域
app.all('/*',(req,res,next)=>{
	//告诉浏览器一些额外信息
	res.setHeader("Access-Control-Allow-Origin", "*");
	//*是代表所有的域名都可以访问
	res.setHeader("X-Powered-By",' 3.2.1')
	res.setHeader("Content-Type", "application/json;charset=utf-8");
	
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.setHeader("Access-Control-Expose-Headers", "*");
	
	next();
})

//3.路由处理

//GET登录请求处理
app.get('/api/getlogin',(req,res)=>{
	const result = {status:1,message:"登录成功"}
	// 		/api/login?username=zhangsan&password=123
	if (req.query.username=='zhangsan' && req.query.password=='123'){
		
	}else{
		result.status = 0;
		result.message = "用户名或密码失败"
	}
	res.setHeader("Content-Type","text/json;charset=utf-8");
	res.json(result);
})

//POST登录请求处理
app.post('/api/postLogin',(req,res)=>{
	const result = {status:1,message:"登录成功"}
	if (req.body.username=='lisi' && req.body.password=='lisi'){
		
	}else{
		result.status = 0;
		result.message = "用户名或密码失败"
	}
	res.setHeader("Content-Type","text/json;charset=utf-8");
	res.json(result);
})

//后台配合浏览器的jsonp请求
app.get('/jsonp',(req,res)=>{
	const callbackFunc = req.query.callback
	console.log(callbackFunc)
	console.log("=====================")
	const result = {
		status:0,
		message:[
			{id:1,name:'张三丰',age:666},
			{id:2,name:'张无忌',age:555},
			{id:3,name:'赵敏',age:557},
			{id:4,name:'尼古拉斯.赵四',age:633}
		]
	}

	const resultStr = `${callbackFunc}(${JSON.stringify(result)})`
	console.log(resultStr)

	res.setHeader('content-type','text/html;charset=utf-8')
	res.end(resultStr)
})

// 接收自家浏览器的请求，然后去发送请求给豆瓣服务器，拿到数据之后，返回给自家浏览器
app.get('/getTop250',(req,res)=>{
	request('https://api.douban.com/v2/movie/top250', function (error, response, body) {

	  console.log(typeof body);
	  res.setHeader("Content-Type","application/json;charset=utf-8")
	  res.end(body)
	});
})

//4.启动
app.listen(3000,"127.0.0.1",err=>{
	console.log("start OK")
});
