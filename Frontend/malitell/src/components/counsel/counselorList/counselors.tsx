import React, { useEffect, useState } from "react";
import * as s from "../../../styles/counsel/counselors";
import Counselor from "./counselor";
import { fetchCounselorList } from "../../../store/counsel/counselSlice";

// 아니면 모든 데이터 던져주고 추가 정보 어떻게 요청할지 고민됨
export interface CounselorInfo {
  counselorSeq: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  profileImg: any;
  professionalField: any;
  careerPeriod: number;
  grade: number;
  comment: any; // 아직 뭔지 모름
  counselingReviewList: any; // 아직 뭔지 모름
}

export default function Counselors() {
  const [counselors, setCounselors] = useState<CounselorInfo[]>([]);
  useEffect(() => {
    fetchCounselorList().then((res) => {
      setCounselors(res);
    });
  }, []);

  return (
    <s.Wrapper>
      {counselors && counselors.map((counselor: CounselorInfo, index) => (
          <Counselor key={index} counselor={counselor} />
      ))}
    </s.Wrapper>
  );
}
