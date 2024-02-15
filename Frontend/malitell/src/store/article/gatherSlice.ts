import { resolveSrv } from "dns/promises";
import { api, authApi, loginApi } from "../axiosInstance";
import axios, { toFormData } from "axios";

export interface SelfHelpGroupForm {
  selfHelpGroupTitle: string;
  selfHelpGroupContent: string;
  times: Array<number>;
  selfHelpType: string;
  headcount: number;
  title: string;
  content: string;
}
// 자조모임 모집 게시글 작성
// selfHelpGroupTitle: string, selfHelpGroupContent: string, times: number, selfHelpType:string, selfHelpGroupHeadCount: number, title:string, content:string
export const createSHGroup = (data: SelfHelpGroupForm) => {
  console.log(data)
  const res = authApi
    .post("/gathering", {
      selfHelpGroupTitle: data.selfHelpGroupTitle,
      selfHelpGroupContent: data.content,
      times: data.times,
      selfHelpType: data.selfHelpType,
      selfHelpGroupHeadCount: data.headcount,
      title: data.title,
      content: data.content,
    })
    .then((res) => {
      // 응답 데이터 : 자조모임 게시글 번호
      return res.data;
    });
  return res;
};

// 자조모임 모집 게시글 조회
export const fetchSHGroup = () => {
  const res = api.get("/gathering/getBoardList").then((response) => {
    // 응답 데이터 : 자조모임 게시글 번호
    // 게시글 제목 : title
    // 게시글 작성자 : username
    // 게시글 조회수 : hit
    // 게시글 작성 시간 : time
    // 200 상태 코드를 담은 ResponseEntity
    return response.data;
  });
  return res;
};

// 자조모임 게시글 수정
// 요청데이터 / gatheringSeq: number, title: string, content: string, worryTagSeq: number;
export const editSHGroup = (gatheringSeq: number) => {
  api.put(`/gathering/${gatheringSeq}`).then((response) => {
    // 응답 : 자조모임 게시글 번호
    return response.data;
  });
};

// 자조모임 게시글 상세 조회
export const sHGroupDetail = (gatheringSeq: number) => {
  const res = api.get(`/gathering/view/${gatheringSeq}`).then((response) => {
    return response.data;
  });
  return res;
};

// 자조모임 게시글 삭제
export const deleteSHGroup = (gatheringSeq: number) => {
  const res = authApi.delete(`/gathering/delete/${gatheringSeq}`).then((response) => {
    return response.data;
  });
  return res
};


// 자조모임 참가
export const joinSHGroup = (gatheringSeq: number) => {
  const formData = new FormData();
  formData.append('gatheringSeq', gatheringSeq.toString());

  const res = axios.post("https://i10c208.p.ssafy.io:8080/api/selfHelpGroup/participate", formData, {
    headers: {
      'Access_Token': sessionStorage.getItem('Access_Token'),
      'Content-Type': 'multipart/form-data'
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => console.error(error));

  return res;
};

// // 자조모임 탈퇴
export const leaveSHGroup = (gatheringSeq: number) => {
  const res = authApi.delete(`/mypage/selfHelpGroup/leave/${gatheringSeq}`)
  .then((res) => {
    // 응답데이터: 상태코드
    return res.data
  })
  return res;
}

// 자조모임 스크랩
export const scrapSHGroup = (gatheringSeq: number) => {
  api.post("/scrap", { gatheringSeq }).then((response) => {
    return response.data;
  });
};

// 자조모임 스크랩 취소
export const unscrapSHGroup = (gatheringSeq: number) => {
  api.delete(`/scrap/${gatheringSeq}`).then((response) => {
    return response.data;
  });
};

// 내 스크랩 자조모임 이건 auth로 가야할 것 같음
export const myscrapSHGroup = () => {
  const res = authApi.get("/mypage/scrap").then((res) => {
    // 응답 데이터 gatheringSeq, title
    return res.data;
  });
  return res;
};
