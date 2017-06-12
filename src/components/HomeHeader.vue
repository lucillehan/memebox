<template>
	<div class="homeheader">
		<mt-swipe :auto="4000">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
import jsonp from 'jsonp';
// url="https://app.cn.memebox.com/h5/view/index?type=1&isNew=1"
	export default{
		name:'homeheader',
		data(){
			return {
				banImgs:[]
			}
		},
		created(){
			let url = "https://app.cn.memebox.com/h5/view/index?type=1&isNew=1"
			jsonp(url,null,(err,res)=>{
				if(err){
					console.log(err)
				}else{
					console.log(res.data)
				}
			})

			// fetch(url)
			// .then((response)=>response.json())
			// .then((res)=>{
			// 	console.log(res)
			// })
			
		}
	}
</script>

<style>
	.homeheader{
		height: 312px;
	}
</style>