class Vue extends EventTarget{
  constructor(options) {
    super(options);
    this.options = options
    this._data = options.data
    this.observer(this._data)
    this.complie()
  }
  observer (data) {
    for (let key in data) {
      let value = data[key]
      const _this = this
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get() {
          return value
        },
        set(newValue) {
          const event = new CustomEvent(key, {
            detail: newValue,
          })
          _this.dispatchEvent(event)
          if(value !== newValue) {
            value = newValue
          }
        }
      })
    }
  }
  complie() {
    const element = document.querySelector(this.options.el)
    const childNode = element.childNodes;
    this.compileNode(childNode)
  }
  compileNode(childNode) {
    childNode.forEach(node => {
      if(node.nodeType === 3) {
        let textContent = node.textContent.trim();
        const result = [];
        const replaceResult = [];
        let startFlag = false;
        let tempStr = '';
        for (let i = 0; i < textContent.length; i++) {
          if (textContent[i] === '{' && textContent[i + 1] === '{') {
            startFlag = true;
            i++;
          } else if (startFlag && textContent[i] === '}' && textContent[i + 1] === '}') {
            startFlag = false;
            replaceResult.push('{{' + tempStr + '}}');
            result.push(tempStr.trim());
            tempStr = '';
            i++;
          } else if (startFlag) {
            tempStr += textContent[i];
          }
        }
        for (let i = 0; i < result.length; i++) {
          textContent = textContent.replace(replaceResult[i], this._data[result[i]]);
        }
        node.textContent = textContent;

        // 绑定事件二次渲染视图
        for(let i = 0; i< result.length; i++) {
          this.addEventListener(result[i], e => {
            console.log(e);
            if(result[i] === e.type) {
              textContent = textContent.replace(this._data[result[i]], e.detail)
            }
            node.textContent = textContent;
          })
        }
      }else if(node.nodeType === 1) {
        if(node.childNodes.length) {
          this.compileNode(node.childNodes)
        }
      }
    })
  }
}
