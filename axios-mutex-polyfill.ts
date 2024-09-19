import axios, { AxiosRequestConfig } from "axios";

const mutexes: Record<string, any> = {};

interface Config {
  mutex?: string;
}

function omit(obj: any, keys: string[]) {
  const newObj = { ...obj };
  keys.forEach((key) => delete newObj[key]);
  return newObj;
}

axios.interceptors.request.use((config: Config & AxiosRequestConfig) => {
  if (config.method === 'post' && config.data) {
    if ('mutex' in config.data) {
      let source = mutexes[config.data.mutex];
      if (source) {
        source.cancel();
      }
      source = axios.CancelToken.source();
      mutexes[config.data.mutex] = source;
      config.cancelToken = source.token;
      config.data = omit(config.data, ['mutex']);
    }
  }
  if (config.method === 'get' && config.params) {
    if ('mutex' in config.params) {
      let source = mutexes[config.params.mutex];
      if (source) {
        source.cancel();
      }
      source = axios.CancelToken.source();
      mutexes[config.params.mutex] = source;
      config.cancelToken = source.token;
      config.params = omit(config.params, ['mutex']);
    }
  }
  return config;
});
