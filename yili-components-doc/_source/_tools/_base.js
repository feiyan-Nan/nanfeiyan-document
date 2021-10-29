export default {
  /**
   * @author zhaopeng
   * 判断是否是微信
   */
  isWeiXin: () => {
    const ua = window.navigator.userAgent.toLowerCase()
    return ua.match(/MicroMessenger/i) + '' === 'micromessenger'
  },

  /**
   * @author zhaopeng
   * 判断是否是APP
   */
  isApp () {
    var userAgent = navigator.userAgent.toLowerCase()
    return (
      userAgent.indexOf('sinosig android') >= 0 || userAgent.indexOf('sinosig ios') >= 0
    )
  },

  /**
   * @author zhaopeng
   * 判断是否是IOS
   */
  isIos () {
    var u = navigator.userAgent
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  },

  /**
   * @author zhaopeng
   * 判断是否是Android
   */
  isAndroid () {
    var u = navigator.userAgent
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  },

  /**
   * @author zhaopeng
   * 获取URL 参数部分
   * @param {*} url
   */
  getUrlParams (url = document.location.toString()) {
    var arrUrl = url.split('?')
    var para = arrUrl[1]
    return para
  },

  /**
   * @author zhaopeng
   * 获取域名
   * @param {*} full
   */
  getHostName (full = true) {
    if (full) {
      return window.location.protocol + '//' + window.location.host
    } else {
      return window.location.host
    }
  }
}
