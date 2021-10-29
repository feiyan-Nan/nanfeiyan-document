const alert = {
  name: 'MsgBoxAlert',
  template:
    `<yi-button text
                @click="showMessage()"
                line>弹出Alert</yi-button>`,
  methods: {
    showMessage () {
      this.$alert('我是一个提示消息', '标题')
    }
  }
}

const confirm = {
  name: 'MsgBoxConfirm',
  template:
    `<yi-button text
                @click="showMessage()"
                line>弹出Confirm</yi-button>`,
  methods: {
    showMessage () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '标题', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}

const prompt = {
  name: 'MsgBoxPropmt',
  template:
    `<yi-button text
                @click="showMessage()"
                line>弹出Propmt</yi-button>`,
  methods: {
    showMessage () {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    }
  }
}

const msgbox = {
  name: 'MsgBoxMsgBox',
  template:
    `<yi-button text
                @click="showMessage()"
                line>弹出Msgbox</yi-button>`,
  methods: {
    showMessage () {
      this.$msgbox({
        title: '消息',
        message: '我是自定义消息',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消'
        })
      })
    }
  }
}

export default {
  alert, confirm, prompt, msgbox
}
