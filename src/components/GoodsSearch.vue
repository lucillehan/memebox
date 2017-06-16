<template>
<div class="ListBox">
<div class="bar bar-header-secondary">
<span class="icon icon-left"></span>
		  <div class="searchbar">
		    <div class="search-input">
		      <label class="icon icon-search" for="search"></label>
		      <input type="search" id='search' />
		    </div>
		  </div>

<a href="###" id="txt">搜索</a>
		</div>	
</div>
 	

</template>

<script>
	export default{
		name:'GoodsSearch',
	}	
</script>

<style scoped> 
body{
	/*font-size: 20px!important;	 */
}
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
	 	background: #F2F2F2;	
	 }
	 #txt{margin-top:.7rem; font-size: .7rem;color: #FF5B7C;}
	 .searchbar{
	 	height: 1.9rem;
	 }
	 
	  
</style>