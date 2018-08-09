import {
  HEAD_SHOW_SUCCESS,
  HEAD_SHOW_FAIL,
  SHOW_LOADING,
  HIDE_LOADING,
  FOOT_SHOW_SUCCESS,
  FOOT_SHOW_FAIL
} from './type'

const state = {
  headShow1: true,
  showLoading: false,
  footShow: true
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
  },
  [FOOT_SHOW_SUCCESS] (state) {
    state.footShow = true
  },
  [FOOT_SHOW_FAIL] (state) {
    state.footShow = false
  }
}

const getters = {
  headShow2 (state) {
    return state.headShow1
  },
  isLoad () {
    return state.showLoading
  },
  footShow () {
    return state.footShow
  }
}

export default {
  getters,
  state,
  mutations
}
