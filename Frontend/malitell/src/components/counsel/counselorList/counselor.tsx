import { useNavigate } from "react-router-dom";
import { CounselorInfo } from "./counselors";
import * as s from "../../../styles/counsel/counselor";
import star from "../../../assets/images/star.png";
import malitell from "../../../assets/images/malitell.png";
import CreateChat from "./createChat";

interface CounselorProps {
  counselor: CounselorInfo;
}

export default function Counselor({ counselor }: CounselorProps) {
  const navigate = useNavigate();
  const field = counselor.professionalField ? counselor.professionalField : "";
  const phone = counselor.phone ? counselor.phone : "";

  const goCounselorDetail = () => {
    navigate(`/counselors/${counselor.counselorSeq}`);
  };

  return (
    <s.Wrapper>
      <s.Container>
        <s.NameBox>
          <s.Name>{counselor.name}</s.Name>
          <s.Star src={star} alt="star" />
          <s.Grade>{counselor.grade}</s.Grade>
          <CreateChat counselorSeq={counselor.counselorSeq} />
        </s.NameBox>
        <div>
          <s.Info>전문분야: {field}</s.Info>
          <s.Info>email: {counselor.email}</s.Info>
          <s.Info>phone: {phone}</s.Info>
        </div>
      </s.Container>
      <div onClick={goCounselorDetail}>프로필 상세보기</div>
      {counselor.profileImg ? (
        <s.ImgBox>
          <s.Profile src={counselor.profileImg} alt="image" />
        </s.ImgBox>
      ) : (
        <s.ImgBox>
          <s.Profile src={malitell} alt="image" />
        </s.ImgBox>
      )}
    </s.Wrapper>
  );
}
