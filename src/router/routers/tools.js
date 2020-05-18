export default [
    {
        path: '/marked',
        name: 'marked',
        meta: {
            title: 'markdown 转换'
        },
        component: () => import('@/views/tools/Marked.vue')
    }
]
