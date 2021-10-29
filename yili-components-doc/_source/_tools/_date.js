export default {
  /**
   * @author zhaopeng
   * 把日期对象转化成指定格式的字符串
   * @param {*} format
   * @param {*} date
   */
  dateFormat (format, date) {
    let ret
    const opt = {
      'Y+': date.getFullYear().toString(), // 年
      'm+': (date.getMonth() + 1).toString(), // 月
      'd+': date.getDate().toString(), // 日
      'H+': date.getHours().toString(), // 时
      'M+': date.getMinutes().toString(), // 分
      'S+': date.getSeconds().toString() // 秒
    }
    for (const k in opt) {
      ret = new RegExp('(' + k + ')').exec(format)
      if (ret) {
        format = format.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
      }
    }
    return format
  },

  /**
   * @author zhaopeng
   * 秒转时分秒
   * @param {*} second
   */
  secondToDate (second) {
    var h = Math.floor(second / 3600) < 10 ? '0' + Math.floor(second / 3600) : Math.floor(second / 3600)
    var m = Math.floor((second / 60 % 60)) < 10 ? '0' + Math.floor((second / 60 % 60)) : Math.floor((second / 60 % 60))
    var s = Math.floor((second % 60)) < 10 ? '0' + Math.floor((second % 60)) : Math.floor((second % 60))
    return h + ':' + m + ':' + s
  },

  /**
   * @author zhaopeng
   * 毫秒转时分秒
   * @param {*} ms
   */
  msecondToDate (ms) {
    ms = ms / 1000
    var h = Math.floor(ms / 3600) < 10 ? '0' + Math.floor(ms / 3600) : Math.floor(ms / 3600)
    var m = Math.floor((ms / 60 % 60)) < 10 ? '0' + Math.floor((ms / 60 % 60)) : Math.floor((ms / 60 % 60))
    var s = Math.floor((ms % 60)) < 10 ? '0' + Math.floor((ms % 60)) : Math.floor((ms % 60))
    return h + ':' + m + ':' + s
  }

}
