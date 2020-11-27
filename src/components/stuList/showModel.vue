<template>
  <div class="modal" id="modal">
    <div class="mask" @click="setModal(false)"></div>
    <div class="modal-content">
      <h2>编辑信息</h2>
      <form action="#" id="edit-student-form" class="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input
            type="text"
            name="name"
            autocomplete="off"
            :value="activeStu.name"
            @input="edit('name', $event.target.value)"
            ref="name"
          />
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <input
            type="radio"
            name="sex"
            value="0"
            @change="edit('sex', 0)"
            :checked="activeStu.sex === 0"
            ref="sex"
          />
          <span>男</span>
          <input
            type="radio"
            name="sex"
            value="1"
            @change="edit('sex', 1)"
            :checked="activeStu.sex === 1"
          />
          <span>女</span>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" name="sNo" :value="activeStu.sNo" readonly />
        </div>
        <div>
          <label for="email">邮箱</label>
          <input
            type="text"
            name="email"
            :value="activeStu.email"
            @input="edit('email', $event.target.value)"
            ref="email"
          />
        </div>
        <div>
          <label for="birth">出生年</label>
          <input
            type="text"
            name="birth"
            :value="activeStu.birth"
            @input="edit('birth', $event.target.value)"
            ref="birth"
          />
        </div>
        <div>
          <label for="phone">手机号</label>
          <input
            type="text"
            name="phone"
            :value="activeStu.phone"
            @input="edit('phone', $event.target.value)"
            ref="phone"
          />
        </div>
        <div>
          <label for="address">住址</label>
          <input
            type="text"
            name="address"
            :value="activeStu.address"
            @input="edit('address', $event.target.value)"
            ref="address"
          />
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn" @click="commit" />
          <input type="button" value="重置" class="btn" @click="reset" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      stu: {},
    };
  },
  methods: {
    edit(key, value) {
      this.stu[key] = value;
    },
    reset() {
      for (let prop in this.$refs) {
        if (prop === "sex") {
          continue;
        }
        this.$refs[prop].value = "";
      }
      this.$refs.sex.checked = true;
    },
    async commit() {
      const user = Object.assign({}, this.activeStu, this.stu);
      const { msg, status } = await this.$api.updateStu(user);
      if (status == "success") {
        this.$toast(msg,"suc");
        this.changeActive(this.stu);
        this.setModal(false);
      } else {
        this.$toast(msg,"err");
      }
    },
    ...mapMutations(["setModal", "changeActive"]),
  },
  computed: {
    ...mapState(["activeStu"]),
  },
};
</script>

<style>
</style>