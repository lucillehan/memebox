<template>
	<div class="homeheader">
		<mt-header title="多个按钮">
			 <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			    <mt-button @click="">关闭</mt-button>
			 </router-link>
			 <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-swipe :auto="4000">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
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
	.homeheader{
		height: 312px;
	}
	.mint-swipe{
		margin-top:41px; 
	}
</style>