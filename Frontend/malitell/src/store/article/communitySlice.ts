import { api, authApi } from "../axiosInstance"

export interface ArticleForm {
  "title": string;
  "content": string;
  "tagEng": string;
}

export const fetchArticleList = () => {
  const res = api.get("/community/getBoardList")
  .then((res) => {
    // 응답 데이터 : 자조모임 게시글 번호
    // 게시글 제목 : title
    // 게시글 작성자 : username
    // 게시글 조회수 : hit 
    // 게시글 작성 시간 : time
    // 200 상태 코드를 담은 ResponseEntity
    return res.data
  })
  return res
}

export const createArticle = (data: ArticleForm) => {
  console.log(data)
  const res = authApi.post("/community", {"title": data.title, "content": data.content, "worryTag": data.tagEng})
  .then((res) => {
    return res.data
  })
  return res
}

export const articleDetail = (boardSeq: number) => {
  const res = api.get(`community/view/${boardSeq}`)
  .then((res) => {
      return res.data
  })
  return res
}