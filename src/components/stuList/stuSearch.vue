<template>
  <div class="search">
        <label for="search-word">关键字搜索:</label>
        <input type="text" id="search-word" v-model="inp" />&nbsp;
        <button id="search-submit" @click="search">搜索</button>
      </div>
</template>

<script>
import { mapMutations,mapActions } from 'vuex'
export default {
  data(){
    return{
      inp:''
    }
  },
  methods:{
    ...mapMutations(['setSearchValue']),
    ...mapActions(['findByPage','searchStu']),
    search(){
      console.log(this.searchValue)
      if(this.inp){
        this.setSearchValue(this.inp);
        this.searchStu(1)
      }else{
        this.setSearchValue('')
        this.findByPage(1)
      }
    }
  }
}
</script>

<style>

</style>