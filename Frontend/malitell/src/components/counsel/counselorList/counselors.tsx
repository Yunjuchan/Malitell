import React, { useEffect, useState } from "react";
import * as s from "../../../styles/counsel/counselors";
import Counselor from "./counselor";
import { fetchCounselorList } from "../../../store/counsel/counselSlice";
import { Link } from "react-router-dom";

// 아니면 모든 데이터 던져주고 추가 정보 어떻게 요청할지 고민됨
export interface CounselorInfo {
  userSeq: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  profileImg: any;
  professionalField: any;
  careerPeriod: number;
  grade: number;
}

export default function Counselors() {
  const [counselors, setCounselors] = useState<CounselorInfo[]>([]);

  useEffect(() => {
    fetchCounselorList()
    .then((res) => {
      setCounselors(res);
    });
  }, []);

  return (
    <s.Wrapper>
      {counselors.map((counselor: CounselorInfo, index) => (
        <s.Counselor key={index}>
        <Link
          to={{
            pathname: `/counselors/${counselor.userSeq}`,
          }}
        >
          <Counselor counselorSeq={counselor.userSeq} />
        </Link> 
        </s.Counselor>
      ))}
      
    </s.Wrapper>
  );
}
