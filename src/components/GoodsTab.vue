<template>
	<div class="content">
		  <div class="buttons-tab">
		    <a href="#tab1" class="tab-link active button">综合</a>
		    <a href="#tab2" class="tab-link button">销量</a>
		    <a href="#tab3" class="tab-link button">价格</a>
		     <a href="#tab4" class="tab-link button">筛选</a>
		  </div>
		  <div class="content-block">
		    
			
		      <div id="tab1" class="tab active">
		        <div class="content-block">
		          	<ul>
					<li class="Box" v-for="item in arr1"> 
					<div class=" Img_R">
						<img :src="item.imgUrl ">
					</div>
							
						<div class="price">
							<p>{{item.name}} </p>
							 <div class="P_Man">
							 	<span>{{item.price}}</span><em>{{item.originPrice}}</em>
							 	<i><span class="icon icon-cart"></span></i>
							 </div>
						</div>
					 </li>
				</ul>
		        </div>
		      </div>

		      <div id="tab2" class="tab active">
		        <div class="content-block">
		          	<ul>
					<li class="Box" v-for="item in arr2"> 
						<div class="Img_R">
							<img :src="item.imgUrl" >	
						</div>
					</li>
				</ul>

		        </div>
		        </div>
		      </div>
		      <div id="tab3" class="tab active">
		        <div class="content-block">
		          <div class="content-block">
		           
		          	<ul>
					<li><div class="Box ">
						<div class="Img_R">
							<a href="###"></a>
						</div>
						<div class="price">
							<p>PAPA RECIPE 春雨蜂蜜面膜 10片</p>
							 
							 <div class="P_Man">
							 	<span>$95.00</span><em>$149.00</em>
							 	<i><span class="icon icon-cart"></span></i>
							 </div>
						</div>
					</div></li>

					<li><div class="Box ">
						<div class="Img_R">
							<a href="###"></a>
						</div>
						<div class="price">
							<p>PAPA RECIPE 春雨蜂蜜面膜 10片</p>
							 
							 <div class="P_Man">
							 	<span>$95.00</span><em>$149.00</em>
							 	<i><span class="icon icon-cart"></span></i>
							 </div>
						</div>
					</div></li>
					<li><div class="Box">
						<div class="Img_R">
							<a href="###"></a>
						</div>
						<div class="price">
							<p>PAPA RECIPE 春雨蜂蜜面膜 10片</p>
							 
							 <div class="P_Man">
							 	<span>$95.00</span><em>$149.00</em>
							 	<i><span class="icon icon-cart"></span></i>
							 </div>
						</div>
					</div></li>
					<li><div class="Box">
						<div class="Img_R">
							<a href="###"></a>
						</div>
						<div class="price">
							<p>PAPA RECIPE 春雨蜂蜜面膜 10片</p>
							 
							 <div class="P_Man">
							 	<span>$95.00</span><em>$149.00</em>
							 	<i><span class="icon icon-cart"></span></i>
							 </div>
						</div>
					</div></li>
					<li><div class="Box">
						<div class="Img_R">
							<a href="###"></a>
						</div>
						<div class="price">
							<p>PAPA RECIPE 春雨蜂蜜面膜 10片</p>
							 
							 <div class="P_Man">
							 	<span>$95.00</span><em>$149.00</em>
							 	<i><span class="icon icon-cart"></span></i>
							 </div>
						</div>
					</div></li>
					<li><div class="Box">
						<div class="Img_R">
							<a href="###"></a>
						</div>
						<div class="price">
							<p>PAPA RECIPE 春雨蜂蜜面膜 10片</p>
							 
							 <div class="P_Man">
							 	<span>$95.00</span><em>$149.00</em>
							 	<i><span class="icon icon-cart"></span></i>

							 </div>
						</div>
					</div></li>
				</ul>

		        </div>
		        </div>
		      </div>
		       <div id="tab4" class="tab">
		        <div class="content-block">
		          <p></p>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
</template>

<script>
import Vue from 'vue'
	export default{
	name:'GoodsTab',
	data(){
		return{
			arr1:""
		}
	},
	created(){
			Vue.axios.get("../static/json/list.json").then((res) =>{
				console.log(res.data.data.groupList[0].duration[0].productList)
				 return res.data.data 
				 
			}).then((data)=>{
				 
				this.arr1 =data.groupList[0].duration[0].productList;
				this.arr2 =data.groupList[1].duration[1].productList;
			})
		}


}
</script>
<style scoped>


	p{
		margin: 0;
		padding: 0;
	}ㅇ
	em{
		font-style: normal;
		text-decoration:line-through;
	}
	.content{
		top: 9rem;
	}
	.Box{
		position: relative;
		margin-top: 1.5rem;
	}
	.Img_R{
		position: absolute;
		left: 0;
		top: 0;
		width: 5rem;
		height: 5rem;
		background: #f00;
		border-radius: .5rem;
	}
	.Img_R img{
		width: 100%;
		height: 100%;
	}
	.content-block{
		margin: .2rem;
		padding: 0;
		margin-top: 3rem;
	}
	.price{
		position: absolute;
		left: 6rem;
		border-bottom: .02rem solid #F2F2F2;
	}
	.price .P_Man{
		margin-top: 1.5rem;
	}
	ul li{
		list-style: none; 
		margin-bottom:5rem;
		height: 1rem;
	}
	.buttons-tab{
	    position: fixed;
	    width: 100vw;
	    z-index: 10;
	}
	.P_Man i{
		display: inline-block;
		width: 1.6rem;
		height:1.6rem;
		border: .02rem solid #b6b6b6;
		border-radius: 50%;
		text-align: center;
		line-height: 1.6rem;
		color: #fff;
		font-weight: bold;
		background: #FF6987;
		margin-left: 1.5rem;
		margin-bottom: .3rem;
	}
</style>