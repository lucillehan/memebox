<template>
<div>
	<TestHeader></TestHeader>
	<ul>
					<li v-for="item in arr1">
						<img :src="item.imgUrl" >
					</li>
					<li v-for="item in arr2">
						<img :src="item.imgUrl" >
					</li>
				</ul>
</div>
	
</template>

<script type="text/javascript">
import Vue from 'vue'
import  TestHeader from './TestHeader.vue'
	export default{
		name:'Test',
		components:{TestHeader},
		data(){
			return{
				arr1:"",
				arr2:""
			}
		},
		created(){
			Vue.axios.get("../static/json/list.json").then( (res) =>{
				console.log(res.data.data.groupList[0].duration[0].productList)
				 return res.data.data 
				 
			}).then((data)=>{
				 
				this.arr1 =data.groupList[0].duration[0].productList;
				this.arr2 =data.groupList[1].duration[1].productList;
			})
		}
	}

</script>

<style>
	
</style>
