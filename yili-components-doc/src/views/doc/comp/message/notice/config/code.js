const base = {
  name: 'NoticeBase',
  template:
    `<yi-button text
              @click="showNotice()"
              line>可自动关闭</yi-button>
    <yi-button text
              @click="showNoticeCantClose()"
              line>不可自动关闭</yi-button>`,
  methods: {
    showNotice () {
      this.$notice({
        title: '通知',
        message: '我是一个可以关闭的通知'
      })
    },

    showNoticeCantClose () {
      this.$notice({
        title: '通知',
        message: '我是一个不可以关闭的通知',
        duration: 0
      })
    }
  }
}

const type = {
  name: 'MsgBoxConfirm',
  template:
    `<yi-button text
            type="success"
            @click="showSuccess()"
            line>成功</yi-button>
        <yi-button text
            type="warning"
            @click="showWarning()"
            line>警告</yi-button>
        <yi-button text
            type="error"
            @click="showError()"
            line>错误</yi-button>
        <yi-button text
            type="info"
            @click="showInfo()"
            line>信息</yi-button>`,
  methods: {
    showSuccess () {
      this.$notice({
        title: '通知',
        message: '成功通知',
        type: 'success'
      })
    },
    showWarning () {
      this.$notice({
        title: '通知',
        message: '警告通知',
        type: 'warning'
      })
    },
    showError () {
      this.$notice({
        title: '通知',
        message: '错误通知',
        type: 'error'
      })
    },
    showInfo () {
      this.$notice({
        title: '通知',
        message: '消息通知',
        type: 'info'
      })
    }
  }
}

export default {
  base, type
}
