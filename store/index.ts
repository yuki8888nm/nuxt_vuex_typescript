import { RootState, RootActionPayloads, RootMutationPayloads, RootGetterResults, Mutations, Actions, Getters } from './index.d'

export const state: () => RootState = (): RootState => ({
  hoge: '',
  fuga: 0,
});

export const mutations: Mutations<RootState, RootMutationPayloads> = {
  changeRootHoge(state, payload) {
    state.hoge = payload.value;
  },
  changeRootFuga(state, payload) {
    state.fuga = payload.value;
  },
};

export const actions: Actions<RootState, RootMutationPayloads, RootActionPayloads, RootGetterResults> = {
  save({ commit }, payload) {
    commit('changeRootHoge', { value: payload.hoge });
    commit('changeRootFuga', { value: payload.fuga });
  },
};

export const getters: Getters<RootState, RootGetterResults> = {
  doubleFuga(state) {
    return state.fuga * 2;
  },
};
