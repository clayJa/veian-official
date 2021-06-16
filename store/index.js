import { getMenu } from '@/service/public'
export const state = () => ({
  globalModalVisible: false,
  menus: [],
  currentPageId: null
});

export const mutations = {
  setGlobalModalVisible(state, payload){
    state.globalModalVisible = payload;
  },
  setMenus(state, payload){
    state.menus = payload;
  },
  setCurrentPageId(state, payload){
    state.currentPageId = payload;
  },
};

export const actions = {
  // setglobalModalVisible(vuexContext, payload){
  //   vuexContext.commit('setglobalModalVisible', payload);
  // },
  async getPageData(vuexContext, payload) {
    const res = await getMenu(payload)
    return res
  }
};

export const getters = {
  getGlobalModalVisible(state){
    return state.globalModalVisible;
  },
  getMenus(state){
    return state.menus;
  },
  getCurrentPageId(state){
    return state.currentPageId;
  },
};

