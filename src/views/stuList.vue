<template>
  <div class="student-list" id="student-list">
      <stu-search />
      <stu-table />
      <turn-page
        :totalPage="totalPage"
        :nowPage="nowPage"
       />
      <transition>
          <show-modal v-if="showModal"/>
      </transition>
  </div>
</template>

<script>
import stuSearch from '../components/stuList/stuSearch'
import stuTable from '../components/stuList/stuTable'
import showModal from '../components/stuList/showModel'
import turnPage from '../components/stuList/TurnPage'
import { mapState } from 'vuex'
export default {
    components:{
        stuSearch,
        stuTable,
        showModal,
        turnPage
    },
    computed:{
        ...mapState(['showModal','totalPage','nowPage','searchValue'])
    }
}
</script>

<style>

</style>