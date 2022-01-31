import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

apiClient.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
      },
    };
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => {
    if (response.data) return response.data;
    else return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
