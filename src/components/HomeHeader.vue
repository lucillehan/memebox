<template>
	<div class="homeheader">
		<mt-header title="">
		  <router-link to="/" slot="left">
		    <mt-button><img src="../assets/logo.jpg" alt=""></mt-button>
		  </router-link>
		  <input type="text" value="搜索商品品牌">
		  <mt-button slot="right"><i class="iconfont icon-iconfont"></i></mt-button>
		</mt-header>
 
	
	</div>
</template>

<script>

  
 import jsonp from 'jsonp';
 
	export default{
		name:'Homeheader',
		 
		data(){
			return {
				banImgs:[]
			}
		}
		 
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