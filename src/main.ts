import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import { registerApp } from "./global";
import hyRequest from "./service";

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(ElementPlus);

registerApp(app);
// app.use(registerApp);

app.mount("#app");

// hyRequest.request({
//   url: "/home/multidata",
//   method: "GET",
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("111");
//       return config;
//     },
//   },
// });

interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}

hyRequest
  .get<DataType>({
    url: "/home/multidata",
    showLoading: false,
  })
  .then((res) => {
    console.log(res);
    console.log(res.data);
    console.log(res.returnCode);
    console.log(res.success);
  });
