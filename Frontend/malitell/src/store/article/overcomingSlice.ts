import { api, authApi } from "../axiosInstance";
export interface OvercomingForm {
  title: string;
  content: string;
}
export const fetchOvercomingList = () => {
  const res = api
    .get("/overComing/getBoardList")
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error("load fail", error));
  return res;
};

export const createOvercome = (data: OvercomingForm) => {
  const res = authApi.post("/overComing", data).then((res) => {
    return res.data;
  });
  return res;
};

export const overcomeDetail = (boardSeq: number) => {
  const res = api.get(`overComing/view/${boardSeq}`).then((res) => {
    return res.data;
  });
  return res;
};

