export const state: () => any = (): any => ({
  hoge: '',
  fuga: 0,
});

export const mutations: any = {
  changeHoge(state, payload) {
    state.hoge = payload.value;
  },
  changeFuga(state, payload) {
    state.fuga = payload.fuga;
  },
};

export const actions: any = {
  mdSave({ commit }, payload) {
    commit('changeHoge', { value: payload.hoge });
    commit('changeFuga', { value: payload.fuga });
  },
  mdSaveRoot({ commit }, payload) {
    commit('rootChangeHoge', { value: payload.hoge }, { root: true });
    commit('rootChangeFuga', { value: payload.fuga }, { root: true });
  }
};

export const getters: any = {
  halfFuga(state) {
    return state.fuga / 2;
  },
};
