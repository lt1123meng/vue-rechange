/**
 * Created by LX on 2017/9/4.
 */
const padLeftZero = (str) => {
  return ('00' + str).substr(str.length)
}
export const formatDate = (date, fmt) => {
  date = new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

export const formatContent = (content) => {
  var width = document.documentElement.clientWidth - 63
  var count = width / 13 * 3
  if (content.length + 20 < count) {
    return {
      more: false,
      content: content,
      format: content
    }
  } else {
    return {
      more: true,
      content: content,
      format: content.substr(0, count - 10) + '...',
      kai: false
    }
  }
}
