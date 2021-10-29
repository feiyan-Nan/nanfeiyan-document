export default {
  /**
   * @author zhaopeng
   * 判断对象是否包含指定属性
   * @param {*} obj
   * @param {*} prop
   */
  hasProperty (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

}
