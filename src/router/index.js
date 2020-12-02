import Vue from 'vue'
import VueRouter from 'vue-router'
import stuList from '../views/stuList'


Vue.use(VueRouter)

const routes = [
   {
     path:'/stuList',
     component:stuList
   },
   {
     path:'/stuAdd',
     component:()=> import('../views/stuAdd')
   },
   {
     path:'*',
     redirect:'/stuList'
   }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass:'active'
})

export default router
