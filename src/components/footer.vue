<template>
	<div class="footer">
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="home" class="active">
		  <i class="iconfont icon-shouye"></i>
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="sort">
		    <i class="iconfont icon-fenlei"></i>
		    分类
		  </mt-tab-item>
		  <mt-tab-item id="find">
		    <i class="iconfont icon-faxian"></i>
		    发现
		  </mt-tab-item>
		  <mt-tab-item id="cart">
		    <i class="iconfont icon-gouwuche"></i>
		    购物车
		  </mt-tab-item>
		  <mt-tab-item id="mine">
		    <i class="iconfont icon-xiaolian"></i>
		    我哒
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
	  height: .5rem;
	}
	/*ul{
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
	}*/
	.active{
		color:#FE5173;
	}
	.mint-tab-item{
		padding: 0
	}
	.mint-tab-item-label i{
		font-size: 27px;
		display: block;
		margin-top: 10px;
	}
	
</style>