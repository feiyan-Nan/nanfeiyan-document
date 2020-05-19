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
