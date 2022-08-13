import axios, { AxiosRequestConfig } from 'axios';
import { config } from '@src/config';

const { someApiKey } = config;

const apiClient = axios.create({
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use((reqConfig: AxiosRequestConfig) => {
  reqConfig.headers!['x-api-key'] = someApiKey;
  return reqConfig;
});

export default apiClient;
