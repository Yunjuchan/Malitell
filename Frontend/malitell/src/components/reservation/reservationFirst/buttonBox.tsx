import React from "react";
import { Button, Wrapper } from "../../../styles/counsel/buttonBox";
import { useNavigate } from "react-router-dom";
import { ReservationData } from "../../../routes/counsel/reservation/reservationFirst";
import { reservation } from "../../../store/counsel/reserveSlice";

interface buttonBoxProps {
  counselorSeq: number;
  reservationData: ReservationData;
}

export default function ButtonBox({
  counselorSeq,
  reservationData,
}: buttonBoxProps) {
  const navigate = useNavigate();
  const onGoBack = () => {
    window.history.back();
  };

  const onConfirm = () => {
    // api 요청
    reservation({
      counselorSeq: counselorSeq,
      counselingDate: reservationData.counselingDate, // timestamp가 datetime에 해당하는 값이라고 가정했습니다.
    })
      .then(() => {
        navigate(`/counselors/${counselorSeq}/reservation/confirm`);
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          console.log("403 에러가 발생했습니다."); // 403 에러 발생 시 처리
        } else {
          console.log("다른 에러가 발생했습니다."); // 그 외 에러 처리
        }
      });
  };
  return (
    <Wrapper>
      <Button onClick={onConfirm}>예약확인</Button>
      <Button onClick={onGoBack}>뒤로가기</Button>
    </Wrapper>
  );
}
