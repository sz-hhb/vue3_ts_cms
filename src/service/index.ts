import HYRequest from "./request";

const hyRequest = new HYRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});

export default hyRequest;
