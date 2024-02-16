import React, { useEffect, useState } from "react";
import * as g from "../../styles/grid";
import { GridDetail } from "../../styles/counsel/grid";
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
  educationField: any;
  certificateField: any;
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
    <>
      <g.Back />
      <GridDetail>
        {/* counselor가 값이 저장되어졌을 때만 아래 파일들이 불러와져서 프롭스 전달이 원활하게 됨 */}
        {counselor && (
          <>
            <g.Box $col="1/9" $row="2/13">
              <CounselorInfo counselor={counselor} />
              {counselor.counselingReviewList.length > 0 ? <ReviewList reviews={counselor.counselingReviewList} /> : null }
            </g.Box>
            <g.Box $col="9/13" $row="2/6">
              <ProfileBox counselor={counselor} />
              <ButtonBox counselorSeq={Number(counselorSeq)} />
            </g.Box>
          </>
        )}
      </GridDetail>
    </>
  );
}
