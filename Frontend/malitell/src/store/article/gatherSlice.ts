import { api, authApi } from "../axiosInstance";

export interface SelfHelpGroupForm {
  selfHelpGroupTitle: string;
  selfHelpGroupContent: string;
  times: Array<number>;
  selfHelpType: string;
  selfHelpGroupHeadCount: number;
  title: string;
  content: string;
  worryTagSeq: number;
}
// 자조모임 모집 게시글 작성
//SH는 self-helf 귀찮아서 줄였음
// selfHelpGroupTitle: string, selfHelpGroupContent: string, times: number, selfHelpType:string, selfHelpGroupHeadCount: number, title:string, content:string
export const createSHGroup = (data: SelfHelpGroupForm) => {
  const res = authApi
    .post("/gathering", {
      "selfHelpGroupTitle": data.selfHelpGroupTitle,
      "selfHelpGroupContent": data.content,
      "times": data.times,
      "selfHelpType": data.selfHelpType,
      "selfHelpGroupHeadCount": data.selfHelpGroupHeadCount,
      "title": data.title,
      "content": data.content,
      "worryTagSeq": data.worryTagSeq
    })
    .then((res) => {
      // 응답 데이터 : 자조모임 게시글 번호
      return res.data;
    });
  return res;
};

// 자조모임 모집 게시글 조회
//SH는 self-helf 귀찮아서 줄였음
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
    // 응답 : 자조모임 게시글 번호?? 전체 필요
    console.log(response.data)
    return response.data;
  });
  return res
};

// 자조모임 게시글 삭제
export const deleteSHGroup = (gatheringSeq: number) => {
  api.delete(`/gathering/${gatheringSeq}`).then((response) => {
    // 응답 : 응답 상태만
    return response.data;
  });
};

// 자조모임 참가
export const joinSHGroup = (gatheringSeq: number) => {
  api.post("/selfHelpGroup/participate", { gatheringSeq }).then((response) => {
    return response.data;
  });
};

// 자조모임 참가 조회
export const mySHGroup = () => {
  api.get("/selfHelpGroup/all").then((response) => {
    // { 자조모임 이름 String title,
    //   자조모임 설명 String content,
    //   자조모임 회차 TimeStamp time ,
    //   자조모임 태그 enum selfHelpType} 와 200 상태 코드 를 담은 ResponseEntity
    return response.data;
  });
};

// // 자조모임 탈퇴
// export const leaveSHGroup = (gatheringSeq: number) => {
//   api.delete("/selfHelpGroup/leave", {gatheringSeq})
//   .then((response) => {
//     // 응답데이터: 상태코드
//     return response.data
//   })
// }

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
  api.get("/mypage/scrap").then((response) => {
    // 응답 데이터 gatheringSeq, title
    return response.data;
  });
};
