import axios from 'axios';

const fetcher = (config) => async (...args) => {
  const [url] = args;
  
  const defaultConfig = {
    method: 'GET',
    headers: {},
    timeout: 10000,
  };

  const mergedConfig = { ...defaultConfig, ...config, url };

  try {
    const response = await axios(mergedConfig);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Response error:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
};

export default fetcher;