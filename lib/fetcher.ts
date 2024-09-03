import axios, { AxiosRequestConfig } from 'axios';
import { Fetcher } from 'swr';

interface User {
  // Define User interface properties here
}

const fetcher: Fetcher<User, string> = (url: string, config?: AxiosRequestConfig) => {
  const defaultConfig: AxiosRequestConfig = {
    method: 'GET',
    headers: {},
    timeout: 10000,
  };

  const mergedConfig: AxiosRequestConfig = { ...defaultConfig, ...config, url };

  return axios(mergedConfig)
    .then(response => response.data)
    .catch(error => {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request error:', error.request);
        } else {
          console.error('Error:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    });
};

export default fetcher;