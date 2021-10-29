const base = {
  name: 'DialogBase',
  template:
    `<yi-badge :value="12" class="spacing">
    <yi-button size="small" line >评论</yi-button>
  </yi-badge>
  <yi-badge :value="3" class="spacing">
    <yi-button size="small" line>回复</yi-button>
  </yi-badge>
  <yi-badge :value="1" class="spacing" type="primary">
    <yi-button size="small" line>评论</yi-button>
  </yi-badge>
  <yi-badge :value="2" class="spacing" type="warning">
    <yi-button size="small" line>回复</yi-button>
  </yi-badge>
  
  <yi-dropdown trigger="click">
    <span class="yi-dropdown-link">
      点我查看<i class="yi-icon yi-icon-down"></i>
    </span>
    <yi-dropdown-menu slot="dropdown">
      <yi-dropdown-item class="clearfix">
        评论
        <yi-badge class="mark" :value="12" />
      </yi-dropdown-item>
      <yi-dropdown-item class="clearfix">
        回复
        <yi-badge class="mark" :value="3" />
      </yi-dropdown-item>
    </yi-dropdown-menu>
  </yi-dropdown>`
}

export default {
  base
}
