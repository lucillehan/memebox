<template>
	<div class="homeheader">
		<mt-header title="">
		  <router-link to="/" slot="left">
		    <mt-button><img src="../assets/logo.jpg" alt=""></mt-button>
		  </router-link>
		  <input type="text" value="搜索商品品牌">
		  <mt-button slot="right"><i class="iconfont icon-iconfont"></i></mt-button>
		</mt-header>

		<!-- <div class="header">
			<div class="logo"><img src="../assets/logo.jpg" alt=""></div>
			<div class="center"><input type="text"></div>
			<div class="right"><i class="iconfont icon-gengduo"></i></div>
		</div> -->
		<!-- <mt-swipe :auto="4000">
			<mt-swipe-item><img src="http://f11.baidu.com/it/u=1981748892,3031683197&fm=72"/></mt-swipe-item>
			<mt-swipe-item><img src="http://f11.baidu.com/it/u=1981748892,3031683197&fm=72"/></mt-swipe-item>
			<mt-swipe-item><img src="http://f11.baidu.com/it/u=1981748892,3031683197&fm=72"/></mt-swipe-item>
		</mt-swipe> -->
	</div>
</template>

<script>
import jsonp from 'jsonp';
// url="https://app.cn.memebox.com/h5/view/index?type=1&isNew=1"
	export default{
		name:'homeheader',
		data(){
			return {
				banImgs:[]
			}
		}
		// ,
		// created(){
		// 	let url = "https://app.cn.memebox.com/h5/view/index?type=1&isNew=1"
		// 	jsonp(url,null,(err,res)=>{
		// 		if(err){
		// 			console.log(err)
		// 		}else{
		// 			console.log(res.data)
		// 		}
		// 	})

		// }
	}
</script>

<style>
	.header{
		height: 100%;
		position: relative;
	}
	.mint-header{
		height: .44rem;
		background: #95775F;
	}
	.logo, .center, .right{
		display: inline-block;
	}
	.logo{
		position: absolute;
		top:12px;
		left: 15px;
	}
	
	.logo{
		display: inline-block;
		width: 43px;
		height: 35px;
		background: red;
	}
</style>