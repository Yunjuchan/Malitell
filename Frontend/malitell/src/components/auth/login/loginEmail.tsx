import { Background } from "../../../styles/grid";
import { Text, ToolBox, Wrapper } from "../../../styles/auth/loginEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faXmark } from "@fortawesome/free-solid-svg-icons";

interface LoginProps {
  handleLogin: (event: React.MouseEvent) => void;
  handleEmail: (event: React.MouseEvent) => void;
  handleBack: (event: React.MouseEvent) => void;
}

export default function LoginEmail({
  handleLogin,
  handleEmail,
  handleBack,
}: LoginProps) {
  return (
    <Wrapper>
      <ToolBox>
        <FontAwesomeIcon
          onClick={handleEmail}
          icon={faBackward}
          style={{ color: "bf94e4" }}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={(e) => {
            handleLogin(e);
            handleEmail(e);
            handleBack(e);
          }}
          icon={faXmark}
          style={{ color: "#bf94e4" }}
        />
      </ToolBox>
      <Text>이메일로 계속하기</Text>
    </Wrapper>
  );
}
