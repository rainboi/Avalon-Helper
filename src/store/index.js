import Vue from 'vue'
import Vuex from 'vuex'
import players from './modules/players';
import roles from './modules/roles';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inGame: false,
  },
  getters: {
    inGame: (state) => state.inGame,
  },
  actions: {
    startGame({ commit }) {
      commit('toggleGame', true);
    },
    restartGame({ commit }) {
      commit('toggleGame', false);
    }
  },
  mutations: {
    toggleGame: (state, value) => (state.inGame = value)
  },
  modules: {
    players,
    roles,
  }
})
