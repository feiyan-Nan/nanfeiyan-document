<template>
  <el-table :data="data">
    <el-table-column prop="name"
                     label="方法名"
                     width="160">
    </el-table-column>
    <el-table-column prop="desc"
                     label="描述">
    </el-table-column>
    <el-table-column prop="params"
                     label="参数">
      <template slot-scope="scope">
        {{ scope.row.params || '-' }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn } from 'element-ui'
export default {
  name: 'ycp-method-list',
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
