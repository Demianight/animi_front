import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Add Authorization header with token if available
const addAuthHeader = (config = {}) => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return config;
};

export const get = (url, config = {}) =>
  apiClient.get(url, addAuthHeader(config));

export const post = (url, data, config = {}) =>
  apiClient.post(url, data, addAuthHeader(config));

export const put = (url, data, config = {}) =>
  apiClient.put(url, data, addAuthHeader(config));

export const del = (url, config = {}) =>
  apiClient.delete(url, addAuthHeader(config));
