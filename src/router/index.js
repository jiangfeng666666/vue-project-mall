import Vue from "vue"
import VueRouter from "vue-router"
const Detail = ()=> import ("@/views/detail/detail")
const Home = ()=> import ("@/views/home/Home")
const category = ()=>import ("@/views/category/Category")
const cart = ()=>import ("@/views/cart/Cart")
const profile = ()=>import ("@/views/profile/Profile")
Vue.use(VueRouter)
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:category
    },
    {
        path:'/cart',
        component:cart
    },
    {
        path:'/profile',
        component:profile
    },
    {
        path:'/detail/:iid',
        component:Detail
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router