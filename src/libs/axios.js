import axios from 'axios'

class HttpRequest {
    constructor (baseUrl = '') {
        this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {

            }
        }
        return config
    }

    destroy (url) {
        delete this.queue[url]
    }

    interceptors (instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(config => {
            const { data, status } = config

            this.destroy(url)
            // 可以在此对响应内容做统一处理
            return { data, status }
        }, error => {
            let errorInfo = error.response

            this.destroy(url)

            if (!errorInfo) {
                const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
                errorInfo = {
                    statusText,
                    status,
                    request: { responseURL: config.url }
                }
            }
            // 可以在此对响应错误做保存
            return Promise.reject(error)
        })
    }

    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

export default HttpRequest
