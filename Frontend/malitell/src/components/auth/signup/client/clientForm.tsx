import { useForm, SubmitHandler } from "react-hook-form";
import {
  Wrapper,
  InputBox,
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
} from "@fortawesome/free-solid-svg-icons";
import React, { HTMLInputTypeAttribute, useState } from "react";

export default function ClientForm() {
  interface FormData {
    id: string;
    password: string;
    passwordCheck: string;
    email: string;
    name: string;
    gender: string;
    nickname: string;
    birthday: string;
    phone: string;
  }
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  /* 
  이메일 정규식
  [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상] + @ + [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상] + . + [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상]
  
  이름 정규식 
  1글자이상 30글자 이하

  비밀번호 정규식
  소문자 1글자이상, 숫자1글자이상, !@#중 1글자 이상, 숫자,대소문자,앞의특수문자를 포함한 8~16글자
  */
  const idRegex = /^[a-z0-9]{8,20}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()])[\da-zA-Z!@#]{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[ㄱ-ㅎ가-힣]{2,30}$/;
  const nicknameRegex = /^[ㄱ-ㅎ가-힣]{2,10}$/;
  const birthdayRegex =
    /^(19[0-9]{2}|20[0-1][0-9]|2020|2021|2022|2023|2024)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
  const phoneRegex = /^(010[0-9]{8})$/;

  // 폼 제출 체크
  const onSubmit = (data: FormData) => {
    console.log("데이터: ", data);
  };

  // input css용
  const [idFocus, setIdFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [pwCheckFocus, setPwCheckFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [genderFocus, setGenderFocus] = useState(false);
  const [nicknameFocus, setNicknameFocus] = useState(false);
  const [birthdayFocus, setBirthdayFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const onFocusId = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setIdFocus(!idFocus);
  };
  const onFocusPw = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setPwFocus(!pwFocus);
  };
  const onFocusPwCheck = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setPwCheckFocus(!pwCheckFocus);
  };
  const onFocusEmail = (
    e: React.InputHTMLAttributes<HTMLInputTypeAttribute>
  ) => {
    setEmailFocus(!emailFocus);
  };
  const onFocusName = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setNameFocus(!nameFocus);
  };
  const onFocusNickname = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setNicknameFocus(!nicknameFocus);
  };
  const onFocusBirthday = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setBirthdayFocus(!birthdayFocus);
  };
  const onFocusPhone = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setPhoneFocus(!phoneFocus);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <InputBox className={idFocus ? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faUser}
          color={idFocus ? "#bf94e4" : "#D3D3D3"}
        />
        <Input
          {...register("id", {
            required: "아이디는 필수 입력 항목입니다.",
            pattern: {
              value: idRegex,
              message: "아이디: 소문자 + 숫자 8-20자",
            },
          })}
          onFocus={onFocusId}
          onBlur={onFocusId}
          name="id"
          placeholder="아이디"
          type="text"
        />
      </InputBox>

      <InputBox className={pwFocus ? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faLock}
          color={pwFocus ? "#bf94e4" : "#D3D3D3"}
        />
        <Input
          {...register("password", {
            required: "비밀번호는 필수 입력 항목입니다.",
            pattern: {
              value: passwordRegex,
              message: "비밀번호: 소문자 + 숫자 + 특수문자 8-16자",
            },
          })}
          onFocus={onFocusPw}
          onBlur={onFocusPw}
          name="password"
          placeholder="비밀번호를 입력해 주세요."
          type="password"
        />
      </InputBox>
      <InputBox className={pwCheckFocus ? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faLock}
          color={pwCheckFocus ? "#bf94e4" : "#D3D3D3"}
        />
        <Input
          {...register("passwordCheck", {
            required: "비밀번호 확인은 필수 입력 항목입니다.",
            validate: (value) =>
              value === getValues("password") ||
              "비밀번호: 비밀번호가 일치하지 않습니다.",
          })}
          onFocus={onFocusPwCheck}
          onBlur={onFocusPwCheck}
          name="passwordCheck"
          placeholder="비밀번호를 확인해 주세요"
          type="password"
        />
      </InputBox>

      <InputBox className={emailFocus ? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faEnvelope}
          color={emailFocus ? "#bf94e4" : "#D3D3D3"}
        />
        <Input
          {...register("email", {
            required: "이메일은 필수 입력 항목입니다.",
            pattern: {
              value: emailRegex,
              message: "이메일: 이메일 형식을 확인해 주세요.",
            },
          })}
          onFocus={onFocusEmail}
          onBlur={onFocusEmail}
          name="email"
          placeholder="이메일"
          type="text"
        />
      </InputBox>
      <hr style={{width: "51%", border:"1px solid #f2d4f9"}} />
      <InputBox className={nameFocus ? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faUser}
          color={nameFocus ? "#bf94e4" : "#D3D3D3"}
        />
        <Input
          {...register("name", {
            required: "이름은 필수 입력 항목입니다.",
            pattern: {
              value: nameRegex,
              message: "이름: 이름은 1-30자 한글만 입력 가능합니다.",
            },
          })}
          onFocus={onFocusName}
          onBlur={onFocusName}
          name="name"
          placeholder="이름"
          type="text"
        />
      </InputBox>
      <InputBox className={nicknameFocus ? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faIdCard}
          color={nicknameFocus ? "#bf94e4" : "#D3D3D3"}
        />
        <Input
          {...register("nickname", {
            pattern: {
              value: nicknameRegex,
              message: "닉네임: 닉네임은 2-10자 한글만 입력 가능합니다.",
            },
          })}
          onFocus={onFocusNickname}
          onBlur={onFocusNickname}
          name="nickname"
          placeholder="닉네임"
          type="text"
        />
      </InputBox>
      <InputBox className={birthdayFocus ? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faCalendar}
          color={birthdayFocus ? "#bf94e4" : "#D3D3D3"}
        />
        <Input
          {...register("birthday", {
            required: "생년월일은 필수 입력 항목입니다.",
            pattern: {
              value: birthdayRegex,
              message: "생년월일: 생년월일이 정확한지 확인해 주세요.",
            },
          })}
          onFocus={onFocusBirthday}
          onBlur={onFocusBirthday}
          name="birthday"
          placeholder="생년월일 8자리"
          type="text"
        />
      </InputBox>
      <InputBox className={phoneFocus ? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faPhone}
          color={phoneFocus ? "#bf94e4" : "#D3D3D3"}
        />
        <Input
          {...register("phone", {
            required: "핸드폰 번호는 필수 입력 항목입니다.",
            pattern: {
              value: phoneRegex,
              message: "핸드폰 번호: 핸드폰 번호가 정확한지 확인해 주세요.",
            },
          })}
          onFocus={onFocusPhone}
          onBlur={onFocusPhone}
          name="phone"
          placeholder="휴대전화번호"
          type="text"
        />
      </InputBox>
      <Submit type="submit" value={"인증하기"} />
      <Message>
        {errors.id ? (
          <>{errors.id.message}</>
        ) : errors.password ? (
          <>{errors.password.message}</>
        ) : errors.passwordCheck ? (
          <>{errors.passwordCheck.message}</>
        ) : errors.email ? (
          <>{errors.email.message}</>
        ) : errors.name ? (
          <>{errors.name.message}</>
        ) : errors.nickname ? (
          <>{errors.nickname.message}</>
        ) : errors.birthday ? (
          <>{errors.birthday.message}</>
        ) : errors.phone ? (
          <>{errors.phone.message}</>
        ) : <></>}
      </Message>
    </Wrapper>
  );
}
