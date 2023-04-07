import { createStore, Store, useStore as useVuexStore } from "vuex";
import login from "./login/login";
import { IRootState, IStoreType } from "./types";

const store = createStore<IRootState>({
  state: () => {
    return {};
  },
  modules: {
    login,
  },
});

export function setUpStatus() {
  store.dispatch("login/loadingStatusAction");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
