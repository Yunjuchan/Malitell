import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  Form,
  InputBox,
  Select,
  Option,
  Input,
  Message,
  Submit,
} from "../../../../styles/auth/signup/client/clientForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
  faEnvelope,
  faIdCard,
  faCalendar,
  faPhone,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import {
  setId,
  setPw,
  setPwCheck,
  setEmail,
  setName,
  setGender,
  setNickname,
  setBirthday,
  setPhone,
} from "../../../../store/auth/signupFocusSlice";
import {
  Wrapper,
  Image,
  TextBox,
  MailText,
  Explanation,
  Number,
  Button,
} from "../../../../styles/auth/signup/emailCertification";
import malitell from "../../../../assets/images/malitell.png";

import EmailCertification from "../emailCertification";
import { error } from "console";

interface SignupProps {
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ClientForm({ setSuccess, success }: SignupProps) {
  interface FormData {
    userId: string;
    password: string;
    passwordCheck: string;
    email: string;
    name: string;
    gender: string;
    nickname: string;
    birth: string;
    phone: string;
    role: string;
    certificationNumber: string;
  }

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      role: "ROLE_CLIENT",
    },
  });

  const idRegex = /^[a-z0-9]{8,20}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()])[\da-zA-Z!@#]{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[ㄱ-ㅎ가-힣]{2,30}$/;
  const genderRegex = /^(M|F)$/;
  const nicknameRegex = /^[ㄱ-ㅎ가-힣]{2,10}$/;
  const birthdayRegex =
    /^(19[0-9]{2}|20[0-1][0-9]|2020|2021|2022|2023|2024)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
  const phoneRegex = /^(010[0-9]{8})$/;

  // 폼 제출 체크
  const onSubmit = (data: FormData) => {
    console.log("데이터: ", data);
    // setSuccess(true);

    fetch(`http://localhost:8080/user/join/client`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        setSuccess(true);
      });
  };

  const submitCertification = (data: FormData) => {
    console.log(data);

    fetch(`http://localhost:8080/auth/email-certification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  };

  const dispatch: AppDispatch = useDispatch();
  const focus = useSelector((state: RootState) => state.signupFocus);
  const focusActions = {
    id: setId,
    pw: setPw,
    pwCheck: setPwCheck,
    email: setEmail,
    name: setName,
    gender: setGender,
    nickname: setNickname,
    birthday: setBirthday,
    phone: setPhone,
  };

  const onFocus = (field: keyof typeof focusActions) => {
    return (e: React.FocusEvent<HTMLInputElement>) => {
      dispatch(focusActions[field](!focus[field]));
    };
  };

  // 셀렉트박스 css용
  const [placeholder, setPlaceholder] = useState(true);

  const handlePlaceholder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlaceholder(false);
  };

  return (
    <>
      {success ? (
        <Wrapper>
          {/* {인중? : } */}
          <Image src={malitell} alt="malitell" />
          <TextBox>
            <MailText>인증메일이 발송되었습니다.</MailText>
            <Explanation>
              가입하신 메일로 인증메일이 발송되며,
              <br />
              메일을 확인 후 하단에 인증번호를 입력해 주세요.
              <br />
            </Explanation>
          </TextBox>
          <form onSubmit={handleSubmit(submitCertification)}>
            <Number
              {...register("certificationNumber", {
                required: "인증번호를 입력해 주세요",
              })}
            />
            <Button type="submit" value={"인증하기"} />
          </form>
          <Message>
            {errors.certificationNumber
              ? errors.certificationNumber.message
              : ""}
          </Message>
        </Wrapper>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputBox className={focus.id ? "focus" : "normal"}>
            <FontAwesomeIcon
              icon={faUser}
              color={focus.id ? "#bf94e4" : "#D3D3D3"}
            />
            <Input
              {...register("userId", {
                required: "아이디는 필수 입력 항목입니다.",
                pattern: {
                  value: idRegex,
                  message: "아이디: 소문자 + 숫자 8-20자",
                },
              })}
              onFocus={onFocus("id")}
              onBlur={onFocus("id")}
              name="userId"
              placeholder="아이디"
              type="text"
            />
          </InputBox>

          <InputBox className={focus.pw ? "focus" : "normal"}>
            <FontAwesomeIcon
              icon={faLock}
              color={focus.pw ? "#bf94e4" : "#D3D3D3"}
            />
            <Input
              {...register("password", {
                required: "비밀번호는 필수 입력 항목입니다.",
                pattern: {
                  value: passwordRegex,
                  message: "비밀번호: 소문자 + 숫자 + 특수문자 8-16자",
                },
              })}
              onFocus={onFocus("pw")}
              onBlur={onFocus("pw")}
              name="password"
              placeholder="비밀번호"
              type="password"
            />
          </InputBox>
          <InputBox className={focus.pwCheck ? "focus" : "normal"}>
            <FontAwesomeIcon
              icon={faLock}
              color={focus.pwCheck ? "#bf94e4" : "#D3D3D3"}
            />
            <Input
              {...register("passwordCheck", {
                required: "비밀번호 확인은 필수 입력 항목입니다.",
                validate: (value) =>
                  value === getValues("password") ||
                  "비밀번호: 비밀번호가 일치하지 않습니다.",
              })}
              onFocus={onFocus("pwCheck")}
              onBlur={onFocus("pwCheck")}
              name="passwordCheck"
              placeholder="비밀번호 확인"
              type="password"
            />
          </InputBox>

          <InputBox className={focus.email ? "focus" : "normal"}>
            <FontAwesomeIcon
              icon={faEnvelope}
              color={focus.email ? "#bf94e4" : "#D3D3D3"}
            />
            <Input
              {...register("email", {
                required: "이메일은 필수 입력 항목입니다.",
                pattern: {
                  value: emailRegex,
                  message: "이메일: 이메일 형식을 확인해 주세요.",
                },
              })}
              onFocus={onFocus("email")}
              onBlur={onFocus("email")}
              name="email"
              placeholder="이메일"
              type="text"
            />
          </InputBox>
          <hr style={{ width: "51%", border: "1px solid #f2d4f9" }} />
          <InputBox id="genderBox">
            <InputBox className={focus.name ? "focus" : "normal"} id="name">
              <FontAwesomeIcon
                icon={faUser}
                color={focus.name ? "#bf94e4" : "#D3D3D3"}
              />
              <Input
                {...register("name", {
                  required: "이름은 필수 입력 항목입니다.",
                  pattern: {
                    value: nameRegex,
                    message: "이름: 이름은 1-30자 한글만 입력 가능합니다.",
                  },
                })}
                onFocus={onFocus("name")}
                onBlur={onFocus("name")}
                name="name"
                placeholder="이름"
                type="text"
              />
            </InputBox>
            <InputBox
              className={focus.gender ? "focus" : "normal"}
              id="gender"
              onFocus={onFocus("gender")}
              onBlur={onFocus("gender")}
            >
              <FontAwesomeIcon
                icon={faVenusMars}
                color={focus.gender ? "#bf94e4" : "#D3D3D3"}
              />
              <Select
                className={placeholder ? "placeholder" : ""}
                {...register("gender", {
                  required: "성별은 필수 선택 항목입니다.",
                  pattern: {
                    value: genderRegex,
                    message: "성별: 성별을 선택해 주세요.",
                  },
                  onChange(event) {
                    handlePlaceholder(event);
                  },
                })}
              >
                <Option value="" hidden>
                  선택해 주세요.
                </Option>
                <Option value="M">남자</Option>
                <Option value="F">여자</Option>
              </Select>
            </InputBox>
          </InputBox>
          <InputBox className={focus.nickname ? "focus" : "normal"}>
            <FontAwesomeIcon
              icon={faIdCard}
              color={focus.nickname ? "#bf94e4" : "#D3D3D3"}
            />
            <Input
              {...register("nickname", {
                pattern: {
                  value: nicknameRegex,
                  message: "닉네임: 닉네임은 2-10자 한글만 입력 가능합니다.",
                },
              })}
              onFocus={onFocus("nickname")}
              onBlur={onFocus("nickname")}
              name="nickname"
              placeholder="닉네임"
              type="text"
            />
          </InputBox>
          <InputBox className={focus.birthday ? "focus" : "normal"}>
            <FontAwesomeIcon
              icon={faCalendar}
              color={focus.birthday ? "#bf94e4" : "#D3D3D3"}
            />
            <Input
              {...register("birth", {
                required: "생년월일은 필수 입력 항목입니다.",
                pattern: {
                  value: birthdayRegex,
                  message: "생년월일: 생년월일이 정확한지 확인해 주세요.",
                },
              })}
              onFocus={onFocus("birthday")}
              onBlur={onFocus("birthday")}
              name="birth"
              placeholder="생년월일 8자리"
              type="text"
            />
          </InputBox>
          <InputBox className={focus.phone ? "focus" : "normal"}>
            <FontAwesomeIcon
              icon={faPhone}
              color={focus.phone ? "#bf94e4" : "#D3D3D3"}
            />
            <Input
              {...register("phone", {
                required: "핸드폰 번호는 필수 입력 항목입니다.",
                pattern: {
                  value: phoneRegex,
                  message: "핸드폰 번호: 핸드폰 번호가 정확한지 확인해 주세요.",
                },
              })}
              onFocus={onFocus("phone")}
              onBlur={onFocus("phone")}
              name="phone"
              placeholder="휴대전화번호"
              type="text"
            />
          </InputBox>
          <Submit type="submit" value={"인증메일 전송"} />
          <Message>
            {errors.userId ? (
              <>{errors.userId.message}</>
            ) : errors.password ? (
              <>{errors.password.message}</>
            ) : errors.passwordCheck ? (
              <>{errors.passwordCheck.message}</>
            ) : errors.email ? (
              <>{errors.email.message}</>
            ) : errors.name ? (
              <>{errors.name.message}</>
            ) : errors.gender ? (
              <>{errors.gender.message}</>
            ) : errors.nickname ? (
              <>{errors.nickname.message}</>
            ) : errors.birth ? (
              <>{errors.birth.message}</>
            ) : errors.phone ? (
              <>{errors.phone.message}</>
            ) : (
              <></>
            )}
          </Message>
        </Form>
      )}
    </>
  );
}
