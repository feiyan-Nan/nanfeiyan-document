import { getList } from '@/services/search';

export default {
  namespace: 'search',
  state: {
    text: 'dva',
    list: [],
  },

  // 同步方法
  reducers: {
    getList(state, { payload: name }) {
      console.log(state, name);
      return { ...state, list: name };
    },
  },

  // 异步方法
  effects: {
    *getListAsync({ payload }, { call, put }) {
      const res = yield call(getList, payload);
      console.log(res, 666);
      yield put({
        type: 'getList',
        payload: res,
      });
    },
  },
};
