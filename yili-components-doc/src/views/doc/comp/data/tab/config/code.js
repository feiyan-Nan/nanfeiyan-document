const base = {
  name: 'TabsBase',
  template:
    `<yi-tabs v-model="activeName" @tab-click="handleClick">
    <yi-tab-pane label="用户管理" name="first">用户管理</yi-tab-pane>
    <yi-tab-pane label="配置管理" name="second">配置管理</yi-tab-pane>
    <yi-tab-pane label="角色管理" name="third">角色管理</yi-tab-pane>
    <yi-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</yi-tab-pane>
  </yi-tabs>`,
  data: {
    activeName: 'second'
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}

const card = {
  name: 'TabsCard',
  template:
    `<yi-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <yi-tab-pane label="用户管理" name="first">用户管理</yi-tab-pane>
    <yi-tab-pane label="配置管理" name="second">配置管理</yi-tab-pane>
    <yi-tab-pane label="角色管理" name="third">角色管理</yi-tab-pane>
    <yi-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</yi-tab-pane>
  </yi-tabs>`,
  data: {
    activeName: 'second'
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}

const position = {
  name: 'TabsPosition',
  template:
    `<div style="margin-bottom:16px">
      <yi-button text
                 @click="position = 'top'"
                 line>上</yi-button>
      <yi-button text
                 @click="position = 'right'"
                 line>右</yi-button>
      <yi-button text
                 @click="position = 'bottom'"
                 line>下</yi-button>
      <yi-button text
                 @click="position = 'left'"
                 line>左</yi-button>
    </div>
    
    <yi-tabs v-model="activeName" :tab-position="position" @tab-click="handleClick">
      <yi-tab-pane label="用户管理" name="first"><div style="height:100px">用户管理</div></yi-tab-pane>
      <yi-tab-pane label="配置管理" name="second"><div style="height:100px">配置管理</div></yi-tab-pane>
      <yi-tab-pane label="角色管理" name="third"><div style="height:100px">角色管理</div></yi-tab-pane>
      <yi-tab-pane label="定时任务补偿" name="fourth"><div style="height:100px">定时任务补偿</div></yi-tab-pane>
    </yi-tabs>`,
  data: {
    activeName: 'second',
    position: 'left'
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}

export default {
  base, card, position
}
