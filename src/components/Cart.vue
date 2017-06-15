<template>
	<div class="cart">
		<mt-header title="多个按钮">
		  <div slot="left">
		    <mt-button v-link="'/'" icon="back"></mt-button>
		  </div>
		</mt-header>

		<div class="cart-box">
			<div class="tips" v-if="!flag">
				<p>购物车还没有商品</p>
				<p>赶紧搜索精彩美妆吧</p>
				<router-link to="/" type="button">去购物</router-link>
			</div>
		</div>
	</div>
</template>



<script>
	export default{
		name:'cart',
		data(){
			return {
				flag:false
			}
		}
	}
</script>



<style>
	body{
		line-height: 0;
	}
	.cart{
		display: flex;
		flex-flow: column wrap;
		height: 100%;
		width: 100%;
		background: #EFEFF4;
	}
	.mint-header{
		background: #ff5073;
		height: .44rem;
		width: 100%;
	}
	.mint-header h1{
		font-size: .17rem;
	}
	.cart-box{
		flex: 1;
		font-size: .14rem;
	}
	.tips{
		overflow:hidden;
		text-align: center;
		padding-top: 30%;
		color:  #b4b4b4;
	}
	.tips p{
		margin: 0;
		line-height: .18rem;
	}
	.tips .router-link-active{
		display: inline-block;
		height: .33rem;
		width: .68rem;
		border: 1px solid #F98CA3;
		text-align: center;
		color: #F98CA3;
		line-height: .33rem;
		border-radius: 5px;
		background: #EFEFF4;
	}
</style>