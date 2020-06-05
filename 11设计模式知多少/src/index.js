// 防抖
function debounce(func, wait) {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}


// 节流
function throttle(func, wait) {
  let preview = 0
  return function () {
    let now = new Date()
    let context = this
    let args = arguments
    if(now - preview > wait) {
      func.apply(context, args)
      preview = now
    }
  }
}
// 节流
function throttle(func, wait) {
  let timeout = null;
  return function () {
    let context = this
    let args = arguments
    if(!timeout) {
      timeout = setTimeout(() => {
        func.apply(context, args)
        timeout = null
      }, wait)
    }
  }
}

