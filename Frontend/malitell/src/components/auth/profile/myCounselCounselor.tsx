import { useEffect, useState } from "react";
import * as s from "../../../styles/auth/profile/myCounsel";
import { fetchCounselLog } from "../../../store/auth/profileSlice";

export interface LogData {
  counselingLogSeq: number;
  counselorName: string;
  counselorDate: string;
  round: number;
  content: string;
}
export interface counselingLogData {
  myCounselingLogList: LogData[];
  counselorList: string[];
}

export default function MyCounselCounselor() {
  const [myCounselingLogList, setMyCounselingLogList] = useState<counselingLogData>();
  
  useEffect(() => {
    fetchCounselLog().then((res) => {
      setMyCounselingLogList(res);
    });
  }, []);
  return <s.Wrapper>
    {myCounselingLogList && (
      <>
      <s.Box></s.Box>
      </>
    )}
  </s.Wrapper>;
}
