import axios from 'axios'

const BASE = 'https://www.microoak.cn/'
export const GetUserInfo = (phone, integrate) => {
  return axios.get(BASE + 'mshop/v1/users/' + sessionStorage.oid)
}
export const GetIntegrate = (phone, integrate) => {
  return axios.get(BASE + 'wx/integral/getIngegralSum/' + sessionStorage.oid)
}
export const RegPhone = (phone, integrate) => {
  return axios.get(`${BASE}/mshop/v1/phones/money/valid?num=${phone}&money=${integrate}`)
}
export const PostPhones = (params) => {
  return axios.post(`${BASE}/mshop/v1/pub/phones`, params)
}
export const PutPhones = (params) => {
  return axios.put(`${BASE}/mshop/v1/phones/money/recharge/point`, {
    data: params
  })
}
// 订单列表  充值记录
export const RechargeList = (id) => {
  return axios.get(`${BASE}/mshop/v1/pub/phones?user_id=${id}&_s=50&_p=0&_o=ctime de`)
}

