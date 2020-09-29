const blogList = [
	{
		category:'js', 
		title:'vue.js',
		nav:"vue",
		time:'2019-01-01',
		paragraphs:[
			'<b>v-if 和v-show的区别：</b><br/>v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。<br/>v-show：调整css dispaly属性，可以使客户端操作更加流畅。',
			'<b>v-for循环</b>',
			'用computed属性 sort函数(排序)', 
			' <blockquote>function sortNumber(a,b){ return a-b } <br/>//解决排序bug 用冒泡排序遍历（根据差的大小 >0 =0 <0) </blockquote>',
			'<blockquote>function sortByKey(array,key){return array.sort(function(a,b){var x=a[key];var y=b[key];return ((x<y)?-1:((x>y)?1:0));});}<br>//数组对象方法排序</blockquote>'
		]
	}, 
	{
		category:'portfolio-filter-app', 
		title:'睿畜保APP启动页面',
		nav:"插画练习",
		time:'2017-03-11',
		paragraphs:[
			'1',
			'2', 

		]
	}, 
	{
		category:'portfolio-filter-app', 
		title:'睿畜保APP启动页面',
		nav:"插画练习",
		time:'2017-03-11',
		paragraphs:[
			'1',
			'2', 

		]
	}, 
	{
		category:'portfolio-filter-app', 
		title:'睿畜保APP启动页面',
		nav:"插画练习",
		time:'2017-03-11',
		paragraphs:[
			'1',
			'2', 

		]
	}, 
	{
		category:'portfolio-filter-app', 
		title:'睿畜保APP启动页面',
		nav:"插画练习",
		time:'2017-03-11',
		paragraphs:[
			'1',
			'2', 

		]
	}, 
	{
		category:'portfolio-filter-app', 
		title:'睿畜保APP启动页面',
		nav:"插画练习",
		time:'2017-03-11',
		paragraphs:[
			'1',
			'2', 

		]
	}, 
]

$(function(){
    function  getUrlParam (name) {
    	console.log(name) 
	  	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	  	console.log(reg) 
	  	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	  	console.log(r)
	  	if (r != null) return unescape(r[2]); return null; //返回参数值
	}
	const id = getUrlParam('id')
	const blogDetail = blogList[id] 
	const paragraphs = blogDetail.paragraphs 
	var textContent = '' 
 
 	for(var i= 0;i<paragraphs.length;i++){
		const textP = paragraphs[i]
		textContent = textContent + '<p>' + textP + '</p>' 
	}

	$('.blog-details').append(
		"<article class='blog-item sticky'><div class='blog-item-footer'><ul class='blog-item-meta'><li><i class='fa fa-calendar-o'></i>"+blogDetail.time+"</li><li><i class='fa fa-bars'></i>"+blogDetail.category+"</li></ul></div><div class='blog-item-body'><h3 class='blog-item-title'>"+blogDetail.title+"</h3>"+textContent+"</div></article>"
	) 
	$('.cr-breadcrumb').append(
		"<h2>"+blogDetail.nav+"</h2><ul><li><a href='index.html'>主页</a></li><li><a href='blog.html'>博客</a></li><li>"+blogDetail.nav+"</li></ul>"
	) 
})


