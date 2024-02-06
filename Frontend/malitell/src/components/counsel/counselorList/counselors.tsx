import React, { useEffect } from "react";
import { Wrapper } from "../../../styles/counsel/counselors";
import Counselor from "./counselor";
import { fetchCounselorList } from "../../../store/counsel/counselSlice";
export default function Counselors() {
  useEffect(()=>{
    //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    console.log("데이터 추가하는 코드")
  } , []);
  
  return (
    <Wrapper>
      <Counselor />
      <Counselor />
      <Counselor />
      <Counselor />
      <Counselor />
      <Counselor />
    </Wrapper>
  );
}
