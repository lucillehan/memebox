<template>
	<div class="home">
		<Homeheader></Homeheader>
		<section>
			<mt-swipe :auto="4000">
				<mt-swipe-item :key="" v-for="item in  ban"><img :src="item.banner_img"/></mt-swipe-item>
			</mt-swipe>
		<ul class="menu">
			<li v-if="menu[2]!=null"  v-for="item in  menu[2].items">
				<router-link to="">
					<img :src="item.icon_img" alt="">
					<p>{{ item.icon_title }}</p>
				</router-link>
			</li>
			<li v-if="menu[3]!=null" v-for="item in  menu[3].items">
				<router-link to="">
					<img :src="item.icon_img" alt="">
					<p>{{ item.icon_title }}</p>
				</router-link>
			</li>
		</ul>


		<div class="space"></div>

		<div class="tuijian">
			<div  class="lt">
				<img v-if="menu[7]!=null" :src=" menu[7].items[0].special_img" />
			</div>
			<div class="rt">
				<div class="rt-1">
					<img  v-if="menu[7]!=null" :src=" menu[7].items[1].special_img">
				</div>
				<div class="rt-2">
					<div v-if="menu[7]!=null" class="rq"><img :src=" menu[7].items[2].special_img"  alt=""></div>
					<div class="zx"><img v-if="menu[7]!=null" :src=" menu[7].items[3].special_img" alt=""></div>
				</div>
			</div>
		</div>
		
		<div class="sp-gray5"></div>
		<div class="sp-white10"></div>

		<!-- 横向滚动 -->
		<div class="miao">
			<div class="timer">
				<span class="miao-zq"></span>
				<div class="rt-timer">距离结束还有：
					<span>03</span>时
					<span>27</span>分
					<span>27</span>秒
				</div>
				
			</div>
			<div class="listInfo">
				<ul class="scroll1">
					<li v-for="item in  miao">
						<router-link to="">
							<div class="lt-img">
								<img :src="item.imgUrl">
							</div>
							<div class="rt-info">
								<div class="name">{{ item.name }}</div>
								<div class="price">
									￥<span class="rate">{{ item.price }}</span><del>￥{{ item.originPrice }}</del>
								</div>
								<button>马上抢</button>
							</div>
						</router-link>
					</li>
					
				</ul>
			</div>
			<router-link class="see-more" to="">查看更多 ></router-link>
		</div>

		<!-- 今日特价 -->
		<div class="today">
			<div class="timer">
				<span class="today-tj"></span>
				<div class="rt-timer">距离结束还有：
					<span>03</span>时
					<span>27</span>分
					<span>27</span>秒
				</div>
				
			</div>
			<div class="listInfo-tj">
				<ul class="scroll2">
					<li v-for="item in tejia">
						<router-link to="">
							<div class="lt-img">
								<img :src="item.imgUrl">
							</div>
							<div class="rt-info">
								<div class="name">{{ item.name }}</div>
								<div class="price">
									￥<span class="rate">{{ item.price }}</span>
									<!-- <del>￥{{ item.originPrice }}</del> -->
								</div>
								<span v-if="item.productLabels[0]" class="rob">{{ item.productLabels[0].text }}</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		

		<div class="space"></div>
		

		<!-- 好货一起拼 -->
		<div class="today">
			<div class="timer">
				<span class="today-tj let-goods"></span>
				<div class="rt-timer">价低品质硬
					<span>爱拼才会赢</span>
					<span class="iconfont icon-gengduo"></span>
				</div>
				
			</div>
			<div class="listInfo-tj">
				<ul class="scroll2">
					<li v-for="item in haohuo">
						<router-link to="">
							<div class="lt-img">
								<img :src="item.imgUrl">
							</div>
							<div class="rt-info">
								<div class="name">{{ item.name }}</div>
								<div class="price">
									￥<span class="rate">{{ item.price }}</span><del v-if="item.originprice">￥{{ item.originprice }}</del>
								</div>
								<span v-if="item.productLabels[0]" class="rob">{{ item.productLabels[0].text }}</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>

	
		<div class="space"></div>
	
		<!-- 调情配方，好货再入库 -->
		<div class="zhiyou1">
			<div class="zy-img"><img src="http://img001.cn.memebox.com/img/activity/2017/6/14/13/2017614135614CN_06.14_3ce_fix-banner_app_750-424.jpg" alt=""></div>
			<div class="listInfo-tj">
				<ul class="scroll2">
					<li class="plr-10"  v-for="item in haohuo">
						<router-link to="">
							<div class="lt-img">
								<img :src="item.imgUrl">
							</div>
							<div class="rt-info">
								<div class="name">{{ item.name }}</div>
								<div class="price">
									￥<span class="rate">{{ item.price }}</span><del  v-if="item.originprice">￥{{ item.originprice }}</del>
								</div>
								<span v-if="item.productLabels[0]!=null"  class="rob">{{ item.productLabels[0].text }}</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>



		<!-- 第二层 一瓶就能解决 -->
		<div class="zhiyou1">
			<div class="zy-img"><img src="http://img001.cn.memebox.com/img/activity/2017/6/9/8/20176985558%E5%9B%BA%E5%AE%9Abanner.jpg" alt=""></div>
			<div class="listInfo-tj">
				<ul class="scroll2">
					<li class="plr-10">
						<router-link to="">
							<div class="lt-img">
								<img src="http://img-cn1001.memebox.com/media/catalog/product/cache/0/thumbnail/255x255/9df78eab33525d08d6e5fb8d27136e95/p/o/pony_effect__7.jpg">
							</div>
							<div class="rt-info">
								<div class="name">ABOUT ME柠檬排毒美白按摩膏</div>
								<div class="price">
									￥<span class="rate">85.00</span><del>￥158</del>
								</div>
								<span class="rob">直降69</span>
							</div>
						</router-link>
					</li>

					<li class="plr-10">
						<router-link to="">
							<div class="lt-img">
								<img src="http://img-cn1001.memebox.com/media/catalog/product/cache/1/thumbnail/255x255/9df78eab33525d08d6e5fb8d27136e95/f/i/file_199_18.jpg">
							</div>
							<div class="rt-info">
								<div class="name">ABOUT ME柠檬排毒美白按摩膏</div>
								<div class="price">
									￥<span class="rate">85.00</span><del>￥158</del>
								</div>
								<span class="rob">直降69</span>
							</div>
						</router-link>
					</li>

					<li class="plr-10">
						<router-link to="">
							<div class="lt-img">
								<img src="http://img-cn1001.memebox.com/media/catalog/product/cache/0/thumbnail/255x255/9df78eab33525d08d6e5fb8d27136e95/p/o/pony_effect__4.jpg">
							</div>
							<div class="rt-info">
								<div class="name">ABOUT ME柠檬排毒美白按摩膏</div>
								<div class="price">
									￥<span class="rate">85.00</span><del>￥158</del>
								</div>
								<span class="rob">直降69</span>
							</div>
						</router-link>
					</li>

					<li class="plr-10">
						<router-link to="">
							<div class="lt-img">
								<img src="http://img-cn1001.memebox.com/media/catalog/product/cache/0/thumbnail/255x255/9df78eab33525d08d6e5fb8d27136e95/p/d/pdvn310.jpg">
							</div>
							<div class="rt-info">
								<div class="name">ABOUT ME柠檬排毒美白按摩膏</div>
								<div class="price">
									￥<span class="rate">85.00</span><del>￥158</del>
								</div>
								<span class="rob">直降69</span>
							</div>
						</router-link>
					</li>

					<li class="plr-10">
						<router-link to="">
							<div class="lt-img">
								<img src="http://img-cn1001.memebox.com/media/catalog/product/cache/0/thumbnail/255x255/9df78eab33525d08d6e5fb8d27136e95/p/d/pdvn306_1.jpg">
							</div>
							<div class="rt-info">
								<div class="name">ABOUT ME柠檬排毒美白按摩膏</div>
								<div class="price">
									￥<span class="rate">85.00</span><del>￥158</del>
								</div>
								<span class="rob">直降69</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>




		<!-- 为你推荐 -->
		<div class="favor">
			<h3><img src="http://m.cn.memebox.com/images/app/tuijian_icon.png" alt=""></h3>
			<div class="favor-list">
				<ul>
					<li v-for="items in  tuijian">
						<router-link to="">
							<div class="tj-info">
								<i></i>
								<img :src="items.imgUrl" alt="">
							</div>
							<p class="tj-name">{{ items.name }}</p>
							<div class="tj-limit-q" v-if="items.productLabels[0]"><span>{{ items.productLabels[0].text}}</span></div>
							<div class="price-box">
								<span>￥{{ items.price }}</span>
								<del>￥{{ items.originPrice }}</del>
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
import jsonp from "jsonp"
import Footer from './Footer.vue'
import Vue from "vue"

