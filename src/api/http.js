import axios from 'axios'
const BASE_URL = 'http://localhost:3000'
// 配置
axios.defaults.baseURL = BASE_URL
// 配置响应拦截器
axios.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    return Promise.reject(error)
  }
)
export default axios
