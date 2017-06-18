<template>
	
<div class="Sup_Box">
	
<header class="bar bar-nav">
  <h1 class="title">meimeix</h1>
</header>
<div class="Centent">
	
 
  <div class="card facebook-card">
    <div class="card-header no-border">
      <div class="facebook-avatar"><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2973981244,4206691622&fm=26&gp=0.jpg" width="34" height="34"></div>
      <div class="facebook-name">Saber</div>
      <div class="facebook-date">星期一 3:47pm</div>
    </div>
    <div class="card-content"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497609761124&di=c60462a4ed155304ab54757277f76753&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3D18733f056f63f6241c5d390bb744eb32%2Fc45c7b1ed21b0ef4f1b92c62d9c451da80cb3ed3.jpg" width="100%"></div>
    <div class="card-footer no-border">
      <a href="#" class="link">赞</a>
      <a href="#" class="link">评论</a>
      <a href="#" class="link">分享</a>
    </div>
<div class="card">
    <div class="card-header">新的公布:</div>
    <div class="card-content">
      <div class="list-block media-list">
        <ul>
          <li class="item-content">
            <div class="item-media">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498204945&di=472fabb10775b139bb46a97126af2113&imgtype=jpg&er=1&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fdbb44aed2e738bd443849c87a78b87d6267ff9db.jpg" width="44">
            </div>
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">BlueSky</div>
              </div>
              <div class="item-subtitle">安静心思</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
     <div class="card-footer">
      <span>2015/01/15</span>
      <span>5 评论</span>
    </div>
</div>
</div>

 <div class="card facebook-card">
    <div class="card-header no-border">
      <div class="facebook-avatar"><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=787455759,2210765473&fm=26&gp=0.jpg" width="34" height="34"></div>
      <div class="facebook-name">夕阳</div>
      <div class="facebook-date">星期三 13:57pm</div>
    </div>
    <div class="card-content"><img src="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/7e3e6709c93d70cfb09cadd5fadcd100bba12b87.jpg" width="100%"></div>
    <div class="card-footer no-border">
      <a href="#" class="link">赞</a>
      <a href="#" class="link">评论</a>
      <a href="#" class="link">分享</a>
    </div>
	

<div class="card">
    <div class="card-header">新的公布:</div>
    <div class="card-content">
      <div class="list-block media-list">
        <ul>
          <li class="item-content">
            <div class="item-media">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1497599749&di=1bc4925af4877bd332556f6f00a337a1&src=http://img3.3lian.com/2013/s1/38/d/5.jpg" width="44">
            </div>
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">标题</div>
              </div>
              <div class="item-subtitle">子标题</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-footer">
      <span>2015/01/15</span>
      <span>5 评论</span>
    </div>
  </div>            
</div>

 <div class="card facebook-card">
    <div class="card-header no-border">
      <div class="facebook-avatar"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="34" height="34"></div>
      <div class="facebook-name">Master Lu</div>
      <div class="facebook-date">星期六 23:02pm</div>
    </div>
    <div class="card-content"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="100%"></div>
    <div class="card-footer no-border">
      <a href="#" class="link">赞</a>
      <a href="#" class="link">评论</a>
      <a href="#" class="link">分享</a>
    </div>




</div>

</div>





	<Footer></Footer>
</div> 

</template>	
	
<script>
	 
import Footer from './Footer.vue'
 
	export default{
		name:'home',
		components:{  Footer }
	 
	}
	


</script>

<style>
	 
      .infinite-scroll-preloader {
        margin-top:-20px;
      }
      .Centent{
      	margin-top:3rem; 
      }
      .facebook-card .facebook-name{
        height: 1.5rem;
      }
      .Sup_Box{
        overflow-y: scroll;
      }
      .Sup_Box .bar-nav{
        position: fixed;
      }
</style>