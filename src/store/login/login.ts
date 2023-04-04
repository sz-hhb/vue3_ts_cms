import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import { IAccount } from "@/service/login/type";
import {
  accountLogin,
  getUserInfoById,
  getMenuByRoleId,
} from "@/service/login/login";
import localCache from "@/utils/cache";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      menuList: [],
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload;
    },
    changeMenuList(state, payload) {
      state.menuList = payload;
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const { code, data } = await accountLogin(payload);
      commit("changeToken", data.token);
      localCache.setCache("token", data.token);

      const userInfoResult = await getUserInfoById(data.id);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      localCache.setCache("userInfo", userInfo);

      const menuListResult = await getMenuByRoleId(userInfo.role.id);
      const menuList = menuListResult.data;
      commit("changeMenuList", menuList);
      localCache.setCache("userMenuList", menuList);
    },
    loadingStatusAction({ commit }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }

      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }

      const menuList = localCache.getCache("userMenuList");
      if (menuList) {
        commit("changeMenuList", menuList);
      }
    },
  },
};

export default loginModule;
