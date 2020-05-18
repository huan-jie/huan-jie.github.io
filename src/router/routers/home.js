export default [
    {
        path: '/',
        name: '_index',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        meta: {
            title: 'home'
        },
        component: () => import('@/views/Home.vue')
    }
]
