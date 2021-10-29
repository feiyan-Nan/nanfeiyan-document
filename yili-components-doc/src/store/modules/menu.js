const state = {
  menuItems: []
}

const getters = {
  /**
   * 获取菜单选项
   * @param {*} state
   */
  getMenuItems (state) {
    return state.menuItems
  }
}

const mutations = {
  /**
   * 设置菜单项
   * @param { state } state
   * @param { 菜单选项 } menuItems
   */
  setMenuItems (state, menuItems) {
    state.menuItems = menuItems
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
