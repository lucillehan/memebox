<template>
	<div class="homeheader">
		<!-- <mt-header title="">
		  <router-link to="/" slot="left">
		    <mt-button><img src="http://img-cn1001.memebox.com/media/app/default/_banner.png" alt=""></mt-button>
		  </router-link>
		  <input type="text" value="搜索商品品牌">
		  <mt-button slot="right"><i class="iconfont icon-iconfont"></i></mt-button>
		</mt-header> -->

		<div class="header">
			<div class="logo"><img src="../assets/logo.jpg" alt=""></div>
			<div class="center"><i class="iconfont icon-sou"></i><input type="text"></div>
			<div class="right"><i class="iconfont icon-iconfont"></i></div>
		</div>
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
	}
</script>

<style>
	.homeheader{
		height: .44rem;
	}
	.header{
		height: 100%;
		position: relative;
		line-height: 0;
		background: #908164;
		vertical-align: middle;
	}
	/*.mint-header{
		height: .44rem;
		background: #95775F;
	}*/
	.logo, .center, .right{
		display: inline-block;
		line-height: 0;
	}
	.logo{
		position: absolute;
		top:.14rem;
		left: .15rem;
		display: inline-block;
		width: .21rem;
		height: .18rem;
		background: red;
	}
	.logo img{
		width: 100%;
		height: 100%;
		float: left;
	}
	.center{
		width: 74%;
		height: .3rem;
		margin-top: .07rem;
		margin-left: .5rem;
		vertical-align: middle;
		background: white;
		position: relative;
	}
	.center i{
		display: inline-block;
		float: left;
		width: .15rem;
		height: .15rem;
		margin: .08rem 0 0 .1rem;
		line-height: 1;
	}
	.center input{
		float: right;
		vertical-align: middle;
		width: 85%;
		height: .3rem;
		line-height: .3rem;
		border: none;
		border: 0;
	}
	.right{
		/*width: .2rem;*/
		height: .18rem;
		position: absolute;
		top:.24rem;
		right: .16rem;
	}
	.right i{
		float: left;
	}
	*{padding: 0;margin: 0;}
</style>