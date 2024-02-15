import { api } from "../axiosInstance"


// 마렛고 주제 변경
export const mindLetGoTopic = () => {
  api.get("/mindLetGo/updateTopic")
  .then((response) => {
    return response.data
  })
}

// 마렛고 작성
// 요청 mindLetGoTopicSeq: number, content: string
export const createMindLetGo = (data: object) => {
  api.post("/mindLetGo")
  .then((response) => {
    // 상태코드 응답
    return response.data
  })
}

// 마렛고 리스트
export const fetchMindLetGo = () => {
  api.get("/mindLetGo/list")
  .then((response) => {
    return response.data
  })
}