const base = {
  name: 'BreadcrumbBase',
  template:
    `<yi-breadcrumb separator="/">
      <yi-breadcrumb-item :to="{ path: '/' }">首页</yi-breadcrumb-item>
      <yi-breadcrumb-item><a href="/">活动管理</a></yi-breadcrumb-item>
      <yi-breadcrumb-item>活动列表</yi-breadcrumb-item>
      <yi-breadcrumb-item>活动详情</yi-breadcrumb-item>
    </yi-breadcrumb>`,
  data: {
    dialogShow: false
  }
}

export default {
  base
}
