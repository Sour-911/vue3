import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false, // 登录状态
    user: null,        // 用户信息
  },
  mutations: {
    // 设置登录状态
    SET_LOGIN_STATE(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    // 设置用户信息
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    // 登录
    login({ commit }, user) {
      commit('SET_LOGIN_STATE', true);
      commit('SET_USER', user);
    },
    // 注销
    logout({ commit }) {
      commit('SET_LOGIN_STATE', false);
      commit('SET_USER', null);
    },
  },
  getters: {
    // 获取登录状态
    isLoggedIn: (state) => state.isLoggedIn,
    // 获取用户信息
    user: (state) => state.user,
  },
});