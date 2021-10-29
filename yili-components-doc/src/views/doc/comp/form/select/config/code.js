const options = [
  { value: '1', label: '北京' },
  { value: '2', label: '上海' },
  { value: '3', label: '天津' },
  { value: '4', label: '重庆', disabled: true },
  { value: '5', label: '深圳' }
]

const base = {
  name: 'SelectBase',
  template:
    `<yi-select v-model="select" placeholder="请选择">
      <yi-option v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </yi-option>
    </yi-select>`,
  data: {
    options,
    select: ''
  }
}

const disabled = {
  name: 'SelectDisabled',
  template:
    `<yi-select v-model="select"
        disabled
        placeholder="请选择">
      <yi-option v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </yi-option>
    </yi-select>`,

  data: {
    options,
    select: ''
  }
}

const disabledOption = {
  name: 'SelectOption',
  template:
    `<yi-select v-model="select"
          placeholder="禁用状态">
      <yi-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :disabled="item.disabled"
            :value="item.value">
      </yi-option>
    </yi-select>`,
  data: {
    options,
    select: ''
  }
}

const clear = {
  name: 'SelectClear',
  template:
    `<yi-select v-model="select"
          clearable
          placeholder="可清空">
      <yi-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
      </yi-option>
    </yi-select>`,
  data: {
    options,
    select: ''
  }
}

const multiple = {
  name: 'SelectMutiple',
  template:
    `<yi-select v-model="select"
          multiple
          placeholder="可多选">
      <yi-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
      </yi-option>
    </yi-select>`,
  data: {
    options,
    select: ''
  }
}

const collapse = {
  name: 'SelectCollapse',
  template:
    `<yi-select v-model="select"
          multiple
          collapse-tags
          placeholder="可折叠多选">
      <yi-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
      </yi-option>
    </yi-select>`,
  data: {
    options,
    select: ''
  }
}

const template = {
  name: 'SelectTemplate',
  template:
    `<yi-select v-model="select"
          placeholder="自定义模版">
      <yi-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
      <span style="center;color: red">{{ item.label }}</span>
      </yi-option>
    </yi-select>`,
  data: {
    options,
    select: ''
  }
}

const search = {
  name: 'SelectSearch',
  template:
    `<yi-select v-model="select"
          filterable
          placeholder="可搜索">
      <yi-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
      </yi-option>
    </yi-select>`,
  data: {
    options,
    select: ''
  }
}

export default {
  base, disabled, disabledOption, clear, multiple, collapse, template, search
}
