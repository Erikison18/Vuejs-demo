import {
  HEAD_SHOW_SUCCESS,
  HEAD_SHOW_FAIL,
  SHOW_LOADING,
  HIDE_LOADING
} from './type'

const state = {
  headShow1: true,
  showLoading: false
}

const mutations = {
  [HEAD_SHOW_SUCCESS] (state) {
    state.headShow1 = true
  },
  [HEAD_SHOW_FAIL] (state) {
    state.headShow1 = false
  },
  [SHOW_LOADING] (state) {
    state.showLoading = true
  },
  [HIDE_LOADING] (state) {
    state.showLoading = false
  }
}

const getters = {
  headShow2 (state) {
    return state.headShow1
  },
  isLoad () {
    return state.showLoading
  }
}

export default {
  getters,
  state,
  mutations
}
