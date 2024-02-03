import {
  Wrapper,
  Image,
  TextBox,
  MailText,
  Explanation,
  Input,
  Button
} from "../../../styles/auth/signup/complete";
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../../../store/store";
import { setCertification } from "../../../store/auth/signupProcedure";
import malitell from "../../../assets/images/malitell.png";

interface SignupProps {
  handleSignup: (event: React.MouseEvent) => void;
}

export default function Complete({handleSignup}: SignupProps) {
  return (
    <Wrapper>
      {/* {인중? : } */}
      <Image src={malitell} alt="malitell" />
      <TextBox>
        <MailText>인증메일이 발송되었습니다.</MailText>
        <Explanation>
          가입하신 메일로 인증메일이 발송되며,<br />
          메일을 확인 후 하단에 인증번호를 입력해 주세요.<br />
        </Explanation>
      </TextBox>
      <Input />
      <Button onClick={handleSignup}>인증하기</Button>
    </Wrapper>
  );
}
