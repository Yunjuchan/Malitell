import {
  Wrapper,
  Image,
  TextBox,
  MailText,
  Explanation,
  Button
} from "../../../styles/auth/signup/complete";
import malitell from "../../../assets/images/malitell.png";

interface SignupProps {
  handleSignup: (event: React.MouseEvent) => void;
}

export default function Complete({handleSignup}: SignupProps) {
  return (
    <Wrapper>
      <Image src={malitell} alt="malitell" />
      <TextBox>
        <MailText>인증메일이 발송되었습니다.</MailText>
        <Explanation>
          가입하신 메일로 인증메일이 발송되며,<br />
          메일을 확인하셔야 가입이 완료됩니다.<br />
          메일확인 후 가입이 완료되며,<br />
          마리텔을 이용하실 수 있습니다.<br />
        </Explanation>
      </TextBox>
      <Button onClick={handleSignup}>로그인하러 가기</Button>
    </Wrapper>
  );
}
