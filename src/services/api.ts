import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { setupInterceptors } from './interceptor';

const apiClient = axios.create({
  baseURL: 'https://wannasimply.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

setupInterceptors(apiClient);

// 封装通用请求函数
export const get = async <T = unknown, P = Record<string, unknown>>(
  url: string,
  params?: P
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.get(url, { params });
  return response.data;
};

export const post = async <T = unknown, P = Record<string, unknown>>(
  url: string,
  data?: P
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.post(url, data);
  return response.data;
};

export const put = async <T = unknown, P = Record<string, unknown>>(
  url: string,
  data?: P
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.put(url, data);
  return response.data;
};

export const del = async <T = unknown>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.delete(url);
  return response.data;
};
