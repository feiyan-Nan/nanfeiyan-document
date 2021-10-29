import store from '../store'

export default {
  /**
   * 获取标准结构数据
   * @param { Array } menuArray
   */
  getRouterData (menuArray, basePath) {
    const routes = []

    initRouteItems(menuArray)

    function initRouteItems (items, parent) {
      items.forEach(item => {
        Object.assign(item, {
          uri: parent && parent.uri ? (parent.uri + '/' + item.name) : item.name,
          path: parent && parent.path ? (parent.path + '-' + item.name) : item.name
        })

        if (item.children) {
          initRouteItems(item.children, item)
        } else {
          routes.push({
            path: item.path,
            name: item.path,
            component: () => import(/* webpackChunkName:'[request]' */ '@/views/doc/' + item.uri)
          })
        }
      })
    }

    store.commit('Menu/setMenuItems', menuArray)

    return routes
  }
}
