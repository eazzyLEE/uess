/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, Method } from 'axios';

const baseUrl = 'https://uess-server-4111d20e5a69.herokuapp.com' // 

export async function api(
  method: Method,
  endpoint: string,
  data?: Record<string, unknown>): Promise<AxiosResponse | any> {
    return new Promise((resolve, reject) => {
      axios({
        method: method,
        url: `${baseUrl}${endpoint}`,
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          resolve(res?.data || res);
        })
        .catch(error => {
          console.log('ERR%', error);
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