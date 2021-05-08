import axios from "axios";

// request拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//基地址
//let base = "http://rsapi.snowpa.cn"; //接口代理地址参见：config/index.js中的proxyTable配置
let base = process.env.VUE_APP_BASE_API
export const POST = (url, params, headers) => {
  if (!headers) {
    return axios.post(`${base}${url}`, params).then((res) => {
      return res.data;
    });
  } else {
    return axios
      .post(`${base}${url}`, params, { headers: headers })
      .then((res) => {
        return res.data;
      });
  }
};

export const GET = (url, params) => {
  return axios.get(`${base}${url}`, { params: params }).then((res) => res.data);
};

export const GetDonwLoad = (url, params) => {
  return axios({
    method: "get",
    url: `${base}${url}`,
    params: params,
    responseType: "blob",
    headers: {},
  });
};

export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then((res) => res.data);
};

export const DELETE = (url, params) => {
  return axios
    .delete(`${base}${url}`, { params: params })
    .then((res) => res.data);
};

export const PATCH = (url, params) => {
  return axios.patch(`${base}${url}`, params).then((res) => res.data);
};
