import { Wrapper } from "../../../styles/counsel/counselor";

interface CounselorProps {
  counselorSeq: number;
}

export default function Counselor({ counselorSeq }: CounselorProps) {
  return (
    <Wrapper>
      counselor {counselorSeq}
    </Wrapper>
  );
}
