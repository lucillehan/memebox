<template>
 
<div class="bar bar-header-secondary">

		  <div class="searchbar se">
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
				// let url = `/global/search?filter=1&order=1&q=${this.val}&pageIndex=1`

				let url = `/global/search?filter=1&order=1&q=${this.val}&pageIndex=1`
				Vue.axios.get(url).then(function(res){
					console.log(res)
					if(res.data.product.length!=0){
						return res.data.product
					}else{
						alert("未搜索到相关数据")
					}
				}).then((res)=>{
						this.$emit("sendData",res)
				})
			}
		}
	}	
</script>

<style> 

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
	  











/*
	 .home{
 		flex:1;
	}
 	 .bar-header-secondary {
 	 	top: .5rem;
 	 	display: flex;
 	 	justify-content:center ;
 	 	background: #fff;
 	 }
 
 	 .bar .searchbar{
 	 	width: 70vw;
 	 	margin: auto;
 	 	background: #F2F2F2;
 	 	border-radius: .3rem;
 	 }
 	 #search{
 	 	    height: 36px;
		    background: #F2F2F2;
		    border: none;
		    margin-left: 43px;	
 	 }
 	 #txt{margin-top:.7rem; font-size: .7rem;color: #FF5B7C;}
 	 .searchbar{
 	 	height: 1.9rem;
 	 }
 	 .searchbar-cancel{
 	 	 position: absolute;
	    right: 70px;
	    top: 20px
 	 }
 	 .bar .se{
 	 	width: 100%;
 	 }
 	    */

	  
</style>