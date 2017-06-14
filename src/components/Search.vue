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

</div>
 	

</template>

<script>
	export default{
		name:'Search',
	}	
</script>

<style> 
body{
	font-size: 20px!important;	 
}
	.home{
		flex:1;
	}
	 .bar-header-secondary {
	 	top: 1rem;
	 }
	  
</style>