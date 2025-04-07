import axios from 'axios'
import qs from 'qs'
// import router from '@/router'
import { Message, MessageBox } from 'element-ui'
import { error } from 'jquery'
// import store from '@/store'
// import { exitCasLogin } from '@/router/casValidate'
// import { logout } from '@/api/userApi'
// 定义请求失败的状态码
const responeCode = {
  NO_LOGIN: 1100,
  LOGIN_EXPIRED: 1101
}

const getToken = () => {
  // return store.state.global.casToken
  return sessionStorage.getItem('casToken')
}

// 请求信息输出开关 localStorage.debug = 'true'
const isDebugging = () => localStorage.debug === 'true'

const request = axios.create({
  // baseURL: 'http://localhost:3000/api', // base url

  baseURL: 'http://47.115.78.150:7000', // base url

  method: 'post',
  headers: {
    'Content-type': 'application/json'
  }
})

request.interceptors.request.use(
  config => {
    // eslint-disable-next-line no-debugger
    // debugger
    console.log(config)
    // post方法，用qs转换参数
    if (config.data && config.qs) {
      config.data = qs.stringify(config.data)
    }
    // 使用form-data
    if (config.ContentType) {
      console.error(config.ContentType);
      // config.headers['Content-type'] = 'application/x-www-form-urlencoded'
      config.headers['Content-type'] = config.ContentType
    }
    if (config.Accept) {
      console.error(config.Accept);
      config.headers['Accept'] = config.Accept
    }
    // 不需要验证，不带Authorization头部
    // if (!config.noAuth) {
    //   config.headers.Authorization = 'Bearer ' + getToken()
    // }
    // 跨域需要带cookie
    if (config.corsCookie) {
      config.withCredentials = true
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    if (isDebugging()) {
      const config = response.config
      const url = config.url
      console.log(
        `%c${url}\n%c${JSON.stringify(res)}`,
        'color:blue',
        'color:green'
      )
    }
    if (response.status !== 200) {
      return Promise.reject(new Error('error'))
    } else {
      // 状态码判断与修改
      // if (res.code === 1) {
      //   // judgeApiCode(res)
      //   Message.error('操作失败')
      // }
      switch (res.code) {
        case responeCode.NO_LOGIN:
          // exitCasLogin()
          break
        case responeCode.LOGIN_EXPIRED:
          console.warn(res.message)
          MessageBox.alert('系统登录已超时，请重新登录!', {
            confirmButtonText: '确定',
            callback: action => {
              // exitCasLogin()
            }
          })
          break
        default:
          return res
      }
    }
  },
  error => {
    if (isDebugging()) {
      const config = error.config
      const url = config.url
      console.log(`%c${url}\n%c${error}`, 'color:blue', 'color:red')
    }
    if (error.response) {
      switch (error.response.status) {
        case 401:
          Message.error('无获取数据资源权限')
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  }
)

// 状态码判断与修改，为了兼容旧接口使用status状态字段
// function judgeApiCode (res) {
//   // const prpo = 'status'
//   res.status = 1
// }

export default request
