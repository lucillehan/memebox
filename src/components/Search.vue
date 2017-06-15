<template>
<div class="ListBox">
<div class="bar bar-header-secondary">
		  <div class="searchbar">
		    <a class="searchbar-cancel">取消</a>
		    <div class="search-input">
		      <label class="icon icon-search" for="search"></label>
		      <input type="search" id='search' v-model="val" @keyup.enter="send"  placeholder='输入关键字...'/>
		    </div>
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
				val:''
			}
		},
		methods:{
			send(){
				console.log(this.val)
				let url = `/global/search?filter=1&order=1&q=${this.val}&pageIndex=1`
				Vue.axios.get(url).then(function(res){
					console.log(res)
					return res
				}).then((data)=>{
					// console.log(data)
					// this.ban = data[0].items;
					// this.menu = data;
					
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
	 	top: 1rem;
	 }
	  
</style>