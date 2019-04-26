/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sizes: {
      d1: null,
      d2: null,
      d3: null,
      d4: null,
      d5: null,
    },
    firstName: '',
    lastName: '',
    emailAddress: '',
    subscribeToNewsletter: true,
  },
  getters: {},
  mutations: {
    updateD1(state, payload) {
      state.sizes.d1 = payload;
    },
    updateD2(state, payload) {
      state.sizes.d2 = payload;
    },
    updateD3(state, payload) {
      state.sizes.d3 = payload;
    },
    updateD4(state, payload) {
      state.sizes.d4 = payload;
    },
    updateD5(state, payload) {
      state.sizes.d5 = payload;
    },
    updateFirstName(state, payload) {
      state.firstName = payload;
    },
    updateLastName(state, payload) {
      state.lastName = payload;
    },
    updateEmailAddress(state, payload) {
      state.emailAddress = payload;
    },
    updateSubscribeToNewsletter(state, payload) {
      state.subscribeToNewsletter = payload;
    },
    reset(state) {
      state.sizes.d1 = null;
      state.sizes.d2 = null;
      state.sizes.d3 = null;
      state.sizes.d4 = null;
      state.sizes.d5 = null;
      state.firstName = '';
      state.lastName = '';
      state.emailAddress = '';
      state.subscribeToNewsletter = true;
    },
  },
  actions: {},
});
