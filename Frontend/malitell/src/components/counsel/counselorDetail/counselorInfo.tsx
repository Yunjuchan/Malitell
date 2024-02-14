import React from 'react'
import { InfoWrapper } from '../../../styles/counsel/counselorInfo'
import { CounselorData } from '../../../routes/counsel/counselorDetail';

export interface CounselorProps {
  counselor: CounselorData;
}

export default function CounselorInfo({counselor}: CounselorProps) {
  return (
    <InfoWrapper>

    </InfoWrapper>
    )
}
