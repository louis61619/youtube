import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Favorites = () => import('views/favorites/Favorites')


//1.安裝插件
Vue.use(VueRouter)


//2.創建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/favorites',
    component: Favorites
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router