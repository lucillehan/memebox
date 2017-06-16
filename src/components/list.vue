<template>
<div class="ListBox">

		<Search></Search>	
		<Tab></Tab>
		<Footer></Footer>
</div>
 	

</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
import Tab from './Tab.vue'
import Search from './Search.vue'
import Footer from './Footer.vue'
	export default{
		name:'list', 
		components:{Tab,Search,Footer},	
		data(){
			return{
				arr:""
				 
			}
		},
		created(){
			 
			Vue.axios.get("../static/json/GoodsTest.json").then( (res) =>{
				console.log(res.data)
				 return res.data.data 
				 
			}).then((data)=>{
				 console.log( data)
				 
			})
		}

	}	
</script>

<style scoped> 
 
 
</style>