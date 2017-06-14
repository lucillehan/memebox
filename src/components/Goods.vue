<template>

	<div class="Goods">
		<GoodsSearch></GoodsSearch>	
		<GoodsImg></GoodsImg>
		<GoodsTab></GoodsTab>
		 
		
	</div>
	
</template>

<script>
import GoodsImg from './GoodsImg.vue'
import GoodsSearch from './GoodsSearch.vue'
import GoodsTab from './GoodsTab.vue'
export default{
	name:'Goods',
	components:{GoodsImg,GoodsSearch,GoodsTab}
	
	 
}
</script>

<style>
	

</style>