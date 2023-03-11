import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./type";
import { ElLoading } from "element-plus/lib/index";

class HYRequest {
  instance: AxiosInstance;
  interceptors?: HYRequestInterceptors;
  showLoading?: boolean;
  loading?: any;

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? true;

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在加载中...",
          });
        }
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close();
        }, 3000);
        return res.data;
      },
      (err) => {
        this.loading?.close();
        return err;
      }
    );
  }

  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors?.requestInterceptor(
        config as InternalAxiosRequestConfig
      );
    }
    if (config.showLoading === false) {
      this.showLoading = false;
    }
    this.instance
      .request(config)
      .then((res) => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors?.responseInterceptor(res);
        }
        console.log(res);

        // 这样不会影响下一个请求
        this.showLoading = true;
      })
      .catch((err) => {
        this.showLoading = true;
      });
  }
}

export default HYRequest;
