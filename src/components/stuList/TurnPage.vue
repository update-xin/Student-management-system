<template>
  <ul id="turn-page">
    <li class="prev-page" @click="turnpage('prev')">上一页</li>
    <template v-if="totalPage < 8">
      <li
        v-for="i in totalPage"
        :key="i"
        :class="{ active: i === nowPage }"
        @click="turnpage(i)"
      >
        {{ i }}
      </li>
    </template>
    <template v-else>
      <template v-if="nowPage <= 4">
        <li
          v-for="i in 6"
          :key="i"
          :class="{ active: i === nowPage }"
          @click="turnpage(i)"
        >
          {{ i }}
        </li>
      </template>
      <template v-if="nowPage > 4">
        <li @click="turnpage(1)">1</li>
        <li @click="turnpage(nowPage - 5)">...</li>
      </template>
      <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
        <li
          v-for="i in 5"
          :key="nowPage - 3 + i"
          :class="{ active: i == 3 }"
          @click="turnpage(nowPage - 3 + i)"
        >
          {{ nowPage - 3 + i }}
        </li>
      </template>
      <template v-if="nowPage <= totalPage - 4">
        <li @click="turnpage(nowPage + 5)">...</li>
        <li @click="turnpage(totalPage)">{{ totalPage }}</li>
      </template>
      <template v-if="nowPage > totalPage - 4">
        <li
          v-for="i in 6"
          :key="totalPage - 6 + i"
          :class="{ active: totalPage - 6 + i == nowPage }"
          @click="turnpage(totalPage - 6 + i)"
        >
          {{ totalPage - 6 + i }}
        </li>
      </template>
    </template>
    <li class="next-page" @click="turnpage('next')">下一页</li>
  </ul>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  props: {
    nowPage: {
      type: Number,
      default: 2,
    },
    totalPage: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      np: null,
    };
  },
  computed:{
    ...mapState(['searchValue'])
  },
  methods: {
    ...mapMutations(["setNowPage"]),
    ...mapActions(["findByPage", "searchStu"]),
    turnpage(page) {
      if (page === "prev") {
        if (this.nowPage <= 1) {
          return;
        }
        this.np = this.nowPage - 1;
      } else if (page === "next") {
        if (this.nowPage >= this.totalPage) {
          return;
        }
        this.np = this.nowPage + 1;
      } else {
        if (page <= 1) {
          this.np = 1;
        } else if (page >= this.totalPage) {
          this.np = this.totalPage;
        } else {
          this.np = page;
        }
      }
      this.setNowPage(this.np);
      console.log(this.searchValue)
      if (this.searchValue) {
        this.searchStu(this.np);
      } else {
        this.findByPage(this.np);
      }
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #409eff;
  color: #fff;
  font-weight: 600;
}
</style>