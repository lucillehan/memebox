<template>
	<div class="us-wrapper">
		<div class="us-logobox">
			<div class="us-logobox-title"> 
				<span class="us-setting iconfont icon-shezhi"></span>
				<span class="us-news iconfont icon-xiaoxi"></span>
			</div>
			<div class="us-logobox-user">
				<div class="us-img">
					<img class="user-logo" src="http://m.cn.memebox.com/images/app/my/include/user-logo.png" />
				</div>
				<div class="us-num">
					{{ username }}
				</div>
				<div class="us-level">
					<img class="us-levelimg" src="http://m.cn.memebox.com/images/app/my/include/vip0.png" />
				</div>
			</div>
		</div>
		<div class="us-infobox">
			<ul class="us-infobox-title">
				<li>
					<div class="us-score">0</div>
					<div>我的蜜豆</div>
					<div class="us-border"></div>
				</li>
				<li>
					<div class="us-score">4</div>
					<div>我的优惠券</div>
					<div class="us-border"></div>
				</li>
				<li>
					<div class="us-score">0</div>
					<div>我的收藏</div>
				</li>
			</ul>
			<div class="us-order">
				<div class="us-itembox us-myorder">
					<img class="us-icon" src="http://m.cn.memebox.com/images/app/my/include/css-list.jpg" />
					<span class="us-text">我的订单</span>
					<span class="us-enter iconfont icon-you"></span>
					<span class="us-allmyorder">查看全部订单</span>		
				</div>
				<ul class="us-status">
					<li>
						<div class="iconfont icon-pay"></div>
						<div class="us-tip">待支付</div>
					</li>
					<li>
						<div class="iconfont icon-fahuo-copy"></div>
						<div class="us-tip">待发货</div>
					</li>
					<li>
						<div class="iconfont icon-fahuo"></div>
						<div class="us-tip">待收货</div>
					</li>
					<li>
						<div class="iconfont icon-pingjia"></div>
						<div class="us-tip">待评价</div>
					</li>
					<li>
						<div class="iconfont icon-tuihuo"></div>
						<div class="us-tip">退货</div>
					</li>
				</ul>
				
			</div>
			<div class="us-menu">
				<div class="us-itembox us-myorder">
					<img class="us-icon" src="http://m.cn.memebox.com/images/app/my/include/css-list.jpg" />
					<span class="us-text">我的收货地址</span>
					<span class="us-enter iconfont icon-you"></span>		
				</div>
				<div class="us-itembox us-myorder">
					<img class="us-icon" src="http://m.cn.memebox.com/images/app/my/include/css-me.jpg" />
					<span class="us-text">玩转蜜豆</span>
					<span class="us-enter iconfont icon-you"></span>		
				</div>
				<div class="us-itembox us-myorder">
					<img class="us-icon" src="http://m.cn.memebox.com/images/app/my/include/css-collection.jpg" />
					<span class="us-text">我的夺宝</span>
					<span class="us-enter iconfont icon-you"></span>		
				</div>
				<div class="us-itembox us-myorder" style="border: none;">
					<img class="us-icon" src="http://m.cn.memebox.com/images/app/my/include/css-invite.jpg" />
					<span class="us-text">邀请有礼</span>
					<span class="us-enter iconfont icon-you"></span>		
				</div>
				
			</div>
		
		
		</div>
		
          
		   
		<Footer></Footer>
	</div>
</template>

<script>
	
import Footer from './Footer.vue'

export default {
	
  name: 'User',
  
  components:{ Footer },
  
  data () {
  	
    return {
      
      username:'188****1226'
      
    }
    
  },
  
   created() {
   	
   	if(localStorage.username){
   		
   		this.username=localStorage.username;
   		
   	}else{
   		
   		this.username="请先登陆后再跳转到此页面";
   		
   	}
   	
   	
    
   },
  
  methods:{
			
		sendData(){
			
			this.$emit("loginevent",false)
			
			
		},
		
		userData(){
			
			
				
			
			
		}
		  
  }
    
  
 
}
	
</script>

