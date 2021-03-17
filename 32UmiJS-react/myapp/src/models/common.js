export default {
  namespace: 'common',
  state: {
    text: 'index',
    list: [],
  },

  // 同步方法
  reducers: {
    getList(state, { payload: name }) {
      console.log(state, name);
      return { ...state, text: name };
    },
  },

  // 异步方法
  effects: {},
};
