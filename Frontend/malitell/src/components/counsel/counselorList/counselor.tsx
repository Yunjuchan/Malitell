import { useNavigate } from "react-router-dom";
import { Wrapper } from "../../../styles/counsel/counselor";

interface CounselorProps {
  counselorSeq: number;
}

export default function Counselor({ counselorSeq }: CounselorProps) {
  const navigate = useNavigate();
  const goCounselorDetail = () => {
    navigate(`/counselors/${counselorSeq}`)
  };

  return (
    <Wrapper onClick={goCounselorDetail}>
      counselor {counselorSeq}
    </Wrapper>
  );
}