// 首页：url="https://app.cn.memebox.com/h5/view/index?type=1&isNew=1"
	export default{
		name:'home',
		components:{ Homeheader,Footer },
		data(){
			return {
				ban:'',
				menu:'',
				tejia:'',
				miao:'',
				tuijian:'',
				haohuo:''
			}
		},
		created(){
			// var url = "https://app.cn.memebox.com/h5/view/index?type=1&isNew=1"

			// jsonp(url,null,(err,res)=> {
			// 	if(err){

			// 	}else{}
			// })

			//轮播和菜单数据
			let url1 = "../../static/json/home.json"
			Vue.axios.get(url1).then(function(res){
				// console.log(res.data.data.components)
				return res.data.data.components
			}).then((data)=>{
				// console.log(data)
				this.ban = data[0].items;
				this.menu = data;
				// this.tiaoqing = data;
				// this.nvshen = data;
				
			})


			//超秒专区
			let url2 = "../../static/json/chaomiaozq.json"
			Vue.axios.get(url2).then(function(res){
				// console.log(res)
				return res.data.data.productList
			}).then((data)=>{
				// console.log(data)
				this.miao = data
			})


			//今日特价
			let url5 = "../../static/json/tejia.json"
			Vue.axios.get(url5).then(function(res){
				// console.log(res)
				return res.data.data.items
			}).then((data)=>{
				// console.log(data)
				this.tejia = data
			})




			//为你推荐
			// let url3 = "https://app.cn.memebox.com/mobilev44/recommend/index?page=1&pageSize=10&pageType=3&userId=";
			let url3 = "../../static/json/tuijian.json"
			Vue.axios.get(url3).then(function(res){
				// console.log(res)
				return res.data.data.items
			}).then((data)=>{
				// console.log(data)
				this.tuijian = data
			})


			//好货一起拼
			let url4 = "../../static/json/tuijian.json"
			Vue.axios.get(url4).then(function(res){
				// console.log(res)
				return res.data.data.items
			}).then((data)=>{
				// console.log(data)
				this.haohuo = data
			})

		}
	}
	
