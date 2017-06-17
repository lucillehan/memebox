<template>
	<div class="footer">
		<mt-tabbar v-model="selected">
		    <mt-tab-item id="home">
			    	 <router-link to="/">
			        <i class="iconfont icon-shouyeshouye"></i>
			        首页
		        </router-link>
		    </mt-tab-item>



		    <mt-tab-item id="sort">
			    <router-link to="List">
			    	<i class="iconfont icon-fenlei"></i>
				    分类
			    </router-link>
			    
		    </mt-tab-item>
		  
		  

		    <mt-tab-item id="find">
			    <router-link to="FindHeader">
			        <i class="iconfont icon-fun"></i>
			        发现
				</router-link>
		    </mt-tab-item>
		  

		  <mt-tab-item id="cart">
			   <router-link to="Cart">
			   	   <i class="iconfont icon-gouwuche01"></i>
			       购物车
			   </router-link>
		  </mt-tab-item>



		  <mt-tab-item id="mine" >
		    <i class="iconfont icon-xiaolian" @click="toggleLogin"></i>
		   		 我哒
			    <mt-popup v-model="popupVisible" position='bottom'>
	  				<div id="login">
	  					<Login @loginevent="getData"/>
	  				</div>
				</mt-popup>
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import Login from './Login.vue'
	
	export default {
	  name: 'Footer',
	  data(){



	  	return {
	  		
	  		selected:"home",
	  		
	  		popupVisible:false,
	  		
	  	}
	  },
	  mounted(){
	  	// console.log(this)
	  	
	  	
	  },
	  methods:{
			
		  toggleLogin(){
		  	
			this.popupVisible=true;
		  	
		  },

		  getData(data){
		  	
		  	// console.log(data)
		  	
		  	this.popupVisible=data
		  	
		  }
		  
	  },
	  
	  components:{ Login }
		  
	}
</script>


<style scoped>
	.footer{
	  height: .5rem;
	  z-index: 10;
	}
	.footer .mint-tabbar .is-selected{
		color:#FE5173;
	}
	.mint-tab-item{
		padding: 0;
		color: #b6b6b6;

	}
	.mint-tab-item-label i{
		font-size: 27px;
		display: block;
		margin: 7px;
	}

	ul li  a span{
		display: block;
		font-size: 12px;
	}
	.v-modal{
		
		background: #dedede;
		opacity: 1;
	}
	#login{
		width: 100vw;height: 100vh;
		
	}
	.iconfont{
		font-weight: bold;
		 

	}
	 
</style>