const base = {
  name: 'DialogBase',
  template:
    '<yi-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></yi-input-number>',
  data: {
    num: 2
  },
  methods: {
    handleChange (num) {
      console.log(num)
    }
  }
}

export default {
  base
}
