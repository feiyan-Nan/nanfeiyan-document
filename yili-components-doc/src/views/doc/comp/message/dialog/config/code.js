const base = {
  name: 'DialogBase',
  template:
    `<yi-button text
                @click="dialogShow = true"
                line>弹出Dialog</yi-button>
    <yi-dialog title="提示"
              :visible.sync="dialogShow"
              width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <yi-button line @click="dialogShow = false">取 消</yi-button>
        <yi-button type="primary" @click="dialogShow = false">确 定</yi-button>
      </span>
    </yi-dialog>`,
  data: {
    dialogShow: false
  }
}

const append = {
  name: 'DialogAppend',
  template:
  `<yi-button text  @click="outerShow = true">点击打开外层 Dialog</yi-button>
  
  <yi-dialog title="外层 Dialog" :visible.sync="outerShow">
    <yi-dialog
      width="30%"
      title="内层 Dialog"
      :visible.sync="innerShow"
      append-to-body>
    </yi-dialog>
    <div slot="footer" class="dialog-footer">
      <yi-button line @click="outerShow = false">取 消</yi-button>
      <yi-button type="primary" @click="innerShow = true">打开内层 Dialog</yi-button>
    </div>
  </yi-dialog>`,
  data: {
    outerShow: false,
    innerShow: false
  }
}

export default {
  base, append
}
