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
				 
				 return res.data.data 
				 
			}).then((data)=>{
				 console.log( '❤帅帅超数据获取成功❤')
				 
			})
		}

	}	
</script>

<style scoped> 
 
</style>