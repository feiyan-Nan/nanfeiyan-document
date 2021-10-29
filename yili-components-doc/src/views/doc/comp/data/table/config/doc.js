export default {
  tableProp: [
    { prop: 'data', desc: '显示的数据', type: 'array', enum: '', default: '' },
    { prop: 'height', desc: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。', type: 'string/number', enum: '', default: '' },
    { prop: 'max-height', desc: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度。', type: 'string/number', enum: '', default: '' },
    { prop: 'stripe', desc: '是否为斑马纹 table', type: 'boolean', enum: '', default: 'false' },
    { prop: 'border', desc: '是否带有纵向边框', type: 'boolean', enum: '', default: 'false' },
    { prop: 'size', desc: 'Table 的尺寸', type: 'string', enum: 'medium / small / mini', default: '' },
    { prop: 'fit', desc: '列的宽度是否自撑开', type: 'boolean', enum: '', default: 'true' },
    { prop: 'show-header', desc: '是否显示表头', type: 'boolean', enum: '', default: 'true' },
    { prop: 'highlight-current-row', desc: '是否要高亮当前行', type: 'boolean', enum: '', default: 'false' },
    { prop: 'current-row-key', desc: '当前行的 key，只写属性', type: 'String,Number', enum: '', default: '' },
    { prop: 'row-class-name', desc: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。', type: 'Function({row, rowIndex})/String', enum: '', default: '' },
    { prop: 'row-style', desc: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。', type: 'Function({row, rowIndex})/Object', enum: '', default: '' },
    { prop: 'cell-class-name', desc: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。', type: 'Function({row, column, rowIndex, columnIndex})/String', enum: '', default: '' },
    { prop: 'cell-style', desc: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。', type: 'Function({row, column, rowIndex, columnIndex})/Object', enum: '', default: '' },
    { prop: 'header-row-class-name', desc: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。', type: 'Function({row, rowIndex})/String', enum: '', default: '' },
    { prop: 'header-row-style', desc: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。', type: 'Function({row, rowIndex})/Object', enum: '', default: '' },
    { prop: 'header-cell-class-name', desc: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。', type: 'Function({row, column, rowIndex, columnIndex})/String', enum: '', default: '' },
    { prop: 'header-cell-style', desc: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。', type: 'Function({row, column, rowIndex, columnIndex})/Object', enum: '', default: '' },
    { prop: 'row-key', desc: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。', type: 'Function(row)/String', enum: '', default: '' },
    { prop: 'empty-text', desc: '空数据时显示的文本内容，也可以通过 slot="empty" 设置', type: 'String', enum: '', default: '暂无数据' },
    { prop: 'default-expand-all', desc: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效', type: 'Boolean', enum: '', default: 'false' },
    { prop: 'expand-row-keys', desc: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。', type: 'Array', enum: '', default: '' },
    { prop: 'default-sort', desc: '默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序', type: 'Object', enum: '', default: '如果只指定了prop, 没有指定order, 则默认顺序是ascending' },
    { prop: 'tooltip-effect', desc: 'tooltip effect 属性', type: 'String', enum: 'dark/light', default: '' },
    { prop: 'show-summary', desc: '是否在表尾显示合计行', type: 'Boolean', enum: '', default: 'false' },
    { prop: 'sum-text', desc: '合计行第一列的文本', type: 'String', enum: '', default: '合计' },
    { prop: 'summary-method', desc: '自定义的合计计算方法', type: 'Function({ columns, data })', enum: '', default: '' },
    { prop: 'span-method', desc: '合并行或列的计算方法', type: 'Function({ row, column, rowIndex, columnIndex })', enum: '', default: '' },
    { prop: 'select-on-indeterminate', desc: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行', type: 'Boolean', enum: '', default: 'true' },
    { prop: 'indent', desc: '展示树形数据时，树节点的缩进', type: 'Number', enum: '', default: '16' },
    { prop: 'lazy', desc: '是否懒加载子节点数据', type: 'Boolean', enum: '', default: '' },
    { prop: 'load', desc: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息', type: 'Function(row, treeNode, resolve)', enum: '', default: '' },
    { prop: 'tree-props', desc: '渲染嵌套数据的配置选项', type: 'Object', enum: '', default: '{ hasChildren: "hasChildren", children: "children" }' }
  ],

  tableEvent: [
    { name: 'select', desc: '当用户手动勾选数据行的 Checkbox 时触发的事件', callback: 'selection, row' },
    { name: 'select-all', desc: '当用户手动勾选全选 Checkbox 时触发的事件', callback: 'selection' },
    { name: 'selection-change', desc: '当选择项发生变化时会触发该事件', callback: 'selection' },
    { name: 'cell-mouse-enter', desc: '当单元格 hover 进入时会触发该事件', callback: 'row, column, cell, event' },
    { name: 'cell-mouse-leave', desc: '当单元格 hover 退出时会触发该事件', callback: 'row, column, cell, event' },
    { name: 'cell-click', desc: '当某个单元格被点击时会触发该事件', callback: 'row, column, cell, event' },
    { name: 'cell-dblclick', desc: '当某个单元格被双击击时会触发该事件', callback: 'row, column, cell, event' },
    { name: 'row-click', desc: '当某一行被点击时会触发该事件', callback: 'row, column, event' },
    { name: 'row-contextmenu', desc: '当某一行被鼠标右键点击时会触发该事件', callback: 'row, column, event' },
    { name: 'row-dblclick', desc: '当某一行被双击时会触发该事件', callback: 'row, column, event' },
    { name: 'header-click', desc: '当某一列的表头被点击时会触发该事件', callback: 'column, event' },
    { name: 'header-contextmenu', desc: '当某一列的表头被鼠标右键点击时触发该事件', callback: 'column, event' },
    { name: 'sort-change', desc: '当表格的排序条件发生变化的时候会触发该事件', callback: '{ column, prop, order }' },
    { name: 'filter-change', desc: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。', callback: 'filters' },
    { name: 'current-change', desc: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性', callback: 'currentRow, oldCurrentRow' },
    { name: 'header-dragend', desc: '当拖动表头改变了列的宽度的时候会触发该事件', callback: 'newWidth, oldWidth, column, event' },
    { name: 'expand-change', desc: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）', callback: 'row, (expandedRows | expanded)' }
  ],

  tableMethod: [
    { name: 'clearSelection', desc: '用于多选表格，清空用户的选择', params: '' },
    { name: 'toggleRowSelection', desc: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）', params: 'row, selected' },
    { name: 'toggleAllSelection', desc: '用于多选表格，切换所有行的选中状态', params: '' },
    { name: 'toggleRowExpansion', desc: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）', params: 'row, expanded' },
    { name: 'setCurrentRow', desc: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。', params: 'row' },
    { name: 'clearSort', desc: '用于清空排序条件，数据会恢复成未排序的状态', params: '' },
    { name: 'clearFilter', desc: '不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件', params: 'columnKey' },
    { name: 'doLayout', desc: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法', params: '' },
    { name: 'sort', desc: '手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。', params: 'prop: string, order: string' }
  ],

  tableSlot: [
    { name: 'append', desc: '插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。' }
  ],

  tableColumnProp: [
    { prop: 'type', desc: '对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮', type: 'string', enum: 'selection/index/expand', default: '' },
    { prop: 'index', desc: '如果设置了 type=index，可以通过传递 index 属性来自定义索引', type: 'number, Function(index)', enum: '', default: '' },
    { prop: 'column-key', desc: 'column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件', type: 'string', enum: '', default: '' },
    { prop: 'label', desc: '显示的标题', type: 'string', enum: '', default: '' },
    { prop: 'prop', desc: '对应列内容的字段名，也可以使用 property 属性', type: 'string', enum: '', default: '' },
    { prop: 'width', desc: '对应列的宽度', type: 'string', enum: '', default: '' },
    { prop: 'min-width', desc: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列', type: 'string', enum: '', default: '' },
    { prop: 'fixed', desc: '列是否固定在左侧或者右侧，true 表示固定在左侧', type: 'string, boolean', enum: 'true, left, right', default: '' },
    { prop: 'render-header', desc: '列标题 Label 区域渲染使用的 Function', type: 'Function(h, { column, $index })', enum: '', default: '' },
    { prop: 'sortable', desc: '对应列是否可以排序，如果设置为 "custom"，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件', type: 'boolean, string', enum: 'true, false, "custom"', default: 'false' },
    { prop: 'sort-method', desc: '对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致', type: 'Function(a, b)', enum: '', default: '' },
    { prop: 'sort-by', desc: '指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推', type: 'String/Array/Function(row, index)', enum: '', default: '' },
    { prop: 'sort-orders', desc: '数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序', type: 'array', enum: '数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序', default: '[\'ascending\', \'descending\', null]' },
    { prop: 'resizable', desc: '对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）', type: 'boolean', enum: '', default: 'true' },
    { prop: 'formatter', desc: '用来格式化内容', type: 'Function(row, column, cellValue, index)', enum: '', default: '' },
    { prop: 'show-overflow-tooltip', desc: '当内容过长被隐藏时显示 tooltip', type: 'Boolean', enum: '', default: 'false' },
    { prop: 'align', desc: '对齐方式', type: 'String', enum: 'left/center/right', default: 'left' },
    { prop: 'header-align', desc: '表头对齐方式，若不设置该项，则使用表格的对齐方式', type: 'String', enum: 'left/center/right', default: '' },
    { prop: 'class-name', desc: '列的 className', type: 'string', enum: '', default: '' },
    { prop: 'label-class-name', desc: '当前列标题的自定义类名', type: 'string', enum: '', default: '' },
    { prop: 'selectable', desc: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选', type: 'Function(row, index)', enum: '', default: '' },
    { prop: 'reserve-selection', desc: '仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）', type: 'Boolean', enum: '', default: 'false' },
    { prop: 'filters', desc: '数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。', type: 'Array[{ text, value }]', enum: '', default: '' },
    { prop: 'filter-placement', desc: '过滤弹出框的定位', type: 'String', enum: '与 Tooltip 的 placement 属性相同', default: '' },
    { prop: 'filter-multiple', desc: '数据过滤的选项是否多选', type: 'Boolean', enum: '', default: 'true' },
    { prop: 'filter-method', desc: '数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。', type: 'Function(value, row, column)', enum: '', default: '' },
    { prop: 'filtered-value', desc: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。', type: 'Array', enum: '', default: '' }
  ],

  tableColumnSlot: [
    { name: '', desc: '自定义列的内容，参数为 { row, column, $index }' },
    { name: 'header', desc: '自定义表头的内容. 参数为 { column, $index }' }
  ]

}
