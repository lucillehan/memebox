<template>
<div>
	<TestHeader></TestHeader>
	<Details></Details>
</div>
	
</template>

<script type="text/javascript">
import Vue from 'vue'
import Details from './Details.vue'
import  TestHeader from './TestHeader.vue'
	export default{
		name:'Test',
		components:{TestHeader,Details},
		data(){
			return{
				arr1:"",
				arr2:""
			}
		} 
	}

</script>

<style>
	
</style>
