开发步骤:
## 步骤一: 创建初始化 HTML、CSS
> index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>文本</title>
    <link rel="stylesheet" href="./index.css">
  </head>

  <body>
    <div class="modal-wrapper"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span class="modal-title">提示</span>
        <span class="modal-close">X</span>
      </div>
      <div class="modal-body">
        <span>这是一段文本</span>
        <input class="input-inner" type="text" />
      </div>
      <div class="modal-footer">
        <span class="modal-default">取消</span>
        <span class="modal-primary">确定</span>
      </div>
    </div>
    <button class="open-dialog">打开弹窗</button>

    <script type="module">

    </script>
  </body>
</html>
```
> index.css

```css
.modal-dialog {
    width: 30%;
    z-index: 999;
    display: block;
    position: absolute;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    top: 15vh;
    left: 30%;
}

.modal-wrapper {
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    background: black;
    opacity: 0.4;
    z-index: 998;
}

.modal-header {
    padding: 20px 20px 10px;
    height: 30px;
    background: deepskyblue;
    color: #fff;
}

.modal-header .modal-title {
    line-height: 24px;
    font-size: 18px;
    float: left;
}

.modal-body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
}

.modal-footer {
    padding: 10px 20px 30px;
    text-align: right;
}

.modal-close {
    color: #909399;
    font-weight: 400;
    float: right;
    cursor: pointer;
}

.modal-default {
    color: #606266;
    border: 1px solid #dcdfe6;
    text-align: center;
    cursor: pointer;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 500;
    margin-right: 10px;
}

.modal-default:hover {
    color: #409eff;
    background: #ecf5ff;
    border-color: #c6e2ff;
}

.modal-primary {
    border: 1px solid #dcdfe6;
    text-align: center;
    cursor: pointer;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 500;
    background: #409eff;
    color: #fff;
    margin-left: 10px;
}

.modal-primary:hover {
    background: #66b1ff;
}
.modal-input {
    width: 100%;
    margin-left: 20px;
    margin-bottom: 20px;
}
.input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    width: 100%;
    margin-top: 20px;
}

```

## 步骤二: 初始化JS
> index.html

```javascript 1.8
<script type="module">
  import Dialog, {DialogInput} from './index.js';

  const dialog = new Dialog({
    width: '30%',
    height: '250px',
    title: 'nanfeiyan 的弹窗',
    content: 'nanfeiyan 的弹窗内容',
    dragable: true, // 是否可拖拽
    maskable: true, // 是否有遮罩
    isCancel: true, // 是否有取消
    success: () => {
      console.log('成功了打算做。。。');
    },
    cancel: () => {
      console.log('取消了打算做。。。');
    },
    close: () => {
      console.log('关闭了打算做。。。');
    }
  });
</script>
```
> index.js

```javascript
class Dialog extends EventTarget {
  constructor(obj) {
    super();
    // 默认配置
    const defaultOptions = {
      width: '40%',
      height: '300px',
      title: '弹窗标题',
      content: '弹窗内容',
      dragable: true, // 是否可以拖拽
      maskable: true, // 是否显示遮罩
      isCancel: true, // 是否显示取消
      success: () => {
        console.log('点击成功');
      },
      cancel: () => {
        console.log('点击取消');
      },
      close: () => {
        console.log('点击关闭');
      },
    };
    // 合并配置并将其挂载到this上
    this.options = Object.assign(defaultOptions, obj);
    this.createDom(); // 创建dom结构
    this.init(); // 初始化一些事件和属性
    console.log(this);
  }
  // 生成dom结构
  createDom() {
    const divElement = document.createElement('div');
    divElement.classList.add('container');
    divElement.style.display = 'none';
    divElement.innerHTML = `
    <div class="modal-wrapper"></div>
    <div class="modal-dialog" style="width: ${this.options.width}; height: ${
      this.options.height
    }">
      <div class="modal-header">
        <span class="modal-title">${this.options.title}</span>
        <span class="modal-close">X</span>
      </div>
      <div class="modal-body">
        <span>${this.options.content}</span>
      </div>
      <div class="modal-footer">
        ${
          this.options.isCancel ? '<span class="modal-default">取消</span>' : ''
        }
        <span class="modal-primary">确定</span>
      </div>
    </div>
    `;
    this.divElement = divElement;
    document.body.appendChild(divElement);
  }
  init() {
    // 判断是否可以拖拽
    if (this.options.dragable) {
      this.dragable(); // 拖拽的相关操作
      this.divElement.querySelector('.modal-header').style.cursor = 'pointer';
    } else {
      this.divElement.querySelector('.modal-header').style.cursor = 'default';
    }

    // 通过自定义事件的方式绑定
    this.addEventListener('success', this.options.success);

    // 事件委托
    const modalDialog = this.divElement.querySelector('.modal-dialog');
    modalDialog.addEventListener('click', evt => {
      console.log('你点击了,', evt.target.className);
      switch (evt.target.className) {
        case 'modal-close':
          this.close();
          this.options.close();
          break;
        case 'modal-default':
          this.close();
          this.options.cancel();
          break;
        case 'modal-primary':
          this.confirm();
          break;
        default:
          console.log('无事件');
          break;
      }
    })
  }
  confirm (value) {
    this.close();
    // 原本可以通过直接回调，但是可以用 EventTarget 委托对象
    // this.options.success(value);
    const success = new CustomEvent('success', {
      detail: value,
    });
    this.dispatchEvent(success);
  }
  // 关闭对话框
  close () {
    this.divElement.style.display = 'none'
  }
  // 打开对话框给外部使用, 给外部使用
  openDialog() {
    // 是否显示遮罩
    if(!this.options.maskable) {
      this.divElement.querySelector('.modal-wrapper').style.display = 'none';
    }
    this.divElement.style.display = 'block';
  }
  // 拖拽
  dragable() {
    const modalHeader = this.divElement.querySelector('.modal-header');
    const modalDialog = this.divElement.querySelector('.modal-dialog');
    modalHeader.onmousedown = (e) => {
      const x = e.clientX - modalDialog.offsetLeft;
      const y = e.clientY - modalDialog.offsetTop;
      console.log(x, y);
      modalHeader.onmousemove = (e) => {
        const xx = e.clientX;
        const yy = e.clientY;
        modalDialog.style.left = xx - x + 'px';
        modalDialog.style.top = yy - y + 'px';
      }
    }
    document.onmouseup = () => {
      modalHeader.onmousemove = '';
    }
  }
}

// 继承之后继续扩展功能
export class DialogInput extends Dialog{
  constructor(options) {
    super(options);
    this.createInput();
  }
  createInput () {
    const input = document.createElement('input')
    input.type = 'text'
    input.classList.add('input-inner');
    this.divElement.querySelector('.modal-body').appendChild(input);
    this.input = input
  }
  confirm() {
    const value = this.input.value
    super.confirm(value);
  }
}

export default Dialog;

```

## 总结

代码中使用了自定义事件
