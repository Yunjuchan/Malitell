import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Wrapper,
  ToolBox,
  Container,
  SmallText,
  Text,
  Line,
} from "../../../styles/auth/signup/signup";
import { faBackward, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ClientForm from "./client/clientForm";
import Selection from "./selection/selection";

interface LoginProps {
  handleBack: (event: React.MouseEvent) => void;
  handleLogin: (event: React.MouseEvent) => void;
  handleSignup: (event: React.MouseEvent) => void;
}

export default function Signup({
  handleBack,
  handleLogin,
  handleSignup,
}: LoginProps) {
  const [client, setClient] = useState(false);
  const [counselor, setCounselor] = useState(false);

  const handleClient = (e: React.MouseEvent): void => {
    setClient(!client);
  };

  const handleCounselor = (e: React.MouseEvent): void => {
    setCounselor(!counselor);
  }

  return (
    <Wrapper>
      <ToolBox>
        <FontAwesomeIcon
          onClick={
            client ? handleClient : counselor ? handleCounselor : handleSignup
          }
          icon={faBackward}
          style={{ color: "bf94e4" }}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={(e) => {
            handleSignup(e);
            handleLogin(e);
            handleBack(e);
          }}
          icon={faXmark}
          style={{ color: "#bf94e4" }}
        />
      </ToolBox>
      <Container>
        {client ? (
          <>
          <SmallText>
            회원가입
          </SmallText>
          <Line />
          <ClientForm />
          </>
        ) : (
          <>
            <Text>회원가입</Text>
            <Line />
            <Selection handleClient={handleClient} />
          </>
        )}
      </Container>
    </Wrapper>
  );
}
