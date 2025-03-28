import axios, { Method } from 'axios';

// interface ApiRequestConfig extends AxiosRequestConfig {
//   method: Method;
//   endpoint: string;
//   data?: Record<string, unknown>;
// }

interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  status: number;
}

const baseUrl = 'http://localhost:5555'

export async function api<T>(
  method: Method,
  endpoint: string,
  data: Record<string, unknown>): Promise<ApiResponse<T>> {
  try {
    const response = await axios({
      method,
      url: `${baseUrl}${endpoint}`,
      data: method !== 'GET' ? data : undefined,
      params: method === 'GET' ? data : undefined,
      headers: {
        'Content-Type': 'application/json',
        // ...config.headers,
      },
      // ...config,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        error: error.response.data.message || 'Something went wrong',
        status: error.response.status,
      };
    }
    return {
      error: 'Network error occurred',
      status: 500,
    };
  }
} 