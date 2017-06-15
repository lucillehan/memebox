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
		components:{Tab,Search,Footer}

	}	
</script>

<style scoped> 
 
 
</style>