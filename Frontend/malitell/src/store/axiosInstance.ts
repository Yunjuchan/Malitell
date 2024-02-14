import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:8080";
const OPENVIDU_URL = "http://i10c208.p.ssafy.io:8443/openvidu/api";

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL + "/api",
  headers: {
    "Content-type": "application/json",
  },
});
export const loginApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

// export const authApi: AxiosInstance = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         "Access_Token": Access_Token,
//         "Content-type": "application/json",
//       },
// });

export const authApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

authApi.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("Access_Token");
  if (token) {
    config.headers["Access_Token"] = token;
  }
  console.log(config);
  return config;
});

const refreshAccessToken = () => {
  const res = authApi
    .get("/user/reissue")
    .then((res) => {
      sessionStorage.setItem("Access_Token", res.headers.access_token)
      return res.headers.access_token
    }
  );
  return res
};

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken(); // access token을 새로 발급받는 함수
      axios.defaults.headers["Access_Token"] = access_token;
      return authApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const ovApi: AxiosInstance = axios.create({
  baseURL: OPENVIDU_URL,
});
