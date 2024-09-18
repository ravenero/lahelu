import axios from 'axios';

const httpClient = axios.create({
  baseURL: "https://api.mitradasakaryapratama.com",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

httpClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
    }
    return Promise.reject(error);
  },
);

export { httpClient };
