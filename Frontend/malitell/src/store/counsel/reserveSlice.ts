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
    })
    .then((res) => {
      // 응답 counselorSeq, 상담일시
      console.log(res);
      return res.data;
    });
    return res
};
