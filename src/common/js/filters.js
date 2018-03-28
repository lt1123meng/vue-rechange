/**
 * Created by LX on 2017/9/4.
 */
import {formatDate} from './format'

export function getFormatDate(time, type = 'yyyy-MM-dd') {
  let date = new Date(time)
  return formatDate(date, type)
}
export function getformateJSon(data) {
  for (var key in data) {
    var obj = {}
    obj.value = data[key]
    obj.name = key
  }
  return obj
}
export function getformateJSonArr(data) {
  var arr = []
  for (var key in data) {
    var obj = {}
    obj.value = data[key]
    obj.name = key
    arr.push(obj)
  }
  return arr
}
