import { ActionContext, Module } from "vuex";
import { RootState } from "../types/root-state";
import { LayoutName } from "./types/layout-name";
import { LayoutState } from "./types/layout-state";

const layoutModule: Module<LayoutState, RootState> = {
  namespaced: true,
  state: () => ({
    name: LayoutName.Default,
  }),
  mutations: {
    SET_NAME(state: LayoutState, name: LayoutName): void {
      state.name = name;
    },
  },
  actions: {
    SET_NAME(
      { commit }: ActionContext<LayoutState, RootState>,
      name: string
    ): void {
      commit("SET_NAME", name);
    },
  },
  getters: {
    GET_NAME(state: LayoutState): string {
      return `${state.name}-layout`;
    },
  },
};

export default layoutModule;
