export default {
  /**
   * @author zhaopeng
   * 数组是否存在空值
   * @param {*} arr
   */
  arrayHasEmpty (arr) {
    return arr.some(item => {
      return this.isEmpty(item)
    })
  },

  /**
   * @author zhaopeng
   * 数组是否全为空
   * @param {*} arr
   */
  arrayEveryEmpty (arr) {
    return arr.every(item => {
      return this.isEmpty(item)
    })
  },

  /**
   * @author zhaopeng
   * 把树形结构数据转化成普通数组
   * @param {树数据} treeList
   * @param {儿子节点key值 默认children} childrenKey
   */
  setTreeToList (treeList, childrenKey = 'children') {
    const list = []
    forEachData(treeList)

    function forEachData (children) {
      children.forEach(item => {
        list.push(item)
        if (item[childrenKey] && item[childrenKey].length > 0) {
          forEachData(item[childrenKey])
        }
      })
    }
    return list
  },

  /**
   * @author zhaopeng
   * 把列表转化成树形结构
   * @param {列表} list
   * @param {根节点id} rootId
   */
  setListToTree (list, rootId, id = 'id', parentId = 'parentId') {
    const mapObj = {}
    const result = []
    list.map(el => {
      mapObj[el[id]] = el
    })

    list.forEach(item => {
      if (item[id] === rootId) {
        if (item.permission === 0) {
          item.disabled = true
        }
        result.push(item) // 获取到根节点
        return false
      } else {
        const obj = mapObj[item[parentId]]
        if (obj.children) {
          if (item.permission === 0) {
            item.disabled = true
          }
          obj.children.push(item)
        } else {
          obj.children = [item]
        }
      }
    })

    return result
  },

  /**
   * @author zhaopeng
   * 提取数组的指定属性
   * @param {数组} arr
   * @param {属性} prop
   */
  getProp (arr, prop) {
    if (arr.length === 1) {
      return arr[0][prop]
    } else {
      return arr.map((item) => {
        return item[prop]
      })
    }
  },

  /**
   * @author zhaopeng
   * 判断两个数组是否相等
   * @param {*} arr1
   * @param {*} arr2
   */
  arrayEquals (arr1, arr2) {
    return arr1.sort().toString() === arr2.sort().toString()
  }

}
