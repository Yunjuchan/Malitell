import { createSlice } from "@reduxjs/toolkit";
import { api } from "../axiosInstance"

export interface filterState {
    name: string;
    date: string;
    time: string;
    symptom: string;
    style: string;
    gender: string;
    counselorList: Array<object>;
}

const initialState: filterState = {
    name: "",
    date: "",
    time: "",
    symptom: "",
    style: "",
    gender: "",
    counselorList: [],
}

export const fetchCounselorList = () => {
    const data = api.get(`/getCounselorList`)
    .then((response) => {
        return response.data
    })
    .catch((error) => console.log("load fail"))

    return data
}



// counselor 상세 정보 불러오는 api
// counselor 상세 정보에는 상담가 소개, 상담가 사진, 상담가 이름, 상담가 평점, 상담가에 대한 리뷰
export const fetchCounselorDetail = (counselSeq: number) => {
    const data = api.get(`/getCounselor/${counselSeq}`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log("load fail")
    })
    
    return data
}

// 상담 후기 작성 
// counselingSeq: number, content: string, grade: number
export const createReview = (data: object) => {
    api.post(`/counseling/review/${"data.counselingSeq"}`)   // 일단 $ 안 string으로 바꿔둠
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.error("Failed to create:", error)
    })
}

// 특정 상담가 상담 후기 데이터
// 이거 api 매핑 이미 연결되어있으니깐 getCounselorList로 한거겠지??
export const fetchReviewList = (counselorSeq: number) => {
    api.get(`/getCounselorList/${counselorSeq}`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.error("Failed to load:", error)
    })
}


export const counselSlice = createSlice({
    name: "counsel",
    initialState,
    reducers: {
        loadCounselors: (state, action) => {
            state.counselorList = action.payload.data
        }
    }
})

