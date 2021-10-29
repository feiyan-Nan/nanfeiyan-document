const base = {
  name: 'DrawerBase',
  template:
    `<yi-button text
               @click="drawerShow = true; direction = 'ltr'"
               line>从左往右</yi-button>
    <yi-button text
               @click="drawerShow = true; direction = 'rtl'"
               line>从右往左</yi-button>
    <yi-button text
               @click="drawerShow = true; direction = 'ttb'"
               line>从上往下</yi-button>
    <yi-button text
               @click="drawerShow = true; direction = 'btt'"
               line>从下往上</yi-button>

    <yi-drawer title="我是标题"
              :visible.sync="drawerShow"
              :direction="direction">
      <span style="padding: 16px;">我是抽屉!</span>
    </yi-drawer>`,
  data: {
    drawerShow: false,
    direction: 'rtl'
  }
}

const append = {
  name: 'DrawerAppend',
  template:
    `<yi-button text
               @click="drawerShow = true;"
               line>打开嵌套抽屉</yi-button>

    <yi-drawer size="50%"
              :with-header="false"
              :visible.sync="drawerShow">
      <span style="padding: 16px;">我是外层抽屉!</span>
      <yi-button text
               @click="innerDrawerShow = true;"
               line>打开嵌套抽屉</yi-button>
      <yi-drawer :with-header="false"
                 :append-to-body="true"
                 :visible.sync="innerDrawerShow">
        <span style="padding: 16px;">我是内层抽屉!</span>
      </yi-drawer>
    </yi-drawer>`,
  data: {
    drawerShow: false,
    innerDrawerShow: false
  }
}

export default {
  base, append
}
