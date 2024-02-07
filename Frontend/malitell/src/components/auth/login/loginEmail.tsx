import React, { useState } from "react";
import {
  ToolBox,
  Wrapper,
  Image,
  Form,
  InputBox,
  Input,
  Submit,
  Message,
} from "../../../styles/auth/loginEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import malitell from "../../../assets/images/malitell.png";
import { useForm } from "react-hook-form";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {login} from '../../../store/auth/userSlice';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";

// 로그인 선택 모달에서 전달받은 Props(백그라운드 제어, 모달제어)
interface LoginProps {
  handleLogin: (event: React.MouseEvent) => void;
  handleEmail: (event: React.MouseEvent) => void;
  handleBack: (event: React.MouseEvent) => void;
}

interface FormData {
  username: string;
  password: string;
}

export default function LoginEmail({
  handleLogin,
  handleEmail,
  handleBack,
}: LoginProps) {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: FormData) => {
    console.log("데이터: ", data);
    dispatch(login(data))
  };

  // input CSS용 state 및 함수
  const [focusId, setFocusId] = useState(false);
  const [focusPw, setFocusPw] = useState(false);

  const handleFocusId = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setFocusId(!focusId);
  };
  const handleFocusPw = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setFocusPw(!focusPw);
  };
  

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
      <Image src={malitell} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBox className={focusId ? "focus" : "normal"}>
          <FontAwesomeIcon
            icon={faUser}
            color={focusId ? "#bf94e4" : "#D3D3D3"}
          />
          <Input
            {...register("username", {
              required: "아이디를 입력해 주세요.",
            })}
            onFocus={handleFocusId}
            onBlur={handleFocusId}
            placeholder="아이디"
          />
        </InputBox>
        <InputBox className={focusPw ? "focus" : "normal"}>
          <FontAwesomeIcon
            icon={faLock}
            color={focusPw ? "#bf94e4" : "#D3D3D3"}
          />
          <Input
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
            })}
            onFocus={handleFocusPw}
            onBlur={handleFocusPw}
            placeholder="비밀번호"
            type="password"
          />
        </InputBox>
        <Submit type="submit" value="로그인" />
        <Message>
          <>
            {errors.username ? (
              <>{errors.username.message}</>
            ) : errors.password ? (
              <>{errors.password}</>
            ) : (
              <></>
            )}
          </>
        </Message>
      </Form>
    </Wrapper>
  );
}
