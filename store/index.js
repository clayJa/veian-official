export const state = () => ({
  isMobileMenu: true,
  menus: []
});

export const mutations = {
  setIsMobileMenu(state, payload){
    state.isMobileMenu = payload;
  },
  setMenus(state, payload){
    state.menus = payload;
  }
};

export const actions = {
  setIsMobileMenu(vuexContext, payload){
    vuexContext.commit('setIsMobileMenu', payload);
  },
};

export const getters = {
  getIsMobileMenu(state){
    return state.isMobileMenu;
  },
  getMenus(state){
    return state.menus;
  }
};