<style>

	body{
		overflow-y: hidden;
	}
	
	html{
		font-size: 31.25vw!important;
		font-family: "微软雅黑";
	}
	
	.us-wrapper{
		width: 100vw;
		height: 100vh;
		font-size: 0.18rem;
		background: #f5f5f5;
	}
	
	.us-wrapper .us-logobox{
		width: 100%;
		height: 1.665rem;
		background: url(http://m.cn.memebox.com/images/app/my/include/css-user-bg.jpg) no-repeat center center;
    	background-size: 100% 100%;
		opacity: 1;
	}
	
	.us-wrapper .us-logobox .us-logobox-title{
		width: 100%;
		height: 0.3rem;
		line-height: 0.3rem ;
		color: #fff;
		font-size: 0.18rem;
	}
	
	.us-wrapper .us-logobox .us-logobox-title .us-setting{
		float: left;
		margin-left: 0.18rem;
	}
	
	.us-wrapper .us-logobox .us-logobox-title .us-news{
		float: right;
		margin-right:0.18rem;
	}
	
	.us-wrapper .us-logobox .us-logobox-user{
		width: 100%;
		height: 1.365rem;
		
		
	}
	
	.us-wrapper .us-logobox .us-logobox-user .us-img{
		width: 0.73rem;
		height:0.73rem;
		margin: 0 auto;
		
	}
	
	.us-wrapper .us-logobox .us-logobox-user .us-img .user-logo{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.us-wrapper .us-logobox .us-logobox-user .us-num{
	/*	width: 0.75rem;*/
		height:0.265rem ;
		line-height:0.265rem ;
		text-align: center;
		/*font-size: 18px;*/
		color: #fff;
		margin: 0 auto;
	}

	.us-wrapper .us-logobox .us-logobox-user .us-level{
		width: 0.65rem;
		height:0.16rem ;
		line-height: 0.16rem;
		margin: 0 auto;
		
	}
	
	.us-wrapper .us-logobox .us-logobox-user .us-level .us-levelimg{
		width: 100%;
		height: 100%;
	}
	
	.us-wrapper .us-infobox{
		width: 100%;
		height: 3.4rem;
	
	}
	
	.us-wrapper .us-infobox .us-infobox-title{
		width: 100%;
		height: 0.51rem;
		background: #fff;
	}
	
	.us-wrapper .us-infobox .us-infobox-title li{
		float: left;
		width: 1.05rem;
		height: 0.51rem;
		font-size: 12px;
		text-align: center;
		position: relative;
	}
	
	.us-wrapper .us-infobox .us-infobox-title li .us-score{
		margin-top: 0.12rem;
	}
	
	.us-wrapper .us-infobox .us-infobox-title li .us-border{
		width: 0.01rem;
		height: 0.26rem;
		background: #a3a3a3;
		position: absolute;
		right: 0;
		top:0.13rem;
	}
	
	.us-wrapper .us-infobox .us-order{
		width: 100%;
		height: 1.03rem;
		margin-top: 0.085rem;
		background: #fff;
	}
	
	.us-wrapper .us-infobox .us-itembox{
		width: 2.96rem;
		height: 0.425rem;
		line-height: 0.425rem;
		font-size: 0.14rem;
		margin: 0 auto;
		border-bottom: 0.01rem solid #6a6a6a;	
	}
	
	.us-wrapper .us-infobox .us-itembox .us-icon,.us-wrapper .us-infobox .us-itembox .us-text{
		float: left;
	}
	
	.us-wrapper .us-infobox .us-itembox .us-text{
		margin-left: 0.085rem;
	}
	
	.us-wrapper .us-infobox .us-itembox .us-enter,.us-wrapper .us-infobox .us-myorder .us-allmyorder{
		float: right;
		color: #5d5d5d;
	}
	
	.us-wrapper .us-infobox .us-itembox .us-icon{
		width: 0.14rem;
		height: 0.15rem;
		position: relative;
		top:0.14rem ;
	}
	
	.us-wrapper .us-infobox .us-order .us-status{
		width: 2.96rem;
		height: 0.59rem;
		margin: 0 auto;
	}
	
	.us-wrapper .us-infobox .us-order .us-status li{
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 20%;
		height: 0.59rem;
		text-align: center;
		font-size: 0.12rem;
	}
	
	.us-status .us-tip{
		margin-top: 0.08rem;
	}

	.us-wrapper .us-infobox .us-menu{
		width: 100%;
		background: #fff;
		margin-top: 0.085rem;
		
	}
</style>