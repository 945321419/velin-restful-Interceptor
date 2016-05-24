#基于restful接口的前端状态码拦截器框架

###1.介绍
#####(1)简介
		之前在工作中接触到前后端分离的项目开发模式，但是当时没有实现真正意义上的分离。
	对于登陆验证之类的操作，还是需要后端进行拦截跳转等处理，还有对接口状态码的处理上十
	分的繁琐和难以维护。搜索了一番，也没有找到合适的解决方案，所以想着自己来设计一个小
	框架吧。可以方便前后端的分离，以及对接口状态码的可配置化开发。受了点struts的启发。
	不知道是不是已经有了更合适的主流的解决方案，反正自己写着感觉还是点有用处的，后续还
	会完善更多功能，也希望大家可以多多交流，对其进行改进。
#####(2)更新计划
	1.抛弃jquery的ajax请求函数；
	2.增加对多拦截器的支持，提升框架的开发模块化；
	3.增加拦截器强制返回功能，提升框架开发标准化；
	
###2.安装
	就是一个引入jquery.js 以及 Velin_Interceptor.js 就ok了，后续考虑采用原生js编写ajax请求；
	
###3.使用
#####(1)状态码映射类
因为是类似struts的设计模式，所以需要新建一个状态码映射类，格式如下：


	var config = {
		mapper:'main',		/*拦截方法映射*/
		config:				/*拦截器状态码方法映射*/
		{
			'0':'successed',	/*状态码，对应的拦截方法名*/
			'001':'failed'
		}
	}

#####(2)拦截方法类
这里放置对每种状态的处理逻辑，然后可以通过返回true或者false来指定是否继续执行回调函数；

	var main = {
		successed:function(){
			console.log("拦截到请求成功");
			return true;
		},
		failed:function(){
			console.log("拦截到请求失败");
			return false;
		}
	}
	
#####(3)使用
配置好上面的文件后，将上述文件全部引用到项目中。通过调用已经封装好的get、post请求方法，实现拦截器的功能。

	/*配置映射文件名*/
	Velin_Interceptor.appconfig = 'config';
	
	/*get请求*/
	Velin_Interceptor.get(
		"json/url.json",										/*请求地址*/
		"",														/*请求参数*/
		function(result){										/*回调方法*/
			console.log("这里是回调方法,内容为：" + result.msg);
		}
	);
	
	/*post请求*/
	Velin_Interceptor.post(
		"json/url1.json",
		"",
		function(result){
			console.log("这里是回调方法,内容为：" + result.msg);
		}
	);
	
###4.作者
	
	var velin = {
		name:'杨伟聪',
		age:'21',
		weibo:'http://weibo.com/u/2941935411'
	}
