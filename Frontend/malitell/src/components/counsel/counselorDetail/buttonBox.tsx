import React from 'react'
import { Button, Wrapper } from '../../../styles/counsel/buttonBox'
import { useNavigate } from 'react-router-dom';
import CreateChat from './createChat';

interface buttonBoxProps {
  counselorSeq: number;
}

export default function ButtonBox({counselorSeq}: buttonBoxProps) {
  const navigate = useNavigate();

  const onReservation = () => {
    navigate(`/counselors/${counselorSeq}/reservation/first`)
  }
  return (
    <Wrapper>
      <CreateChat counselorSeq={counselorSeq} />
      <Button onClick={onReservation} $color='#FBF3FD'>상담 예약하기</Button>
    </Wrapper>
  )
}
