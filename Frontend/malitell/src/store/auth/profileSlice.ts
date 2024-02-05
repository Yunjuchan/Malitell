import { createSlice, type Dispatch } from "@reduxjs/toolkit";
import { api, authApi } from "../axiosInstance";

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

// 내 예약 정보 데이터 불러오기
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

// 회원 정보 수정을 위한 내 정보 데이터 불러오기
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

// 내가 스크랩한 글 authApi
export const fetchScrap = () => {
    const data = authApi.get(`mypage/scrap`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log("Failed to load:", error)
    })
    return data
}

// 상담자 정보 수정 authapi
export const editCounselorInfo = (editForm: object) => {
    authApi.put('/mypage/user/counselor', {editForm})
    .then((response) => {
        return response.data
    })
    .catch((error) => console.error("Failed to Edit:", error))
}

// 내담자 정보 수정 authapi
export const editClientInfo = (editForm: object) => {
    authApi.put('/mypage/user/client', {editForm})
    .then((response) => {
        return response.data
    })
    .catch((error) => console.error("Failed to Edit:", error))
}

// 회원 탈퇴 authapi
export const deleteUser = () => {
    authApi.delete('/mypage/user')
    .then((response) => {
        // 뭐를 리턴할지 모르겠음
        // 삭제 잘 되면 200 OK
        // 로그아웃하고 로컬스토리지 토큰 삭제
        return response.data
    })
    .catch((error) => {
        console.error("Failed to delete:", error)
    })
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



