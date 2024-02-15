import React from 'react';
import * as s from '../../../styles/counsel/counselorInfo';
import { CounselorData } from '../../../routes/counsel/counselorDetail';
import Counselor from './../counselorList/counselor';

export interface CounselorProps {
  counselor: CounselorData;
}

export default function CounselorInfo({ counselor }: CounselorProps) {

  function splitProfessionalField(counselor: CounselorData) {
    return counselor.professionalField.split('\n');
  }

  const professionalFields = splitProfessionalField(counselor);

  function spliteducationField(education: CounselorData) {
    return education.educationField.split('\n');
  }

  const educationFields = spliteducationField(counselor);

  function splitecertificateField(education: CounselorData) {
    return education.certificateField.split('\n');
  }

  const certificateFields = splitecertificateField(counselor);

  // 5개씩 분류하는 로직 추가
  function chunkArray(array: any[], size: number) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      chunkedArr.push(chunk);
    }
    return chunkedArr;
  }

  const chunkedFields = chunkArray(professionalFields, 5);
  const chunkedFields2 = chunkArray(educationFields, 2);
  const chunkedFields3 = chunkArray(certificateFields, 2);

  return (
    <s.InfoWrapper>
      <s.MsgTitle>{counselor.comment}</s.MsgTitle>

      <s.Bar></s.Bar>

      <s.Sectiontable>{counselor.name}님의 간단한 소개</s.Sectiontable>

      <s.ProCard>
        <s.ProContent>💼 전문분야</s.ProContent>
        <s.ItemBox>
          {chunkedFields.map((chunk, index) => (
            <div key={index}>
              {chunk.map((field, subIndex) => (
                <s.marker key={subIndex}>
                  {field}
                </s.marker>
              ))}
            </div>
          ))}
        </s.ItemBox>
      </s.ProCard>

      <s.ProCard>
        <s.ProContent>🎓 학력</s.ProContent>
        <s.ItemBox>
          {chunkedFields2.map((chunk, index) => (
            <div key={index}>
              {chunk.map((field, subIndex) => (
                <s.marker key={subIndex}>
                  {field}
                </s.marker>
              ))}
            </div>
          ))}
        </s.ItemBox>
      </s.ProCard>

      <s.ProCard>
        <s.ProContent>📝 자격증</s.ProContent>
        <s.ItemBox>
          {chunkedFields3.map((chunk, index) => (
            <div key={index}>
              {chunk.map((field, subIndex) => (
                <s.marker key={subIndex}>
                  {field}
                </s.marker>
              ))}
            </div>
          ))}
        </s.ItemBox>
      </s.ProCard>
    </s.InfoWrapper>
  );
}
