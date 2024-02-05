import { createSlice, type Dispatch } from "@reduxjs/toolkit";
import { api } from "../axiosInstance";

export interface profileState {
    role: string;
    userId: string;
    name: string;
    nickname: string;
    email: string;
    gender: string;
    userImg: string;
    birth: string;
    field?: string;
    career?: number;
    grade?: number;
    reservations?: Array<object>;
    articles?: Array<object>;
    comments?: Array<object>;
    reviews?: Array<object>;
}

const initialState: profileState = {
    role: "",
    userId: "",
    name: "",
    nickname: "",
    email: "",
    gender: "",
    userImg: "",
    birth: "",
    field: "",
    career: 0,
    grade: 0,
    reservations: [],
    articles: [],
    comments: [],
    reviews: [],
}

// 내 예약 정보 데이터 
export const fetchReservations = () => {
    return (dispatch: Dispatch) => {
        api.get(`/mypage/reserve`)
        .then((response) => { 
            dispatch(loadReservations(response.data))
        })
        .catch((error) => {
            console.error("Failed to load:", error);
          });
    }
}

// 회원 정보 수정을 위한 내 정보 데이터
export const fetchUserInfo = () => {
    return (dispatch: Dispatch) => {
        api.get(`/mypage/user`)
        .then((response) => {
            dispatch(loadUserInfo(response.data))
        })
        .catch((error) => {
            console.log("Failed to load:", error)
        })
    }

}

// 내가 스크랩한 글
export const fetchScrap = () => {
    const data = api.get(`mypage/scrap`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log("Failed to load:", error)
    })
    return data
}



export const profileSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        loadReservations: (state, action) => {
            state.reservations = action.payload.reservations
        },
        loadUserInfo: (state, action) => {
            // 유저 정보 가져오기
            state.userId = action.payload.userId
            // state.userId = action.payload.userId
            // state.userId = action.payload.userId
            // state.userId = action.payload.userId
            // state.userId = action.payload.userId
            // state.userId = action.payload.userId
            // state.userId = action.payload.userId
            // state.userId = action.payload.userId
            // state.userId = action.payload.userId
        }
    }
})

export const { loadReservations, loadUserInfo } = profileSlice.actions

export default profileSlice.reducer;



