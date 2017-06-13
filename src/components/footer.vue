<template>
	<div class="footer">
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="home">
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
	  	return {
	  		selected:"home"
	  	}
	  },
	  beforeCreate(){
	  		
			// document.getElementsByTagName("html")[0].style.fontSize = '100px'
		}
	}
</script>

<style scoped>
	.footer{
	  height: .5rem;
	  z-index: 10;
	}
	.footer .mint-tabbar .is-selected{
		color:#FE5173;
	}
	.mint-tab-item{
		padding: 0;
	}
	.mint-tab-item-label i{
		font-size: 27px;
		display: block;
		margin-top: 10px;
	}
	
</style>