</script>

<style>
	li{
		list-style: none;
		line-height: 0;
	}
	a{
		text-decoration: none;
	}
	.space{
		height: .1rem;
		background: #F5F5F5;
	}
	.sp-gray5{
		height: .05rem;
		background: #F5F5F5;
	}
	.sp-white10{
		height: .1rem;
		background: white;
	}
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
		margin: .1rem auto;
		width: 3.46rem;
		height: 2rem;
		border-radius: .05rem;
		box-shadow: 0 0 5px 1px #E5E5E5;
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
	.rt-timer{ width: 1.89rem; height: .2rem; float: right; font-size: .12rem; text-align: right; }
	.scroll1{ width: 400%; height: 1.4rem; display: flex; padding: .1rem 0;  }
	.scroll1 li{width: 2.9rem; height: 100%; line-height: 0; border: 1px solid #F0F0F2; list-style: none; margin-right: .1rem;}
	.scroll1 li a{
		display: block;
		width: 100%;
		height:100%;
	}

	.scroll1 li a .lt-img{
		width: 1.2rem;
		height: 1.18rem;
		float: left;
	}
	.scroll1 li a .lt-img img{
		width: 100%;
		height: 100%;
	}
	.scroll1 li a .rt-info{
		display: inline-block;
		width: 1.5rem;
		padding: .14rem .15rem 0 0;
		color: #333;
	    font-size: .12rem;
	    white-space: normal;
	    float: right;
	    line-height: .16rem;
	}
	.price{
		width: .44rem;
		font-size: .14rem;
		color: #ff5073;
		font-weight: bold;
		margin-bottom: .1rem;
	}
	.name{
		margin-bottom: .1rem;
		font-size: .13rem; 
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
	}
	.price del{
		color: #bbb;
		font-size: .12rem;
		margin-bottom: .1rem;
		height: .15rem;
		line-height: .15rem;
	}
	.rt-info button{
		width: .65rem;
		height: .25rem;
		background: #ff5073;
		border: none;
		font-size: .12rem;
		color: white;
	}
	.listInfo{
		height: 1.4rem;
		overflow-x: scroll;
		overflow-y: hidden;
	}
	.see-more{
		text-align: center;
	    color: #999;
	    font-size: .14rem;
	    display: block;
	    text-decoration: none;
	}



	/*今日特价*/
	.today{
		height: 2.29rem;
		overflow-x: scroll;
		overflow-y: hidden;
	}
	.today-tj{ width:.9rem; height: .2rem; display: inline-block; float: left; font-size: .2rem; background: url(http://m.cn.memebox.com/images/app/home/include/discount-title.png?t=2017525110) no-repeat center center; background-size: 100% 100%; }
	.listInfo-tj{
		width: 3.6rem;
		height: 1.96rem;
		margin: 0 auto;
		overflow-x: scroll;
		overflow-y: hidden;
	}
	.listInfo-tj .scroll2{
		/*width: 3.6rem;*/
		width: 500px;
		height: 1.96rem;
		display: flex;
	}
	.scroll2 li{
		width: 1.1rem;
		height: 1.76rem;
		padding: 0 .07rem;
	}
	.scroll2 li a{
		height: 100%;
		width: 100%;
		display: block;
	}
	.scroll2 li a .lt-img{
		width: .96rem;
		height: .96rem;
		text-align: center;
	}
	.scroll2 li a .lt-img img{ 
		width: 100%;
		height: 100%;

	}
	.scroll2 .rt-info .name{
		font-size: .12rem;
		color: #404040;
		line-height: .15rem;
		height: .28rem;
	}
	.scroll2 .rt-info .rob{
		display: block;
		width: .48rem;
		height: .18rem;
		background: -webkit-linear-gradient(left,#ff5073,#ff738f);
		font-size: .12rem;	
		line-height: .18rem;
		text-align: center;
		font-weight: bold;
		color: white;
	}


	/*好货一起拼*/
	.let-goods{
		width: 1.13rem;
		height: .18rem;
		background: url(http://m.cn.memebox.com/images/app/home/include/haohuo.png?t=2017525110) no-repeat center center;
		background-size: 100% 100%; 
	}
	.plr-10{
		border-right: 1px solid #F0F0F0;
	}
	.zy-img{
		width: 3.75rem;
		height: 2.12rem;
	}
	.zy-img img{
		width: 100%;
		height: 100%;
	}

	/*为你推荐*/
	.favor{
		background: #F5F5F5;
	}
	.favor h3{
		font-size: .14rem;
		text-align: center;
		padding: .12rem 0;
	}
	.favor h3 img{
		width: .66rem;
		height: .15rem;
	}

	.favor-list{
		padding: 0 .1rem;
	}
	.favor-list ul{
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;

	}
	.favor-list ul li{
		width: 44%;
		padding: .1rem;
		background: white;
		margin-bottom: .1rem;

	}
	.favor-list ul li a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.favor-list ul li a .tj-info{
		position: relative;
		width: 100%;
	}
	.tj-info img{
		width: 100%;
	}
	.tj-name{
		font-size: .12rem;
		line-height: .15rem;
		margin: .08rem 0;
		color: #333333;
	}
	.tj-limit-q{
		font-size: .12rem;
		line-height: .18rem;
		width: .48rem;
		height: .18rem;
		display: block;
		color: #F8798A;
		background: #FEE1E5;
		text-align: center;
	}
	.price-box{
		font-size: .14rem;
		height: .2rem;
		line-height: .2rem;
	}
	.price-box span{
		font-size: .16rem;
		color:#FF6E8B;
	}
	.price-box del{
		color: #C0C0C0;
		font-size: .12rem;
	}
</style>