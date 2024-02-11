import { timeStamp } from "console";
import { api, authApi } from "../axiosInstance";

export interface ReservationInfo {
  counselorSeq: number;
  counselingDate: number | number[];
}
// 상담 예약
// counselorSeq:number, datetime:Timestamp
export const reservation = (data: ReservationInfo) => {
  const res = authApi
    .post(`/reserve/${data.counselorSeq}`, {
      "counselorSeq": data.counselorSeq,
      "counselingDate": data.counselingDate,
    }) // 일단 $ 안 string으로 바꿔둠
    .then((response) => {
      // 응답 counselorSeq, 상담일시
      console.log(response);
      return response.data;
    });
    return res
};
