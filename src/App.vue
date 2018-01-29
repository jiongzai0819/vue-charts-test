<template>
  <div class="tac c">
    <Nav/>
    <div class="app-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  export default {
    name: 'app',
    components:{
      Nav
    }
  }

</script>
<style>
  html,body{
    height: 100%;
  }
  .tac{
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .app-content{
    width: 85%;
    height: 100%;
    min-width: 1064px;
    position: fixed;
    top: 0;
    left: 15%;
    background-color: #f0f0f0;
    overflow-y: scroll;
  }
  .c{
    zoom: 1;
  }
  .c:before,
  .c:after{
    content: '';
    display: table;
  }
  .c:after{
    clear: both;
  }
</style>
