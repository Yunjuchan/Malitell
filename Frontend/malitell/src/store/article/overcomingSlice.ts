import { api } from "../axiosInstance"

export const fetchOvercomingList = () => {
    const res = api.get('/overComing/getBoardList')
    .then((res) => {
        return res.data
    })
    .catch((error) => console.log("load fail", error))
    return res
}