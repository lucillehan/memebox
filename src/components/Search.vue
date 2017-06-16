<template>
 
<div class="bar bar-header-secondary">

		  <div class="searchbar">
  
		    <a class="searchbar-cancel">取消</a>
 
		    <div class="search-input">

		      <label class="icon icon-search" for="search"></label>
		      <input type="search" id='search' v-model="val" @keyup.enter="send"  placeholder='输入关键字...'/>
		    </div>
		  </div>
		 

</div>
 	

</template>

<script>
import Vue from 'vue'
	export default{
		name:'Search',
		data(){
			return {
				val:'',
				results:''
			}
		},
		methods:{
			send(){
				let url = `/global/search?filter=1&order=1&q=${this.val}&pageIndex=1`
				Vue.axios.get(url).then(function(res){
					return res.data.product
				}).then((res)=>{
					this.$emit("sendData",res)
				})
			}
		}
	}	
</script>

<style> 
/*body{
	font-size: 20px!important;	 
}*/
	.home{
		flex:1;
	}
	 .bar-header-secondary {
	 	top: .5rem;
	 }
	 .bar .searchbar .search-input input{
	 	background: #EEEEEE;
	 }
	 .bar .searchbar{
	 	background: #fff;
	 }
	  
</style>