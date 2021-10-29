export default {
  /**
   * @author zhaopeng
   * 判断是否为空
   * @param { any }
   */
  isEmpty (obj) {
    if (!obj || obj === 0 || obj === '') return true

    // 检验数组
    if (obj.constructor === Array && obj.length === 0) return true

    // 检验对象
    if (obj.constructor === Object) {
      return Object.keys(obj).length === 0
    }

    return false
  },

  /**
   * @author zhaopeng
   * 是否是字符串
   * @param {*} str
   */
  isString (str) {
    return typeof str === 'string'
  },

  /**
   * @author zhaopeng
   * 判断是否是数字
   * @param {*} number
   */
  isNumber (number) {
    return typeof number === 'number' && !isNaN(number)
  },

  /**
   * @author zhaopeng
   * 判断是否是数组
   * @param {*} array
   */
  isArray (array) {
    return Array.isArray(array)
  },

  /**
   * @author zhaopeng
   * 判断是否是方法
   * @param {*} fun
   */
  isFunction (fun) {
    return Object.prototype.toString.call(fun) === '[object Function]'
  },

  /**
   * @author zhaopeng
   * 判断是否是对象
   * @param {*} obj
   */
  isObject (obj) {
    return obj.constructor === Object
  },

  /**
   * @author zhaopeng
   * 字符串不区分大小对比
   * @param {*} str1
   * @param {*} str2
   */
  isEqualsIgnorecase (str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase()
  },

  /**
   * @author zhaopeng
   * 判断是否由指定位数数字组成
   * @param {*} str
   * @param {num} len
   */
  numberByLength (str, length) {
    return /^\d+$/.test(str) && length === str.length
  },

  /**
   * @author zhaopeng
   * 判断由字母数字组成
   * @param {*} str
   */
  inLetterNum (str) {
    return /^[A-Za-z0-9]*$/.test(str)
  },

  /**
   * @author zhaopeng
   * 判断是否是合法身份证
   * @param {*} str
   */
  isID (id) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(id)
  },

  /**
   * @author zhaopeng
   * 判断是否是正确的手机号
   * @param {*} str
   */
  isPhone (phone) {
    return /^1[3|4|5|7|8][0-9]\d{8}$/.test(phone)
  },

  /**
   * @author zhaopeng
   * 判断是否是合法邮箱地址
   */
  isEmail (email) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)
  },

  /**
   * @author zhaopeng
   * 判断是否包含特殊字符
   * @param {*} value
   */
  isContainSpecial (value) {
    var regEn = /[`~!@$%^&*()_+=<>?:"{},./\\;':·！￥（——）：；“”‘、，|《。》？【】[\]]/im
    return regEn.test(value)
  }

}
