const base = {
  name: 'DialogBase',
  template:
    `<yi-tag
    v-for="tag in tags"
    :key="tag.name"
    closable
    class="spacing"
    :type="tag.type">
    {{tag.name}}
  </yi-tag>
    `,
  data: {
    tags: [
      { name: '标签一', type: '' },
      { name: '标签二', type: 'success' },
      { name: '标签三', type: 'info' },
      { name: '标签四', type: 'warning' },
      { name: '标签五', type: 'danger' }
    ]
  }
}

export default {
  base
}
