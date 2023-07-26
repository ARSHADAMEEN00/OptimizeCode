import axiosApi from "axios";

// apply base url for axios
export const TOKEN_PREFIX = "token";
// const BASE_URL_LOCAL = 'http://localhost:4000';
const BASE_URL_PROD = "https://api.zealcurtains.com";

const axios = axiosApi.create({
  baseURL: BASE_URL_PROD,
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => error
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    console.log(err.response.status);

    return Promise.reject(err);
  }
);

export async function get(url, config = {}) {
  return axios.get(url, { ...config }).then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axios
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axios
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function patch(url, data, config = {}) {
  return axios
    .patch(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return axios.delete(url, { ...config }).then((response) => response.data);
}
