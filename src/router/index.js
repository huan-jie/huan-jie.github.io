import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'
import { setTitle } from '@/libs/util.js'
// import config from '@/config'
// const { homeName } = config

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routers,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    // 可在此做各种权限设置
    next()
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
    setTitle(to, Vue)
})

export default router
