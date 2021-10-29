<template>
  <el-table :data="data">
    <el-table-column prop="name"
                     label="事件名称"
                     width="160">
    </el-table-column>
    <el-table-column prop="desc"
                     label="事件描述">
    </el-table-column>
    <el-table-column prop="callback"
                     label="返回值">
    </el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn } from 'element-ui'
export default {
  name: 'ycp-event-list',
  data () {
    return {

    }
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    ElTable: Table,
    ElTableColumn: TableColumn
  }
}
</script>
