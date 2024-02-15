import { api } from "../axiosInstance";

// 캡슐머신
export const capsule = () => {
  const res = api
    .get("/capsule/get")
    .then((res) => {
      // 응답 데이터 명언 phrases, 영상 url videoUrl
      return res.data;
    })
    .catch((err) => console.log(err));
  return res;
};
