import axios, { Method } from 'axios';

interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  status: number;
}

const baseUrl = 'https://uess-server-4111d20e5a69.herokuapp.com' // process.env.NEXT_PUBLIC_BASE_URL

export async function api<T>(
  method: Method,
  endpoint: string,
  data: Record<string, unknown>): Promise<ApiResponse<T>> {
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
          console.log('amin res', res);
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