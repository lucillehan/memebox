<template>
	<div class="homesearch">
		<Search />
		<div class="se-box">
			<div class="hot-se">
				<p>
					<i></i>
					<span class="hot">热门搜索</span>
				</p>
				<div class="re-items">
					<span>保湿</span>
					<span>保湿</span>
					<span>保湿</span>
					<span>保湿</span>
					<span>保湿</span>
					<span>保湿</span>
					<span>保湿</span>
					<span>保湿</span>
				</div>
				
			</div>
			<div class="history">
				<i class=""></i>
				<span>历史记录</span>
				<div></div>
			</div>
			<div class="clear">
				<i></i>
				<span>清空搜索历史</span>
			</div>

			<ul>
				<li></li>
			</ul>
		</div>
	</div>
</template>



<script>
import Search from "./Search.vue"

// 搜所结口https://search.cn.memebox.com/global/search?filter=1&order=1&q=%E5%8C%96%E5%A6%86%E6%A3%89&pageIndex=1
export default{
	name:"homesearch",
	components:{ Search },
	methods:{

	}
}
	
</script>




<style>
#app{
	height: 100%;
	overflow:hidden;
}
.bar{
	position: static;
}	
.homesearch{
	height: 100%;
	display: flex;
	flex-flow: column wrap;
	background: white;
}
.se-box{
	flex:1;
	overflow-y:auto; 
	display: flex;
	padding: 0 0.65rem;
	flex-flow: column wrap;
}
.se-box ul li{
	list-style: none;
	height: 2.5rem;
}
.hot-se{
	height: 5.7rem;
	display: flex;
	flex-flow: column wrap;
	border-bottom: 1px solid #f0f0f0;
}
.hot-se p{
	height: 2.1rem;
	line-height: 2.1rem;
	margin: 0;
	
}
.hot-se .hot{
	font-size: .6rem;
	color: #b1b1b1;
}
.hot-se .re-items{
	flex:1;
	display: flex;
	flex-flow: row wrap; 
	justify-content: space-around;
}
.hot-se .re-items span{
	display: inline-block;
	width: 3.7rem;
	height: 1.25rem;
	border: 2px solid #cdcdcd;
	border-radius: 50px;
	font-size: 12px;
	text-align: center;
	line-height: 1.25rem;
    align-items: center;
}


.history{
	height: 2.1rem;
	line-height: 2.1rem;
	color: #b1b1b1;
	font-size: .6rem;
	border-bottom: 1px solid #e4e4e4;
}

.clear{
	height: 1.2rem;
	line-height: 1.2rem;
	text-align: center;
}
.clear span{
	font-size: .6rem;
	color: #707070;
}
</style>