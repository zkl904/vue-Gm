import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'

Vue.use(Vuex)

const state = {

}
const mutations = {

}

const getters = {

}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {
    account
  }
})
