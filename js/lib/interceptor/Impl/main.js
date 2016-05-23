/*拦截方法1*/
var main1 = {
	test1:function(){
		console.log("拦截器1");
		return true;
	},
	test2:function(){
		console.log("拦截器2");
		return false;
	}
}
