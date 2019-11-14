
export default {
  // 命名空间
  namespace: 'num',

  // 原始数据
  state: {
    num: 10000
  },

  // 异步操作
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  // 同步操作
  reducers: {
    changeNum(state, {payload: {type}}) {
      return {...state, num: type==='+'?++state.num: --state.num}
    }
  },

};
