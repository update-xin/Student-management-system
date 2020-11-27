<template>
  <table border="0">
    <!-- 表头区域 -->
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <!-- 表格内容 -->
    <tbody id="student-body">
      <tr v-for="stu in list" :key="stu.sNo">
        <td>{{ stu.sNo }}</td>
        <td>{{ stu.name }}</td>
        <td>{{ stu.sex == '0'? '男' : '女' }}</td>
        <td>{{ stu.email }}</td>
        <td>{{ new Date().getFullYear() - stu.birth }}</td>
        <td>{{ stu.phone }}</td>
        <td>{{ stu.address }}</td>
        <td>
          <button class="btn edit" @click="edit(stu)">编辑</button>&nbsp;
          <button class="btn del" @click="del(stu.sNo)"> 删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapMutations,mapActions,mapState } from 'vuex'
export default {
    methods:{
        edit(stu){
            this.setModal(true)
            this.setActiveStu(stu)
        },
        del(sNo){
          const flag = window.confirm('是否确认删除')
          if(flag){
            this.delStu(sNo)
          }
        },
        ...mapMutations(['setModal','setActiveStu']),
        ...mapActions(['findByPage','delStu'])
    },
    created(){
        this.findByPage(1);
    },
    computed:{
        ...mapState(['list'])
    }
}
</script>

<style>

</style>