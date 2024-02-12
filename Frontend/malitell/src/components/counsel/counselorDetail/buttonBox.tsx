import React from 'react'
import { Button, Wrapper } from '../../../styles/counsel/buttonBox'
import { useNavigate } from 'react-router-dom';

interface buttonBoxProps {
  counselorSeq: number;
}

export default function ButtonBox({counselorSeq}: buttonBoxProps) {
  const navigate = useNavigate();
  const onGoBack = () => {
    window.history.back();
  };

  const onReservation = () => {
    navigate(`/counselors/${counselorSeq}/reservation/first`)
  }
  return (
    <Wrapper>
      <Button onClick={onReservation}>예약하기</Button>
      <Button onClick={onGoBack}>뒤로가기</Button>
    </Wrapper>
  )
}
