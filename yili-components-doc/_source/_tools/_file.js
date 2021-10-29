export default {
  /**
   * @author zhaopeng
   * 动添加载文件
   * @param {*} url
   * @param { css | script } type
   */
  asyncLoadFill (url, type, callback) {
    const tag = type === 'css' ? 'link' : 'script'
    const attr = type === 'css' ? 'href' : 'src'
    var s = document.createElement(tag)
    s[attr] = url
    var dom = document.getElementsByTagName('body')[0]
    dom.appendChild(s, dom)
    s.onload = function () {
      callback()
    }
  },

  /**
   * @author zhaopeng
   * base64转文件
   * @param {*} base64
   * @param {*} filename
   */
  toFill (base64, filename) {
    // 将base64转换为文件
    var arr = base64.split(',')
    var mime = arr[0].match(/:(.*?);/)[1]
    var bstr = atob(arr[1])
    var n = bstr.length
    var u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  },

  /**
   * @author zhaopeng
   * 图片转base64
   * @param { string } url
   * @param { function } callback
   */
  getImgToBase64 (url, callback) {
    // 将图片转换为Base64
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')
    var img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = function () {
      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      var dataURL = canvas.toDataURL('image/png')
      callback(dataURL)
      canvas = null
    }
  }
}
