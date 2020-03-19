import axios from 'axios'
import { message } from 'antd';

const BASE_URL = 'http://192.168.20.116:8089'

const monitorMessage = msg => {
    return message.error(msg)
} 

const toLogin = () => {
    window.location.href = '/login';
 }
   
const errorHandle = (status) => {
    // 状态码判断
    switch (status) {
        //未登录状态
    case 401:
        toLogin()
        break
    case 403:
        // 403 token过期
        // 清除token并跳转登录页
        monitorMessage('403: 登录过期，请重新登录');
        localStorage.removeItem('token');
        setTimeout(() => {
            toLogin();
        }, 1000);
        break;
    case 404:
        monitorMessage('404: 请求资源未找到!')
        break
    case 500:
        monitorMessage('500: 服务器加载失败!')
        break
    default:
        monitorMessage('其他错误信息!')
    }
}

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        // 将 token 添加到请求头
        // 去localStorage里取 token 
        const token = localStorage.getItem('token') 
        debugger
        token && (config.headers.Authorization = 'Basic ' + token )
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        console.log(error)
        const { response } = error;
        debugger
        if (response) {
            // 相应错误处理: token 过期， 无权限访问， 路径不存在， 服务器问题等
            errorHandle(response.status, response.data.error);
            return Promise.reject(response);
        } else {
            return Promise.reject(error)
        }
        
  
        
    }
)

export default instance
