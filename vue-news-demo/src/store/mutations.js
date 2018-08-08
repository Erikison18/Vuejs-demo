import {
  HEAD_SHOW_SUCCESS,
  HEAD_SHOW_FAIL
} from './type'

const state = {
  headShow1: true
}

const mutations = {
  [HEAD_SHOW_SUCCESS] (state) {
    state.headShow1 = true
  },
  [HEAD_SHOW_FAIL] (state) {
    state.headShow1 = false
  }
}

const getters = {
  headShow2 (state) {
    return state.headShow1
  }
}

export default {
  getters,
  state,
  mutations
}
