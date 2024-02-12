import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8080'
const OPENVIDU_URL = 'http://i10c208.p.ssafy.io:8443/openvidu/api'
const Access_Token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJoYW5qYWVoeWVvbiIsInJvbGUiOiJST0xFX0NMSUVOVCIsImlhdCI6MTcwNzc1NTQ3MSwiZXhwIjoxNzA3NzU3MjcxfQ.VklnX7xhxImVC7wfJp08PuZDCron991f0aBa1GjN4Ic"
export const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
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

export const authApi: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access_Token": Access_Token,
        "Content-type": "application/json",
      },
});

export const ovApi: AxiosInstance = axios.create({
    baseURL: OPENVIDU_URL
});
