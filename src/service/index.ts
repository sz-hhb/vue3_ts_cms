import HYRequest from "./request";

const hyRequest = new HYRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
});

export default hyRequest;
