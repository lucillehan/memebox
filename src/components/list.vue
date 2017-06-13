<template>
<div class="ListBox">
<div class="bar bar-header-secondary">
		  <div class="searchbar">
		    <a class="searchbar-cancel">取消</a>
		    <div class="search-input">
		      <label class="icon icon-search" for="search"></label>
		      <input type="search" id='search' placeholder='输入关键字...'/>
		    </div>
		  </div>
		</div>	
		<Tab></Tab>
</div>
 	

</template>

<script>
import Tab from './Tab.vue'
	export default{
		name:'list',
		components:{Tab},
		beforeCreate(){
			 

		}
	}	
</script>

<style scoped> 
body{
	font-size: 20px!important;
	 
	 
}
	.home{
		flex:1;
	}
	 .bar-header-secondary {
	 	top: 1rem;
	 }
	  .content{
		min-height: 200vh;
	    overflow-y: scroll;
	 }
	 .buttons-tab .button.active{
	 	color: #FF5073;
    	border-color: #FF5073;
	 }
	 .buttons-tab{
	 	height: 1.9rem;
	 }
	
	 .content-block{
	 	padding: 0 .35rem;
	 	margin: 2.5rem 0;
	 	min-height: 200vh;
	    overflow-y: scroll;
	 }
	  .content-block p{
	 	float: left;
	 }
	 .ListBox{
	 	flex: 1;
	 }
	 .bar-header-secondary~.content {
	 	top: 3.2rem;
	 }
	 p{
	 	margin: .5rem 0;
	 }
	.list-group-title{
		z-index: 5;
	}
	.content{
		background: #fff;
	}
	.search-input .icon {
		color: #999999;
	}
	.bar .searchbar{
		background: #fff;
	}
	.bar .searchbar .search-input input{
		background: #EEEEEE;
	}
	.list-group-title{
		color: #202020;
	}
	.buttons-tab{
		position: fixed;
		width: 100vw;
		z-index: 20;
	}
</style>