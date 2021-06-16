export const state = () => ({
  globalModalVisible: false,
  menus: [],
});

export const mutations = {
  setGlobalModalVisible(state, payload){
    state.globalModalVisible = payload;
  },
  setMenus(state, payload){
    state.menus = payload;
  },
};

export const actions = {
  // setglobalModalVisible(vuexContext, payload){
  //   vuexContext.commit('setglobalModalVisible', payload);
  // },
};

export const getters = {
  getGlobalModalVisible(state){
    return state.globalModalVisible;
  },
  getMenus(state){
    return state.menus;
  },
};

