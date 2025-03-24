import axios from 'axios'
export const GET = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params}).then(res => {
      resolve(res)
    })
  })
}
export const POST = (url, data, headers, body) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, { headers: headers }).then(res => {
      resolve(res)
    })
  })
}
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
  	response.test = 1
  	console.log(response)
    // 对响应数据做些什么
    return response.data;
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);