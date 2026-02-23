/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, Method } from 'axios';

const baseUrl = 'https://uess-server-production.up.railway.app/api' // 
const AUTH_TOKEN_KEY = 'admin_token'

function getAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
  }
  return headers
}

export async function api(
  method: Method,
  endpoint: string,
  data?: Record<string, unknown>): Promise<AxiosResponse | any> {
    return new Promise((resolve, reject) => {
      axios({
        method: method,
        url: `${baseUrl}${endpoint}`,
        data,
        headers: getAuthHeaders(),
      })
        .then(res => {
          resolve(res?.data || res);
        })
        .catch(error => {
          console.log('ERR%', error);
          if (error?.response?.status === 401 && typeof window !== 'undefined') {
            localStorage.removeItem(AUTH_TOKEN_KEY);
            window.location.href = '/hub/login';
            return;
          }
          if (error && !error.response) {
            console.log(
              'Could not connect to the server, please check your internet connection',
            );
            reject(new Error());
          }
          reject(error.response?.data);
        });
    });
} 