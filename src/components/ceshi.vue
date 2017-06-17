<template>
	
<div id="box">
					<div class="page">
				  <header class="bar bar-nav">
				    <h1 class='title'>侧栏</h1>
				  </header>
				  <div class="content">
				    <div class="content-block">
				      <p><a href="#" class="button button-fill open-panel" data-panel='#panel-left-demo'>打开左侧栏</a></p>
				    </div>
				  </div>
				</div>
				<div class="panel-overlay"></div>
				<!-- Left Panel with Reveal effect -->
				<div class="panel panel-left panel-reveal theme-dark" id='panel-left-demo'>
				  <div class="content-block">
				    <p>这是一个侧栏</p>
				    <p>你可以在这里放用户设置页面</p>
				    <p><a href="#" class="close-panel">关闭</a></p>
				  </div>
				  <div class="list-block">
				    <!-- .... -->
				  </div>
				</div>
				<div class="panel panel-right panel-reveal">
				  <div class="content-block">
				    <p>这是一个侧栏</p>
				    <!-- Click on link with "close-panel" class will close panel -->
				    <p><a href="#" class="close-panel">关闭</a></p>
				  </div>
				</div>
</div>

</template>

<script>

	export default{
		name:'ceshi',


	}
	
	  
</script>
<style>
	
</style>