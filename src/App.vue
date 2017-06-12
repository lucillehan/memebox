<template>
   <div id="app">
       <Homeheader/>  
       <router-view></router-view>
       <Footer/>
    </div>
</template>


<script>
  import Footer from './components/footer.vue'
  import Homeheader from "./components/HomeHeader.vue"
  export default {
    name: 'app',
    components:{ Footer, Homeheader }
  }
</script>


<style>
*{
  padding: 0;
  margin:0;
}
html{
  /*font-size: 100px;*/
  
}
html,body{
  height: 100%;
  width: 100%;
}

.mint-swipe{
  height: 135px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100%;
  display: flex;
  flex-flow: column wrap;
}

</style>
