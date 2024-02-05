import { api } from "../axiosInstance";

// 상담 예약 
// counselorSeq:number, clientSeq:number, datetime:Timestamp
export const reservation = (data: object) => {
  api.post(`/reserver/${"data.counselorSeq"}`)    // 일단 $ 안 string으로 바꿔둠
  .then((response) => {
    // 응답 counselorSeq, 상담일시
    return response.data
  })
}




