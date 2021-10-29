import Vue from 'vue'
import {
  Avatar,
  Badge, Breadcrumb, BreadcrumbItem,
  Checkbox, CheckboxGroup, Collapse, CollapseItem, InputNumber,
  Dialog, Drawer, DatePicker, Dropdown, DropdownItem, DropdownMenu,
  Input,
  Option,
  Pagination, Progress, Popover,
  Select, Slider,
  Tooltip, Tabs, TabPane, Table, TableColumn, Tag, Tree, TimePicker
} from 'element-ui'

import './_component/_message'
import './_component/_toast'
import './_component/_message_box'
import './_component/_notice'

// 二次封装组件
const ComponentEl = [
  Avatar,
  Badge, Breadcrumb, BreadcrumbItem,
  Checkbox, CheckboxGroup, Collapse, CollapseItem, InputNumber,
  Dialog, Drawer, DatePicker, Dropdown, DropdownItem, DropdownMenu,
  Input,
  Option,
  Pagination, Progress, Popover,
  Select, Slider,
  Tooltip, Tabs, TabPane, Table, TableColumn, Tag, Tree, TimePicker
]

// 自研组件
const Component = require.context('./_component/', true, /\.vue/)

Component.keys().forEach(item => {
  const reqCom = Component(item).default
  const compName = reqCom.name
  if (compName) {
    Vue.component(compName, reqCom)
  } else {
    console.error('缺少name属性')
  }
})

ComponentEl.forEach(item => {
  Vue.component(item.name.replace('El', 'Yi'), item)
})
