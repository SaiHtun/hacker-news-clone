import Vue from 'vue';
import Vuex from 'vuex';
import types from '@/types.js';

Vue.use(Vuex);
const BASE_URL = 'https://api.hackernews.io';

export default new Vuex.Store({
  state: {
    newsItems: [],
    currentNewsItem: {},
    loading: false,
  },
  mutations: {
    [types.SET_NEWS_ITEMS](state, items) {
      state.newsItems = items;
    },
    [types.SET_NEWS_ITEM](state, item) {
      state.currentNewsItem = item;
    },
    [types.ADD_NEWS_ITEMS](state, items) {
      const obj = {};
      state.newsItems = state.newsItems.concat(items).filter((item) => {
        if (!obj[item.id]) {
          obj[item.id] = true;
          return true;
        }
        return false;
      });
    },
    [types.SET_NEWS_ITEM](state, item) {
      state.currentNewsItem = item;
    },
    [types.SET_LOADING](state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    [types.GET_NEWS_ITEMS]: ({ commit }, { type, page = 1 }) => {
      if (page === 1) {
        commit(types.SET_NEWS_ITEMS, '');
      }
      commit(types.SET_LOADING);
      setTimeout(async () => {
        const response = await fetch(`${BASE_URL}/${type}?page=${page}`);
        const items = await response.json();
        if (page === 1) {
          commit(types.SET_NEWS_ITEMS, items);
        } else {
          commit(types.ADD_NEWS_ITEMS, items);
        }
        commit(types.SET_LOADING);
      }, 1000);
    },
    [types.GET_NEWS_ITEM]: ({ commit }, id) => {
      commit(types.SET_LOADING);
      commit(types.SET_NEWS_ITEM, '');
      setTimeout(async () => {
        const response = await fetch(`${BASE_URL}/item/${id}`);
        const item = await response.json();
        console.log(item);
        commit(types.SET_NEWS_ITEM, item);
        commit(types.SET_LOADING);
      }, 1000);
    },
  },
  modules: {
  },
});
