<template>
	<div class="footer">
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="外卖">
		    <img slot="icon" src="">
		    外卖
		  </mt-tab-item>
		  <mt-tab-item id="订单">
		    <img slot="icon" src="">
		    订单
		  </mt-tab-item>
		  <mt-tab-item id="发现">
		    <img slot="icon" src="">
		    发现
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		    <img slot="icon" @click="toggleLogin" src="">
		        我的
		    <mt-popup v-model="popupVisible" position='bottom' v-if="show">
  				<div id="login">
  					<!--<h1>跳转登录</h1>
  					<button @click="close">关闭</button>-->
  					<Login/>
  				</div>
			</mt-popup>
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import Login from './Login.vue'
	
	export default {
	  name: 'footer',
	  data(){
	  	return {
	  		
	  		selected:"外卖",
	  		
	  		popupVisible:false,
	  		
	  		show:true
	  		
	  	}
	  },
	  
	  methods:{
			
		  toggleLogin(){
		  	
		  	console.log("ok");
		  	
		  	this.show=true;
		  	
			this.popupVisible=true;
		  	
		  },
		  
		  close(){
		 	
		  	this.show=false;
		  	
		  }
		  
	  },
	  
	  components:{ Login }
		  
	}
</script>

<style scoped="scoped">
	.footer{
	  height: 50px;
	}
	html{
		font-size: 100px;
	}
	/*ul{
		height: 100%;
		display: flex;
	}
	ul li{
		list-style: none;
		
	}
	ul li  a{
		display: block;
		text-decoration: none;
		color:#AAAAAA;
		width: 100%;
		height: 100%;
	}
	.active{
		color:#FE5173;
	}
	ul li  a i{
		font-size: 27px;
		display: block;
		margin-top: 10px;
	}
	ul li  a span{
		display: block;
		font-size: 12px;
	}*/
	.v-modal{
		
		background: #dedede;
		opacity: 1;
	}
	#login{
		width: 100vw;height: 100vh;
		
	}
</style>