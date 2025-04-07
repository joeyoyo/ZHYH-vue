/**
 * 首页api
 */
import request from '../utils/request'

const customConfig = {
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
}

/**
 * 首页菜单接口
 *
 * @returns
 */
function getMenuList () {
  return request({
    method: 'get',
    // url: 'http://localhost:8080/api/SysMenuController/getMenuList'
    url: '/SysMenuController/getMenuList'

  })
}

/**
 * 分页新闻接口
 *
 * @returns
 */
function queryMenuInfo (data) {
  let str = ""
  if(data.menuName){
     str = "&menuName=" + data.menuName
  }
  return request({
    method: 'get',
    // url: 'http://localhost:8080/api/SysNoticeController/queryMenuInfo' + "?parentMenuName=" + data.parentMenuName + str + "&limit=" + data.limit + "&page=" + data.page,
    url: '/SysNoticeController/queryMenuInfo' + "?parentMenuName=" + data.parentMenuName + str + "&limit=" + data.limit + "&page=" + data.page,
  })
}


/**
 * 最新资讯接口
 *
 * @returns
 */
function queryNewMenuInfo (data) {
  return request({
    method: 'get',
    // url: 'http://localhost:8080/api/SysNoticeController/queryMenuInfo' + "?limit=" + data.limit + "&page=" + data.page,
    url: '/SysNoticeController/queryMenuInfo' + "?limit=" + data.limit + "&page=" + data.page,
  })
}


/**
 * 电子证书接口
 *
 * @returns
 */
function queryStudentinfo (data) {
  let formData = new FormData();
  // 假设data是一个包含键值对的对象
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return request({
    // method: 'get',
    method: 'post',
    // url: 'http://localhost:8080/api/SysStudentinfoController/queryStudentinfo' + "?username=" + data.username + "&idcard=" + data.idcard,
    // url: '/SysNoticeController/queryStudentinfo' + "?username=" + data.username + "&idcard=" + data.idcard,
    url: '/SysStudentinfoController/queryStudentinfo',
    // url: `/SysNoticeController/queryStudentinfo?${data.toString()}`,
    data: formData,
    // qs: true,
    // ContentType:'application/x-www-form-urlencoded'
    ContentType:'multipart/form-data',
    // Accept: 'multipart/form-data' // 设置期望的响应格式

  })
}
// function queryStudentinfo (data) {
//   return request({
//     method: 'get',
//     url: `/SysNoticeController/queryStudentinfo`,
//   })
// }

export {
  getMenuList,
  queryMenuInfo,
  queryStudentinfo,
  queryNewMenuInfo
  
}
