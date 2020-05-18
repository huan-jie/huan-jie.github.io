import config from '@/config'
const { title } = config

export const getRouteTitleHandled = (route) => {
    const router = { ...route }
    const meta = { ...route.meta }
    let title = ''

    if (meta.title) {
        if (typeof meta.title === 'function') {
            meta.__titleIsFunction__ = true
            title = meta.title(router)
        } else {
            title = meta.title
        }
    }

    meta.title = title
    router.meta = meta

    return router
}

export const showTitle = (item, vm) => {
    let { title } = item.meta

    if (!title) {
        return
    }

    title = (item.meta && item.meta.title) || item.name

    return title
}

/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的 title
 * @param {Object} routeItem - 路由对象
 * @param {Object} vm - Vue 示例
 */
export const setTitle = (routeItem, vm) => {
    const handledRoute = getRouteTitleHandled(routeItem)
    const pageTitle = showTitle(handledRoute, vm)
    const resTitle = pageTitle ? `${title} - ${pageTitle}` : title

    window.document.title = resTitle
}
