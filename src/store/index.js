import Vuex from 'vuex'
import Vue from 'vue'
import {_} from 'vue-underscore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: {
      animal: 'Dolphin',
      plant: 'Tullip',
      mineral: 'Salt',
    }
  },
  getters: {
    allOptions(state) {
      return state.options;
    }
  },
  actions: {
    deleteOptionKey(context, key) {
      context.commit('deleteOptionKey', key)
    }
  },
  mutations: {
    deleteOptionKey: function(state, key) {
      state.options = _.omit(state.options, key)
    }
  },
});
