import Vuex from 'vuex';
import Vue from 'vue';
import test_data from './test_data.json';
import actions from './actions';
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
    state: test_data,
    actions,
    mutations,
})