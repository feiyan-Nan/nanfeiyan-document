

function jsonp(url, data, callback) {
  data.callback = callback
  let tempArr = []
  for (let key in data) {
    tempArr.push(`${key}=${data[key]}`)
  }
  let _url = url+ '?' + tempArr.join('&')
  const script = document.createElement('script')
  script.src = _url
  document.body.appendChild(script)
  return new Promise((resolve, reject) => {
    window[callback] = function (data) {
      try {
        resolve(data)
      }catch (e) {
        reject(e)
      }finally {
        script.parentNode.removeChild(script)
      }
    }
  })
}
