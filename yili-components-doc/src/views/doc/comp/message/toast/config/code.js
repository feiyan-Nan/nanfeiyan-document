const base = {
  name: 'ToastBase',
  template:
    `<yi-button type="info"
                @click="showToast()"
                line>默认</yi-button>`,
  methods: {
    showToast () {
      this.$toast('请输入用户名')
    }
  }
}

export default {
  base
}
