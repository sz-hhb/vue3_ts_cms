import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import { IAccount } from "@/service/login/type";
import { mapMenuToRoutes } from "@/utils/map-menu";
import {
  accountLogin,
  getUserInfoById,
  getMenuByRoleId,
} from "@/service/login/login";
import localCache from "@/utils/cache";
import router from "@/router";

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
    changeUserInfo(state, payload: any) {
      state.userInfo = payload;
    },
    changeMenuList(state, payload: any) {
      state.menuList = payload;

      const routes = mapMenuToRoutes(payload);

      routes.forEach((route) => router.addRoute("main", route));
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

      router.push("/main");
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
