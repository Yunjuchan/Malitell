import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../axiosInstance";

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

export const login = (accessToken: string) => {
  return (dispatch: Dispatch) => {
    api
      .post("/login", {
        accessToken: accessToken,
      })
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

export const logout = (accsessToken: string) => {
  return (dispatch: Dispatch) => {
    api
      .post("/logout", {
        accsessToken: accsessToken,
      })
      .then((response) => {
        // 로그아웃 요청이 성공하면 Redux store의 user 정보를 삭제
        dispatch(userLogout());
      })
      .catch((error) => {
        console.error("Failed to logout:", error);
      });
  };
};

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
