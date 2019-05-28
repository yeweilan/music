/**
 * axios封装
 * 请求拦截, 响应拦截, 错误提示
 **/

import axios from 'axios'
import router from '../router'
import qs from 'querystring'
import initStore from '../store'
const store = initStore();
/**
 * 跳转登录页
 * 携带当前页面路由, 以期在登录页面完成登录后返回当前页面
 */

const toLogin = () => {
    router.replace({
        path: '/login'
    })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */

const errorHandle = (status, other) => {
    switch (status) {
        case 401:

            toLogin();
            break;
        case 403:
            localStorage.removeItem('token');
            store.dispatch('setTokenAction', null)
            setTimeout(() => {
                toLogin();
            }, 2000);
            break;
        case 404:
            console.log("请求的资源不存在");
            break;
        default:
            console.log(other);
            break;
    }
}
//创建axios实例
var instance = axios.create({
    timeout: 5000
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.common['Authorization'] = store.getters.confirmToken; // token在vuex
instance.interceptors.request.use(function (config) {
    // 这里加token也可以
    if (config.method === "post") {
        config.data = qs.stringify(config.data);
    }
    const token =  store.state.token;
    if(token){
        config.headers.Authorization = token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
}
);

// 响应拦截
instance.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            console.log("断网了");
        }
    }
);

export default instance