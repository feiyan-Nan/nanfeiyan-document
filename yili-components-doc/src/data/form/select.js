export default {

  codeBase:
`<el-select v-model="baseSelect" placeholder="请选择">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
</el-select>
`,
  codeDisabled:
`<el-select v-model="disabledSelect" disabled placeholder="请选择">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
</el-select>
`,

  codeDisabledOption:
`<el-select v-model="disabledOptionSelect" placeholder="请选择">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :disabled="item.disabled" :value="item.value"></el-option>
</el-select>
`,
  codeClear:
`<el-select v-model="disabledOptionSelect" clearable placeholder="请选择">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
</el-select>
`,

  codeMultiple:
`<el-select v-model="multipleSelect" multiple placeholder="请选择">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
</el-select>
`,

  codeMultipleCollapse:
`<el-select v-model="multipleCollapseSelect" multiple collapse-tags placeholder="请选择">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
</el-select>
`,

  codeTemplate:
`<el-select v-model="baseSelect" placeholder="请选择">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    <span style="center;color: red">{{ item.label }}</span>
  </el-option>
</el-select>
`,
  codeSearch:
`<el-select v-model="baseSelect" placeholder="请选择" filterable>
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
</el-select>
`
}
