import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import { IAccount } from "@/service/login/type";
import { accountLogin } from "@/service/login/login";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const { code, data } = await accountLogin(payload);
      commit("changeToken", data.token);
    },
  },
};

export default loginModule;
