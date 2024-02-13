import { createSlice } from "@reduxjs/toolkit";
import { api, authApi } from "../axiosInstance";

// 채팅방 생성 api
// 요청 데이터 counselorSeq: number, clientSeq: number
// 아무것도 없어도 채팅창이 생성됨
export const createChat = (data: object) => {
  api.post('/chat/room', {data})
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.error("Failed to Create Chat:", error)
  })
}

// 채팅창 목록 조회 (최근순)
export const fetchchatList = () => {
  authApi.get('/chat/rooms')
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.error("Failed to fetch:", error)
  })
}

// 특정 채팅방 조회 api
// chatSeq 필요
export const fetchchatDetail = (chatSeq: string) => {
  api.get(`/chat/room/${chatSeq}`)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.error("Failed to fetch:", error)
  })
}


// export const chatSlice = createSlice({
//   name: "chat",
//   initialState
// })