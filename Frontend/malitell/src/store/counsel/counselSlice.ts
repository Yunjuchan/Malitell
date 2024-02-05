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

export const counselSlice = createSlice({
    name: "counsel",
    initialState,
    reducers: {
        loadCounselors: (state, action) => {
            state.counselorList = action.payload.data
        }
    }
})

