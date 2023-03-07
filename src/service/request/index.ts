import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HYRequest {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}

export default HYRequest;