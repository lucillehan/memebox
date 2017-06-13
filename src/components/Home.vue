<template>
	<div class="home">
		<Homeheader></Homeheader>
		<section>
			<mt-swipe :auto="4000">
			<mt-swipe-item><img src="http://f11.baidu.com/it/u=1981748892,3031683197&fm=72"/></mt-swipe-item>
			<mt-swipe-item><img src="http://f11.baidu.com/it/u=1981748892,3031683197&fm=72"/></mt-swipe-item>
			<mt-swipe-item><img src="http://f11.baidu.com/it/u=1981748892,3031683197&fm=72"/></mt-swipe-item>
		</mt-swipe>

		<ul class="menu">
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/10/2017330104938icon_1%403x.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/10/2017330104939icon_2%403x.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/11/2017330111635icon_3%403x.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/10/2017330104941icon_4%403x.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/10/2017330104943icon_5%403x.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/10/201733010576icon_1.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/10/201733010578icon_2.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/10/201733010578icon_3.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/10/2017330105710icon_4.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="http://img001.cn.memebox.com/img/activity/2017/3/30/10/2017330105710icon_5.png" alt="">
					<p>幸运抽奖</p>
				</router-link>
			</li>
		</ul>
		</section>
	</div>
</template>

<script>
import Homeheader from "./HomeHeader.vue"
// 首页：url="https://app.cn.memebox.com/h5/view/index?type=1&isNew=1"
	export default{
		name:'home',
		components:{ Homeheader }
	}	
</script>

<style>
	.home{
		flex:1;
		display: flex;
		flex-flow: column wrap;
	}

	section{
		flex:1;
		overflow: auto;
	}
	.mint-swipe{
		height: 1.8rem;
	}
	.mint-header-button{
		display: inline-block;
	}
	.mint-swipe-indicator{
		background: #686868;
		opacity: 1;
	}
	.menu{
		/*height: 1.55rem;*/
		display: flex;
		flex-flow: row wrap; 
		justify-content: center;
	}
	.menu li{
		width: 20%;
		height: .57rem;
		list-style: none;
		line-height: 0;
		margin-top: .12rem;

	}
	.menu li a{
		display: block;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: #5E5E5E;
		line-height: 0;
		text-align: center;
	}
	.menu li a img{
		width: .4rem;
		height: .4rem;
	}
	.menu li a p{
		margin-top: .1rem;
		font-size: .12rem;
	}

</style>