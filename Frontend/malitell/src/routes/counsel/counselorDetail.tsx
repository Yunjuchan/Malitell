import React, { useEffect, useState } from "react";
import * as g from "../../styles/grid";
import CounselorInfo from "../../components/counsel/counselorDetail/counselorInfo";
import ReviewList from "../../components/counsel/counselorDetail/reviewList";
import ButtonBox from "../../components/counsel/counselorDetail/buttonBox";
import ProfileBox from "../../components/counsel/counselorDetail/profileBox";
import { useParams } from "react-router-dom";
import { fetchCounselorDetail } from "../../store/counsel/counselSlice";

export interface CounselorData {
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

export default function CounselorDetail() {
  const [counselor, setCounselor] = useState<CounselorData>();
  const { counselorSeq } = useParams();

  const fetchData = () => {
    fetchCounselorDetail(Number(counselorSeq)).then((res) => {
      setCounselor(res);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <g.Back>
      <g.Grid>
        {/* counselor가 값이 저장되어졌을 때만 아래 파일들이 불러와져서 프롭스 전달이 원활하게 됨 */}
        {counselor && (
          <>
            <g.Box $col="1/9" $row="2/8">
              <CounselorInfo counselor={counselor} />
            </g.Box>
            <g.Box $col="1/9" $row="8/13">
              <ReviewList />
            </g.Box>
            <g.Box $col="9/13" $row="2/7">
              <ProfileBox counselor={counselor} />
            </g.Box>
            <g.Box $col="9/13" $row="7/10">
              <ButtonBox counselorSeq={Number(counselorSeq)} />
            </g.Box>
          </>
        )}
      </g.Grid>
    </g.Back>
  );
}
