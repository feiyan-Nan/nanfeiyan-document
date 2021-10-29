<template>
  <el-table :data="data">
    <el-table-column prop="prop"
                     label="参数"
                     width="200">
    </el-table-column>
    <el-table-column prop="desc"
                     label="描述">
    </el-table-column>
    <el-table-column prop="type"
                     label="类型"
                     width="200">
    </el-table-column>
    <el-table-column prop="enum"
                     label="可选值">
      <template slot-scope="scope">
        {{ scope.row.enum || '-' }}
      </template>
    </el-table-column>
    <el-table-column prop="default"
                     label="默认值"
                     width="150">
      <template slot-scope="scope">
        {{ scope.row.default || '-' }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn } from 'element-ui'
export default {
  name: 'ycp-prop-list',
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
