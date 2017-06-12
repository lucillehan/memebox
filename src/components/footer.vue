<template>
	<div class="footer">
		<ul>
			<li>
				<router-link to="" class="active">
					<i class="iconfont icon-shouye"></i>
					<span>首页</span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<i class="iconfont icon-shouye"></i>
					<span>分类</span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<i class="iconfont icon-shouye"></i>
					<span>发现</span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<i class="iconfont icon-shouye"></i>
					<span>购物车</span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<i class="iconfont icon-shouye"></i>
					<span>我哒</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
	  name: 'footer',
	  data(){
	  	return {options:['首页','分类','发现','购物车','我哒']}
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