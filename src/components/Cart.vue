<template>
	<div class="cart">
		<mt-header title="购物车">
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
			<div v-if="flag" class="cartItems">

				<div class="space"></div>
				
				<div class="adds">
					<input type="checkbox" checked="checked">
					<span class="baoyou">
						<i></i>韩国直邮 / 特快
					</span>
					<span>满299元免邮</span>
				</div>

				<ul class="cartItem">
					<li>
						<input type="checkbox" checked="checked">
						<div class="item-ri">
							<img src="http://img-cn1001.memebox.com/media/catalog/product/cache/0/thumbnail/255x255/9df78eab33525d08d6e5fb8d27136e95/5/2/52000480_1.jpg" alt="">
							<div class="ri-box">
								<p>红酒</p>
								<div class="cacu">
									<button @click="jian">-</button>
									<span>{{ num }}</span>
									<button @click="jia">+</button>
								</div>
								<div class="priceShow">
									<span>￥20.00</span>
								</div>
								<span class="dele icon icon-remove"></span>
							</div>
						</div>
					</li>
				</ul>
				<div class="totalBox">
					<p>优惠：<span>-￥20.00</span></p>
					<p>本仓总计：<span class="total">￥219.00</span></p>
				</div>
			</div>
		</div>
		<div class="all">
			<div class="all-left">
				<input type="checkbox" checked="checked">全选
				<div class="all-left-box">
					<p>总计：<span>￥527</span></p>
					<p class="describe">不含运费</p>
				</div>
			</div>
			<div class="all-right">
				<router-link to="">
					去结算
				</router-link>
			</div>
		</div>
		<Footer />
	</div>
</template>



<script>
import Footer from "./Footer.vue"
console.log(Footer)
	export default{
		name:'cart',
		components:{ Footer },
		data(){
			return {
				flag:true,
				num:1
			}
		},
		methods:{
			jian(){
				if(this.num > 1){
					this.num--
				}else{
					alert("数量不能小于1")
				}
			},
			jia(){
				if(this.num < 20 ){
					this.num++
				}else{
					alert("不能买超过20件哟！")
				}
			}
		}
	}
</script>



<style>
	.space{
		width: 100%;
		height: .13rem;
		background: #F5F5F5;
	}
	p{
		margin: 0;
	}
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
	.cartItems{
		width: 100%;
		height: 100%;
		/*overflow-y: scroll;*/
		display: flex;
		flex-flow: column wrap;
	}
	.adds{
		height: .39rem;
		background: #fff;
		display: flex;
		padding:.1rem;
		border-bottom: 1px solid #EBEBEB;
		align-items: center;
	}
	.adds input{
		/*width: .22rem;
		height: .22rem;*/
		border-radius: 50%;
		background: #FF5073;
		border:none;
	}
	.adds input[type=checkbox]:checked:before {
    color: #ff5073;
    font-size: 1.375rem;
}
	.adds span{
		display: flex;
		vertical-align: middle;
	}
	.baoyou{
		margin-left: .05rem;
		font-size: .14rem;
		line-height: .18rem;
		height: .18rem;
		background: #a357fa;
		border-radius: .1rem;
		color: white;
		width: 1.32rem;
		margin-right: .05rem;
	}
	.baoyou i{
		margin: .01rem .05rem .01rem.01rem;
		width: .16rem;
		height: .16rem;
		display: inline-block;
		background: url(http://m.cn.memebox.com/images/app/cart/css-cart-korea.png)no-repeat center center;
		background-size: 100% 100%;
	} 
	.cartItem{
		width: 100%;
		/*height: 100%;*/
		background: white;
		/*flex: 1;*/
	}
	.cartItem li{
		height: 1.33rem;
		padding-left: .13rem;
		display: flex;
		padding: .13rem;
		border-bottom: 1px solid #ECECEC;

	}
	.cartItem li input{
		margin: .43rem 0 0 0;
	}
	.item-ri{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;

	}
	.item-ri img{
		width: .86rem;
		height: .86rem;
		border: none;
	}
	.ri-box{
		display: inline-block;
		height: .89rem;
		flex: 1;
		position: relative;
		padding-left: .1rem;
	}
	.ri-box p{
		height: .19rem;
		line-height: .19rem;
		color: #333333;
		font-size: .14rem;
	}
	.cacu{
		height: .35rem;
		width: 100%;
		vertical-align: middle;
		margin-top: .12rem;
	}
	.cacu button{
		width: .38rem;
		height: .38rem;
		float: left;
		border:1px solid #C9C9C9;
		background:#F9F9F9;
	}
	.cacu span{
		display: inline-block;
		width: .38rem;
		height: .36rem;
		border-top:1px solid #C9C9C9;
		border-bottom:1px solid #C9C9C9;
		vertical-align: middle;
		float: left;
		line-height: .38rem;
		text-align: center;
		background:#EFEFF4;
	}
	.priceShow{
		height: .19rem;
		font-size: .14rem;
		margin-top: .2rem;
	}
	.priceShow span{
		color: #FF607F;
	}
	.dele{
		width: .3rem;
		height: .33rem;
		position: absolute;
		top: .3rem;
		right:.21rem;
		line-height: .47rem;
		font-size: .33rem;
	}

	.totalBox{
		background: white;
		height: .71rem;
		display: flex;
		padding: .1rem .2rem;
		flex-flow: row wrap;
		
	}
	.totalBox p{
		width: 100%;
		height: .21rem;
		margin-bottom: .08rem;
		line-height: .2rem;
		display: block;
		text-align: right;
		font-size: .12rem;
	}
	.totalBox p span{
		font-size: .16rem;
	}
	.total{
		color: #FF5678;
	}
	.all{
		height: .52rem;
		background: white;
		width: 100%;
		display: flex;
		align-items: center;
	}
	.all-left{
		flex:1;
		/*display: flex;*/
		padding:.05rem .15rem;
		font-size: .12rem;
		align-items: center;
	}
	.all-right{
		width: 1.5rem;
		height: .52rem;
	}
	.all-right a{
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: .52rem;
		background: #FF5073;
		font-size: .14rem;
		color: white;
	}
	.all-left-box{
		/*width: 10rem;*/
		height: 100%;
		margin-left: .5rem;
	}
	.all-left-box .describe{
		margin-left: .8rem;
	}

</style>