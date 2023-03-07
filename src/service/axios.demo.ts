import axios from "axios";

axios.defaults.baseURL = "http://httpbin.org";
axios.defaults.timeout = 10000;

console.log(process.env.VUE_APP_BASE_URL);

axios
  .get("/get", {
    params: {
      name: "coderwhy",
      age: 18,
    },
  })
  .then((res) => {
    console.log(res);
  });

axios
  .post("/post", {
    data: {
      name: "why",
      age: 18,
    },
  })
  .then((res) => {
    console.log(res);
  });

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return err;
  }
);

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return err;
  }
);
