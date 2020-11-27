<template>
    <div class="add-student " id="add-student">
      <form action="#" id="add-student-form" class="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input type="text" name="name" autocomplete="off"  v-model="user.name" />
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <input type="radio" name="sex"  value="0"  v-model="user.sex" />
          <span>男</span>
          <input type="radio" name="sex"  value="1"  v-model="user.sex" />
          <span>女</span>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" id="sNo" name="sNo" v-model="user.sNo" />
        </div>
        <div>
          <label for="email">邮箱</label>
          <input type="text" id="email" name="email" v-model="user.email" />
        </div>
        <div>
          <label for="birth">出生年</label>
          <input type="text" id="birth" name="birth"  v-model="user.birth" />
        </div>
        <div>
          <label for="phone">手机号</label>
          <input type="text" id="phone" name="phone" v-model="user.phone" />
        </div>
        <div>
          <label for="address">住址</label>
          <input type="text" id="address" name="address" v-model="user.address" />
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn"  @click="commit"/>
          <input type="button" value="重置" class="btn" @click="reset"/>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  data(){
    return{
      user:{
        name: "",
        sex: "0",
        email: "",
        birth: "",
        phone: "",
        address: "",
        sNo: ""
      }
    }
  },
  methods:{
    async commit(){
      const { msg,status } = await this.$api.addStu(this.user);
      if(status === 'fail'){
        this.$toast(msg,'err')
      }else{
        this.$toast(msg,'suc')
        const flag = window.confirm('是否继续添加')
        if(!flag){
          this.$router.push('/stuList')
        }else{
          // this.reset()
        }
      }
    },
    reset(){
      this.user = {
        name: "",
        sex: "0",
        email: "",
        birth: "",
        phone: "",
        address: "",
        sNo: ""
      }
    }
  }
}
</script>

<style>

</style>