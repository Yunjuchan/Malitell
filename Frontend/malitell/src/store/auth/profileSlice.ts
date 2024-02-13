import { createSlice, type Dispatch } from "@reduxjs/toolkit";
import { api, authApi } from "../axiosInstance";
import { editUserData } from "../../components/auth/profile/myInfoClient";

// export interface profileState {
//     role: string;
//     userId: string;
//     name: string;
//     nickname: string;
//     email: string;
//     gender: string;
//     userImg: string;
//     birth: string;
//     field?: string;
//     career?: number;
//     grade?: number;
//     reservations?: Array<object>;
//     articles?: Array<object>;
//     comments?: Array<object>;
//     reviews?: Array<object>;
// }

// const initialState: profileState = {
//     role: "",
//     userId: "",
//     name: "",
//     nickname: "",
//     email: "",
//     gender: "",
//     userImg: "",
//     birth: "",
//     field: "",
//     career: 0,
//     grade: 0,
//     reservations: [],
//     articles: [],
//     comments: [],
//     reviews: [],
// }

export interface profileState {
  menu: string;
  menuKo: string;
}

const initialState: profileState = {
  menu: "myInfo",
  menuKo: "내 정보",
};

// 내 예약 정보 데이터 불러오기
export const fetchReservations = () => {
  const res = authApi
    .get(`/mypage/reserve`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error("Failed to load:", error);
    });
  return res;
};

// 회원 정보 수정을 위한 내 정보 데이터 불러오기
export const fetchUserInfo = () => {
  const data = authApi
    .get(`/mypage/user`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("Failed to load:", error);
    });
  return data;
};

// 내가 작성한 글 authApi
export const fetchMyArticles = () => {
    const res = authApi
      .get(`/mypage/getAllBoards`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("Failed to load:", error);
      });
    return res;
  };

// 내가 스크랩한 글 authApi
export const fetchScrap = () => {
  const data = authApi
    .get(`/mypage/scrap`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("Failed to load:", error);
    });
  return data;
};

// 내 상담일지 
export const fetchCounselLog = () => {
  const res = authApi
  .get(`mypage/counselingLog`).then((res) => {
    return res.data;
  })
  return res
}

// 자조모임 참가 조회
export const mySHGroup = () => {
  const res = authApi.get("/mypage/selfHelpGroup/all").then((res) => {
    // { 자조모임 이름 String title,
    //   자조모임 설명 String content,
    //   자조모임 회차 TimeStamp time ,
    //   자조모임 태그 enum selfHelpType} 와 200 상태 코드 를 담은 ResponseEntity
    return res.data;
  });
  return res;
};

// 상담자 정보 수정 authapi
export const editCounselorInfo = (editForm: object) => {
  authApi
    .put("/mypage/user/counselor", { editForm })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error("Failed to Edit:", error));
};

// 내담자 정보 수정 authapi
export const editClientInfo = (editForm: editUserData) => {
  authApi
    .put("/mypage/user/client", {
      name: editForm.name,
      email: editForm.email,
      phone: editForm.phone,
      statusTags: editForm.statusTags,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error("Failed to Edit:", error));
};

// 회원 탈퇴 authapi
export const deleteUser = () => {
  authApi
    .delete("/mypage/user")
    .then((res) => {
      // 뭐를 리턴할지 모르겠음
      // 삭제 잘 되면 200 OK
      // 로그아웃하고 로컬스토리지 토큰 삭제
      return res.data;
    })
    .catch((error) => {
      console.error("Failed to delete:", error);
    });
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileMenu: (state, action) => {
      state.menu = action.payload.menu;
      state.menuKo = action.payload.menuKo;
    },
  },
});

export const { setProfileMenu } = profileSlice.actions;

export default profileSlice.reducer;
