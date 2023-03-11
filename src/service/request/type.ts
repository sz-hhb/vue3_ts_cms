import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface HYRequestInterceptors {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: any) => any;
  responseInterceptorCatch?: (error: any) => any;
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors;
  showLoading?: boolean;
}
