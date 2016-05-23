/*配置拦截器*/
Velin_Interceptor.appconfig = 'config1';

/*请求*/
Velin_Interceptor.get(
	"json/url.json",
	"",
	function(result){
	console.log("这里是回调方法,内容为：" + result.msg);
});

/*请求*/
Velin_Interceptor.get(
	"json/url1.json",
	"",
	function(result){
		console.log("这里是回调方法,内容为：" + result.msg);
});
