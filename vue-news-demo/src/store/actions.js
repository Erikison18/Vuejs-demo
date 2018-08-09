import * as types from './type'

export default {
// 头部信息
  SHOW_HEAD_SUCC: ({commit}) => {
    commit(types.HEAD_SHOW_SUCCESS)
  },
  SHOW_HEAD_FAIL: ({commit}) => {
    commit(types.HEAD_SHOW_FAIL)
  },
  // loading组件
  'showLoading': ({commit}) => {
    commit(types.SHOW_LOADING)
  },
  'hideLoading': ({commit}) => {
    commit(types.HIDE_LOADING)
  },
  // 底部组件
  SHOW_FOOT_SUCC: ({commit}) => {
    commit(types.FOOT_SHOW_SUCCESS)
  },
  SHOW_FOOT_FAIL: ({commit}) => {
    commit(types.FOOT_SHOW_FAIL)
  }
}
