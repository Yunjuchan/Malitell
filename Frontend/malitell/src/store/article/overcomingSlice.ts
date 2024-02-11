import { api, authApi } from "../axiosInstance"
export interface OvercomingForm {
    title: string;
    content: string;
}
export const fetchOvercomingList = () => {
    const res = api.get('/overComing/getBoardList')
    .then((res) => {
        return res.data
    })
    .catch((error) => console.log("load fail", error))
    return res
}

export const createOvercome = (data: OvercomingForm) => {
    console.log(data)
    const res = authApi.post('/overComing', data)
    .then((res) => {
        return res.data
    })
    return res
}