import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const get = (url, config = {}) => apiClient.get(url, config);
export const post = (url, data, config = {}) =>
  apiClient.post(url, data, config);
export const put = (url, data, config = {}) => apiClient.put(url, data, config);
export const del = (url, config = {}) => apiClient.delete(url, config);

export const mockApiRequest = async (url, payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payload.username === "admin" && payload.password === "1234") {
        resolve({ message: "Успешный вход!", token: "nntoken" });
      } else {
        reject({ message: "Неверный логин или пароль" });
      }
    }, 1000);
  });
};
