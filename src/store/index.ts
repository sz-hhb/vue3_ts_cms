import { createStore } from "vuex";
import login from "./login/login";
import { IRootState } from "./types";

const store = createStore<IRootState>({
  state: () => {
    return {};
  },
  modules: {
    login,
  },
});

export default store;
