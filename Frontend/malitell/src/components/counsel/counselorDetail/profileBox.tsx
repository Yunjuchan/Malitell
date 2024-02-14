import {
  Name,
  ProfileImage,
  ProfileWrapper,
  Reputation,
  Wrapper,
} from "../../../styles/counsel/profileBox";
import { CounselorData } from "../../../routes/counsel/counselorDetail";
import malitell from '../../../assets/images/malitell.png';

export interface CounselorProps {
  counselor: CounselorData;
}

export default function ProfileBox({counselor}: CounselorProps) {
  return (
    <Wrapper>
      <ProfileImage src={counselor.profileImg? counselor.profileImg : malitell} alt="img" />
      <ProfileWrapper>
        <Name>{counselor.name}</Name>
        <Reputation>{counselor.grade.toFixed(2)}</Reputation>
      </ProfileWrapper>
    </Wrapper>
  );
}
