import { createStore } from "vuex";
import layoutModule from "./layout";
import { RootState } from "./types/root-state";

export default createStore<RootState>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    layout: layoutModule,
  },
});
