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

		<div class="tuijian">
			<div class="lt">
				<img src="http://img001.cn.memebox.com/img/activity/2017/6/5/18/201765182647%E6%8B%BC%E6%8E%A5banner_01.jpg" />
			</div>
			<div class="rt">
				<div class="rt-1">
					<img src="http://img001.cn.memebox.com/img/activity/2017/6/5/18/201765182647%E6%8B%BC%E6%8E%A5banner_02.jpg">
				</div>
				<div class="rt-2">
					<div class="rq"><img src="http://img001.cn.memebox.com/img/activity/2017/6/5/18/201765182647%E6%8B%BC%E6%8E%A5banner_03.jpg" alt=""></div>
					<div class="zx"><img src="http://img001.cn.memebox.com/img/activity/2017/6/12/9/20176129594104.jpg" alt=""></div>
				</div>
			</div>
		</div>

		<!-- 横向滚动 -->
		<div class="miao">
			<div class="timer">
				<span class="miao-zq"></span>
				<div class="rt-timer">距离结束还有：
					<span>03</span>时
					<span>27</span>分
					<span>27</span>秒
				</div>
				<ul class="scroll1">
					<li>
						<router-link to="">
							<div class="lt-img">
								<img src="http://img-cn1001.memebox.com/media/catalog/product/cache/1/thumbnail/255x255/9df78eab33525d08d6e5fb8d27136e95/f/i/file_199_18.jpg">
							</div>
							<div class="rt-info">
								<div class="name">ABOUT ME柠檬排毒美白按摩膏</div>
								<div class="price">
									￥<span class="rate">85.00</span>
									<del>￥158</del>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		</section>



			<Footer></Footer>
	</div>
</template>

<script>
import Homeheader from "./HomeHeader.vue"
 import Footer from './Footer.vue'
// 首页：url="https://app.cn.memebox.com/h5/view/index?type=1&isNew=1"
	export default{
		name:'home',
		components:{ Homeheader,Footer }
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
	.tuijian{
		margin: 0 auto;
		width: 3.46rem;
		height: 2rem;
		border-radius: .5rem;
	}
	.tuijian img{
		width: 100%;
		height: 100%;

	}
	.lt{
		width: 1.45rem;
		height: 100%;
		float: left;
	}
	.rt{
		width:2rem;
		height: 100%;
		float: right; 
	}
	.rt-1{
		height: .9rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.rt-2{
		height:1.08rem;
		/*border-bottom:1px solid #F0F0F0;*/
	}
	.rq{
		width: 50%;
		height: 100%;
		float: left;
	}
	.zx{
		width: 50%;
		height: 100%;
		float: right;
	}

	/*秒杀专区*/
	.miao{
		width: 3.75rem;
		height: 2.02rem;
	}

	.timer{
		width: 3.6rem;
		height: .23rem;
		margin: 0 auto;
	}
	.miao-zq{ width:.9rem; height: .2rem; display: inline-block; float: left; font-size: .2rem; background: url(http://m.cn.memebox.com/images/app/home/include/flashsale.png?t=2017525110) no-repeat center center; background-size: 100% 100%; }
	.rt-timer{ width: 1.89rem; height: .2rem; float: right; font-size: .12rem; }
	.scroll1{ width: 100%; height: 1.4rem; display: flex; padding: .1rem 0;  }
	.scroll1 li{width: 2.9rem; height: 100%; }
	.scroll1 li a{
		display: block;
		width: 100%;
		height:100%;
	}

	.scroll1 li a .lt-img{
		width: 1.2rem;
		height: 1.18rem;
		display: inline-block;
	}
	.scroll1 li a .lt-img img{
		width: 100%;
		height: 100%;
	}
	.scroll1 li a .rt-info{
		display: inline-block;
		width: 1.23rem;
		padding: .14rem .15rem 0 0;
		color: #333;
	    font-size: .12rem;
	    white-space: normal;
	}

</style>