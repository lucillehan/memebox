<template>
	<div class="footer">
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="外卖">
		    <img slot="icon" src="">
		    外卖
		  </mt-tab-item>
		  <mt-tab-item id="订单">
		    <img slot="icon" src="">
		    订单
		  </mt-tab-item>
		  <mt-tab-item id="发现">
		    <img slot="icon" src="">
		    发现
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		    <img slot="icon" src="">
		    我的
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	export default {
	  name: 'footer',
	  data(){
	  	return {}
	  }
	}
</script>

<style>
	.footer{
	  height: 50px;
	}
	ul{
		height: 100%;
		display: flex;
	}
	ul li{
		list-style: none;
		flex:1;
	}
	ul li  a{
		display: block;
		text-decoration: none;
		color:#AAAAAA;
		width: 100%;
		height: 100%;
	}
	.active{
		color:#FE5173;
	}
	ul li  a i{
		font-size: 27px;
		display: block;
		margin-top: 10px;
	}
	ul li  a span{
		display: block;
		font-size: 12px;
	}
</style>