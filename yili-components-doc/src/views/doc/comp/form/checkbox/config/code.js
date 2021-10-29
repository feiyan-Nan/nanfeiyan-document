const base = {
  name: 'CheckboxBase',
  template: '<yi-checkbox v-model="checked">北京</yi-checkbox>',
  data: {
    checked: true
  }
}

const disabled = {
  name: 'CheckboxDisabled',
  template:
    `<yi-checkbox v-model="checked1" disabled>北京</yi-checkbox>
    <yi-checkbox v-model="checked2" disabled>上海</yi-checkbox>`,
  data: {
    checked1: false,
    checked2: true
  }
}

const group = {
  name: 'CheckboxGroup',
  template:
    `<yi-checkbox-group v-model="checked">
      <yi-checkbox label="北京"></yi-checkbox>
      <yi-checkbox label="上海"></yi-checkbox>
      <yi-checkbox label="天津"></yi-checkbox>
      <yi-checkbox label="重庆" disabled></yi-checkbox>
      <yi-checkbox label="深圳" disabled></yi-checkbox>
    </yi-checkbox-group>`,
  data: {
    checked: ['北京', '重庆']
  }
}

const checkAll = {
  name: 'CheckboxCheckAll',
  template:
    `<yi-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</yi-checkbox>
    <div style="margin: 15px 0;"></div>
    <yi-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <yi-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</yi-checkbox>
    </yi-checkbox-group>`,
  data: {
    checkAll: false,
    cities: ['北京', '上海', '天津', '重庆', '深圳'],
    checkedCities: ['上海', '北京'],
    isIndeterminate: true
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? this.cities : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}

const limit = {
  name: 'CheckboxLimit',
  template:
    `<yi-checkbox-group v-model="check" :min="1" :max="2">
      <yi-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</yi-checkbox>
    </yi-checkbox-group>`,
  data: {
    check: ['上海', '北京'],
    cities: ['北京', '上海', '天津', '重庆', '深圳']
  }
}

export default {
  base, disabled, group, checkAll, limit
}
