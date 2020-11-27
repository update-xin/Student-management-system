<template>
  <div id="app" class="wrapper">
     <sys-header></sys-header>
     <left-menu></left-menu>
     <div class="right-content">
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
import sysHeader from './components/sysHeader';
import leftMenu from './components/leftMenu'
export default {
  components:{
    leftMenu,
    sysHeader
  }
}
</script>

<style>
@import url(./index.css);
</style>
