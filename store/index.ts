export const state: () => any = (): any => ({
  hoge: '',
  fuga: 0,
});

export const mutations: any = {
  rootChangeHoge(state, payload) {
    state.hoge = payload.value;
  },
  rootChangeFuga(state, payload) {
    state.fuga = payload.fuga;
  },
};

export const actions: any = {
  save({ commit }, payload) {
    commit('rootChangeHoge', { value: payload.hoge });
    commit('rootCchangeFuga', { value: payload.fuga });
  },
};

export const getters: any = {
  halfFuga(state) {
    return state.fuga / 2;
  },
};
