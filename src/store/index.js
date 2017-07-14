import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      id: ''
    },
    actions: {
      setId({commit}, id) {
        commit('SETID', {id});
      }
    },
    mutations: {
      SETID(state, {id}) {
        state = id;
      }
    },
    getters: {
      id(state) {
        return state.id;
      }
    }
  });
}
