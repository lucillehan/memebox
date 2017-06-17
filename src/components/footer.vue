<template>
	<div class="footer">
		<mt-tabbar v-model="selected">
			<!-- <router-link to="/"> -->
			  <mt-tab-item id="home">
			  	
				  <i class="iconfont icon-shouye"></i>
				    首页
				
			  </mt-tab-item>
			<!-- </router-link> -->

		  <!-- <router-link to="/List"> -->
			  <mt-tab-item id="sort">
				    <i class="iconfont icon-fenlei"></i>
				    分类
			  </mt-tab-item>
		  <!-- </router-link> -->
		  

		  <mt-tab-item id="find">
		    <i class="iconfont icon-faxian"></i>
		    发现
		  </mt-tab-item>
		  
		  <mt-tab-item id="cart">
		    <i class="iconfont icon-gouwuche"></i>
		    购物车
		  </mt-tab-item>
		  <mt-tab-item id="mine" >
		    <i class="iconfont icon-xiaolian" @click="toggle"></i>
		   		 我哒
			    <mt-popup v-model="popupVisible" position='bottom' v-if="showlogin">
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
	  		
	  		showlogin:true
	  	
	  		
	  	}
	  },
	  mounted(){
	 
	  	
	  },
	  methods:{
			
		  toggle(){
		  	
		  	if(localStorage.username){
		  		
		  		this.showlogin=false;
		  		
		  		this.$router.push('/user');
		  		
		  	}else{
		  		
		  		this.showlogin=true;
				
				this.popupVisible=true;
		  		
		  	}
		  	
			this.popupVisible=true;
		  	
		  },

		  getData(data){
		  	
		  	console.log(data)
		  	
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