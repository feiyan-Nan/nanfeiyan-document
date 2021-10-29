export default {
  prop: [
    { prop: 'value', desc: '显示值', type: 'string, number', enum: '', default: '' },
    { prop: 'max', desc: '最大值，超过最大值会显示 \'{max}+\'，要求 value 是 Number 类型', type: 'number', enum: '', default: '' },
    { prop: 'is-dot', desc: '小圆点', type: 'boolean', enum: '', default: 'false' },
    { prop: 'hidden', desc: '隐藏 badge', type: 'boolean', enum: '', default: 'false' },
    { prop: 'type', desc: '类型', type: 'string', enum: 'primary / success / warning / danger / info', default: '' }
  ]
}
