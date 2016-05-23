/**
 * 拦截器插件
 * @author 杨伟聪 velin
 * 2016-5-23
 */
var Velin_Interceptor = {
	'appconfig':'appconfig',		/*拦截器命名空间*/
	'code':'code',					/*restful接口状态码字段名*/
	'msg':'msg',					/*restful接口数据字段名*/
	'isInterceptor':function(code,configm){
		/*判断拦截器是否存在*/
		if(eval(configm).config[code]){
			/*执行该拦截器对应的拦截方法，并返回可执行状态：false为不再继续执行后续代码；true反之*/
			return eval(eval(configm).mapper)[eval(configm).config[code]]();
		}
	},
	'get':function(urls,dt,success,exception){
		$.get(
			urls,
			dt,
			function(result){
				/*调用拦截器*/
				if(Velin_Interceptor.isInterceptor(result[Velin_Interceptor.code],Velin_Interceptor.appconfig)){
					/*执行回调函数*/
					success(result);
				}
			}
		);
	},
	'post':function(urls,dt,success,exception){
		$.post(
			urls,
			dt,
			function(result){
				if(Velin_Interceptor.isInterceptor(result[Velin_Interceptor.code],Velin_Interceptor.appconfig)){
					success(result);
				}
			}
		);
	},
}
