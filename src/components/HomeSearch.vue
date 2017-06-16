<template>
	<div class="homesearch">
		<Search @sendData="getData"/>
		
		<div class="se-box" v-if="flag">
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
				<ul class="hi-list">
					<li></li>
				</ul>
			</div>
			<div class="clear">
				<i></i>
				<span>清空搜索历史</span>
			</div>
			
		</div>

		<ul class="se-items">
			<li v-for="item in dataList">
				<div class="le-img">
					<img :src="item.imgPc" alt="">
				</div>
				<div class="ri-info">
					<p>{{ item.name }}</p>
					<div class="priceBox">
						<div class="priceNow">￥<span>{{ item.price }}</span></div>
						<del>￥{{ item.originPrice }}</del>
						<span @click="add" class="add" href=""></span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>



<script>
import Search from "./Search.vue"
import Toast from "mint-ui"
// 搜所结口https://search.cn.memebox.com/global/search?filter=1&order=1&q=%E5%8C%96%E5%A6%86%E6%A3%89&pageIndex=1
export default{
	name:"homesearch",
	components:{ Search },
	data(){
		return {
			flag:true,
			dataList:''
		}
	},
	methods:{
		getData(res){
			this.flag = false
			this.dataList = res
			console.log(res)
		},
		add(){
			$.toast('操作成功！', 2345, 'success top');
		}
	}
}
	
</script>




<style>
body{
	line-height: 0;
}
li{
	list-style: none;
}
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


/*搜索的列表*/
.se-items{
	flex:1;
	overflow-y:auto; 
	display: flex;
	padding: 0 0.65rem;
	flex-flow: row wrap;

}
.se-items li{
	height: 5.35rem;
	width: 100%;
	display: flex;
}
.se-items li .le-img{
	height: 4.5rem;
	width: 4.5rem;
}
.se-items li .le-img img{
	width: 100%;
	height: 100%;
}
.se-items .ri-info{
	flex: 1;
	padding:.5rem;
	position: relative;
	width: 50%;
}
.ri-info p{
	margin: 0;
	height: 1.95rem;
	line-height: 1.95rem;
	width: 80%;
	overflow:hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.priceBox{
	width: 100%;
	height: 2.2rem;
	line-height: 2.2rem;
}
.priceNow{
	height: 2.2rem;
	line-height: 2.2rem;
	color: #FA3535;
	font-size: .7rem;
	display: inline-block;
}
.priceBox del{
	color: #BABABA;
	font-size: .6rem;
}
.priceBox .add{
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	background: url(http://m.cn.memebox.com/images/app/home/include/css-shoppingCart.png)no-repeat center center;
	background-size: 100% 100%;
	position: absolute;
	right: 10%;
	bottom: 20%;
}
</style>