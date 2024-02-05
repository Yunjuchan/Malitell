import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../axiosInstance";
import { FormData } from "./authTypes";

export interface UserState {
  userId: string;
  accessToken: string;
  nickname: string;
  userImg: string;
}

const initialState: UserState = {
  userId: "",
  accessToken: "",
  nickname: "",
  userImg: "",
};

// 이메일 로그인
export const login = (accessToken: string) => {
  return (dispatch: Dispatch) => {
    api
      .post("/login")
      .then((response) => {
        // 서버에서 받은 user 정보를 Redux store에 저장
        // 서버에서 받은 데이터가 수정해야한다면 더 작성해야함.
        dispatch(saveUserInfo(response.data));
      })
      .catch((error) => {
        console.error("Failed to login:", error);
      });
  };
};

// 로그아웃
export const logout = (accsessToken: string) => {
  return (dispatch: Dispatch) => {
    api
      .post("/logout")
      .then((response) => {
        // 로그아웃 요청이 성공하면 Redux store의 user 정보를 삭제
        dispatch(userLogout());
      })
      .catch((error) => {
        console.error("Failed to logout:", error);
      });
  };
};

// 내담자 회원가입
export const signupClient = (formData: FormData) => {
  const data = api
    .post(
      `/user/join/client`,
      { formData },
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Failed to Signup:", error);
    });
  return data;
};

// 상담자 회원가입
export const signupCounselor = (formData: FormData) => {
  const data = api
    .post(`/user/join/counselor`, { formData })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Failed to Signup:", error);
    });
  return data;
};

// 아이디 중복 검증 api
export const idCheck = (userId: string) => {
  api
    .get(`/user/exists/${userId}`, 
    // { params: { userId: userId } }
    )
    .then((response) => {
      return response.data; // 결과 값 이미 존재하면 true 아니라면 false
    });
};

// 이메일 인증 전송 api
// 요청 데이터 userId: string, email: string 
export const sendVerifyEmail = (data: object) => {
  api.get('/auth/email-certification', {data})
  .then((response) => {
    // 전송 성공 200 / 전송 실패 500
    return response.data
  })
  .catch((error) => {
    console.error("Failed to Send:", error)
  })
}

// 이메일 인증 확인 api
// 요청 데이터 userId: string, email: string, certificationNumber: number
export const verifyEmail = (data: object) => {
  api.get('/auth/email-certification', {data})
  .then((response) => {
    // 인증 성공 200 / 인증 실패 401
    return response.data
  })
  .catch((error) => {
    console.error("Failed to Verify:", error)
  })
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 로그인 시 store의 유저정보 저장
    saveUserInfo: (state, action) => {
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
      state.nickname = action.payload.nickname;
      state.userImg = action.payload.imageUrl;
    },

    // 로그아웃 시 store의 유저정보 삭제
    userLogout: (state) => {
      state.userId = "";
      state.accessToken = "";
      state.nickname = "";
      state.userImg = "";
    },
  },
});

export const { saveUserInfo, userLogout } = userSlice.actions;

export default userSlice.reducer;
