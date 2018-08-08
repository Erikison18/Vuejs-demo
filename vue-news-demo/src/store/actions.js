import * as types from './type'

export default {
// 头部信息
  SHOW_HEAD_SUCC: ({commit}) => {
    commit(types.HEAD_SHOW_SUCCESS)
  },
  SHOW_HEAD_FAIL: ({commit}) => {
    commit(types.HEAD_SHOW_FAIL)
  }
}
