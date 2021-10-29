import Vue from 'vue'
export default {
  getCode (opt) {
    const res = {}
    for (const key in opt) {
      res[key] = {
        name: opt[key].name,
        code: this.createHtml(opt[key])
      }
      this.createComponent(key, opt[key])
    }
    return res
  },

  /**
   * 初始化html
   * @param {*} item
   * @returns
   */
  createHtml (item) {
    const N = '\n'
    if (this.isOnlyTemp(item)) {
      return item.template
    }

    return `<template>${
      N}  <div>${
      N}    ${item.template}${
      N}  </div>${
      N}</template>
      ${
      N}<script>${
      N}export default {${
      N}  data () {${
      N}    return {${
      N}      ${this.setData(item.data, 6)} ${
      N}    }${
      N}  },${
      N}  ${this.setMethods(item.methods, 2)}${
      N}}${
      N}</script>`
  },

  createComponent (key, item) {
    Vue.component('Ycp' + item.name, {
      template: '<div>' + item.template + '</div>',
      data () {
        return item.data || {}
      },
      methods: item.methods || {}
    })
  },

  isOnlyTemp (item) {
    return Object.keys(item).length === 2 && Object.keys(item)[1] === 'template'
  },

  /**
   * 设置data属性
   * @param {*} data
   * @returns
   */
  setData (data, tab) {
    let res = ''
    const N = '\n'
    if (data) {
      Object.keys(data).forEach((key, index) => {
        const val = key + ': ' + this.setValue(data[key], tab)
        res += val + (index === Object.keys(data).length - 1 ? '' : `,${
          N + this.setTab(tab)}`)
      })
    }
    return res
  },

  /**
   * 设置methods属性
   * @param {} methods
   * @returns
   */
  setMethods (methods, tab) {
    let res = ''
    const N = '\n'
    if (methods) {
      res = `methods: {${N + this.setTab(tab + 2)}`
      Object.keys(methods).forEach((key, index) => {
        const val = methods[key].toString().replace('function ', '')
        res += val + (index === Object.keys(methods).length - 1 ? '' : `,${
          N + this.setTab(tab + 2)}`)
      })
      res += `${N + this.setTab(tab)}}`
    }
    return res
  },

  /**
   * 设置data的value值
   * @param {*} val
   * @param {*} tab
   * @returns
   */
  setValue (val, tab) {
    const N = '\n'
    if (typeof val === 'string') {
      return '\'' + val + '\''
    } else if ((val.constructor && val.constructor === Object)) {
      return `{${
        N + this.setTab(tab + 2)}${this.setData(val, tab + 2)}
      }`
    } else if ((val.constructor && val.constructor === Array)) {
      return JSON.stringify(val)
    } else {
      return val
    }
  },

  /**
   * 获取缩进
   * @param {*} tab
   * @returns
   */
  setTab (tab) {
    let space = ''
    for (let index = 1; index <= tab; index++) {
      space += ' '
    }
    return space
  }
}
