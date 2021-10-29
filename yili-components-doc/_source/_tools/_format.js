export default {
  /**
   * @author zhaopeng
   * 数字格式化，三位添加','分割
   * @param { string | number} num
   */
  formatNumber (num) {
    const str = num.toString()
    if (str.indexOf('.') === -1) {
      return (str || 0).replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    }
    const arr = str.split('.')
    return (arr[0] || 0).replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' + arr[1]
  },

  /**
   * 去掉字符串中的空字符串
   * @param {*} str
   */
  trimAll (str) {
    return str.replace(/\s+/g, '')
  },

  /**
   * 去掉字符串两边空格
   * @param {*} str
   */
  trim (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
}
