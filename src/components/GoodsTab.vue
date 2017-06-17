<template>
	<div class="content">
		  <div class="buttons-tab">
		    <a href="#tab1" class="tab-link active button">综合</a>
		    <a href="#tab2" class="tab-link button">销量</a>
		    <a href="#tab3" class="tab-link button">价格</a>
		     <a href="#tab4" class="tab-link button">筛选</a>
		  </div>
			<div class="content-block">
			    <div class="tabs">
			      <div id="tab1" class="tab active">
			        <div class="content-block">
			         <ul>
						<li class="Box"	 v-for="item in arr1"> 
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
			      <div id="tab2" class="tab">
			        <div class="content-block">
			         <ul>
						<li class="Box"	 v-for="item in arr2"> 
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
			      <div id="tab3" class="tab">
			        <div class="content-block">
			          <ul>
						<li class="Box"	 v-for="item in arr3"> 
							<div class=" Img_R">
								<img :src="item.imgUrl ">
							</div>
								
							<div class="price">
								<p>{{item.name}} </p>
								 <div class="P_Man">
								 	 <span>{{item.price }}</span> <em>{{item.originPrice }}</em>
								 	<i><span class="icon icon-cart"></span></i>
								 </div>
							</div>
							</li>
						</ul>
			        </div>
			    </div>
				
				 <div id="tab4" class="tab">
				        <div class="content-block">
				          <ul>
							 <li>
							 筛选毛线，麻溜点回去！！！
							 <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497587745962&di=5bc3ea166f8b5a23c1b1737766559d96&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201104%2F18%2F20110418171052_nkQsy.thumb.700_0.jpg" alt="" class="Img_li">
								</li>
							</ul>
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
			arr1:"",
			arr2:"",
			arr3:""
		}
	},
	created(){
			Vue.axios.get("../static/json/list.json").then((res) =>{
				console.log(res.data.data.groupList[0].duration[0].productList)
				 return res.data.data 
				 
			}).then((data)=>{
				 
				this.arr1 =data.groupList[0].duration[0].productList;
				this.arr2 =data.groupList[1].duration[1].productList;
				this.arr3 =data.groupList[1].duration[2].productList;

			})
		}


}
</script>
<style scoped>


	p{
		margin: 0;
		padding: 0;
	}
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
		width: 60%;
	}
	.price .P_Man{
		margin-top: 1.5rem;

	}
	ul li{
		list-style: none; 
		margin-bottom:5rem;
		height: 1rem;
		position: relative;
		
	}
	.buttons-tab{
	    position: fixed;
	    width: 100vw;
	    z-index: 10;
	}
	.P_Man i{
		position: absolute;
		right: 10%;
		top: 40%;
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
	.Img_li{
		width: 100vw;
		height:40vh;
	}
</style>