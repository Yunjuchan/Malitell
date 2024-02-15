import * as s from "../../../../styles/auth/signup/counselor/counselorForm";
import * as r from "../regex";
import * as f from "../../../../store/auth/signupFocusSlice";
import * as i from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import Certification from "../certification";

interface SignupProps {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CounselorForm({ setSuccess }: SignupProps) {
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
    careerPeriod: number;
    certificationNumber: string;
  }

  const [certification, setCertification] = useState(false);

  const {
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      role: "ROLE_COUNSELOR",
    },
  });

  const onSubmit = (data: FormData) => {

    fetch(`http://localhost:8080/auth/email-certification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        if (res.status === 200) {
          fetch(`http://localhost:8080/user/join/counselor`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => {
              if (res.status === 200) {
                setSuccess(true);
                setCertification(true);
              }
            })
        }
      });
  };

  // CSS용

  const dispatch: AppDispatch = useDispatch();
  const focus = useSelector((state: RootState) => state.signupFocus);
  const focusActions = {
    id: f.setId,
    pw: f.setPw,
    pwCheck: f.setPwCheck,
    email: f.setEmail,
    name: f.setName,
    gender: f.setGender,
    nickname: f.setNickname,
    birthday: f.setBirthday,
    phone: f.setPhone,
    career: f.setCareer,
  };

  const onFocus = (field: keyof typeof focusActions) => {
    return (e: React.FocusEvent<HTMLInputElement>) => {
      dispatch(focusActions[field](!focus[field]));
    };
  };

  const [placeholder, setPlaceholder] = useState(true);

  const handlePlaceholder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlaceholder(false);
  };

  return (
    <>
      {certification ? (
        <Certification
          userId={getValues("userId")}
          email={getValues("email")}
        />
      ) : (
        <s.Wrapper>
          <s.Form onSubmit={handleSubmit(onSubmit)}>
            <s.InputBox className={focus.id ? "focus" : ""}>
              <FontAwesomeIcon
                icon={i.faUser}
                color={focus.id ? "#bf94e4" : "#D3D3D3"}
              />
              <s.Input
                {...register("userId", {
                  required: "아이디는 필수 입력 항목입니다.",
                  pattern: {
                    value: r.idRegex,
                    message: "아이디: 소문자 + 숫자 8-20자",
                  },
                })}
                placeholder="아이디"
                onFocus={onFocus("id")}
                onBlur={onFocus("id")}
              />
            </s.InputBox>
            <s.InputBox className={focus.pw ? "focus" : ""}>
              <FontAwesomeIcon
                icon={i.faLock}
                color={focus.pw ? "#bf94e4" : "#D3D3D3"}
              />
              <s.Input
                {...register("password", {
                  required: "비밀번호는 필수 입력 항목입니다.",
                  pattern: {
                    value: r.passwordRegex,
                    message: "비밀번호: 소문자 + 숫자 + 특수문자 8-16자",
                  },
                })}
                placeholder="비밀번호"
                type="password"
                onFocus={onFocus("pw")}
                onBlur={onFocus("pw")}
              />
            </s.InputBox>
            <s.InputBox className={focus.pwCheck ? "focus" : ""}>
              <FontAwesomeIcon
                icon={i.faLock}
                color={focus.pwCheck ? "#bf94e4" : "#D3D3D3"}
              />
              <s.Input
                {...register("passwordCheck", {
                  required: "비밀번호 확인은 필수 입력 항목입니다.",
                  validate: (value) =>
                    value === getValues("password") ||
                    "비밀번호: 비밀번호가 일치하지 않습니다.",
                })}
                placeholder="비밀번호 확인"
                type="password"
                onFocus={onFocus("pwCheck")}
                onBlur={onFocus("pwCheck")}
              />
            </s.InputBox>
            <s.InputBox className={focus.email ? "focus" : ""}>
              <FontAwesomeIcon
                icon={i.faEnvelope}
                color={focus.email ? "#bf94e4" : "#D3D3D3"}
              />
              <s.Input
                {...register("email", {
                  required: "이메일은 필수 입력 항목입니다.",
                  pattern: {
                    value: r.emailRegex,
                    message: "이메일: 이메일 형식을 확인해 주세요.",
                  },
                })}
                placeholder="이메일"
                onFocus={onFocus("email")}
                onBlur={onFocus("email")}
              />
            </s.InputBox>
            <s.Line />
            <s.InputBox className={focus.name ? "focus" : ""}>
              <FontAwesomeIcon
                icon={i.faUser}
                color={focus.name ? "#bf94e4" : "#D3D3D3"}
              />
              <s.Input
                {...register("name", {
                  required: "이름은 필수 입력 항목입니다.",
                  pattern: {
                    value: r.nameRegex,
                    message: "이름: 이름은 1-30자 한글만 입력 가능합니다.",
                  },
                })}
                placeholder="이름"
                onFocus={onFocus("name")}
                onBlur={onFocus("name")}
              />
            </s.InputBox>
            <s.FlexBox>
              <s.InputBox className={focus.career ? "focus small" : "small"}>
                <FontAwesomeIcon
                  icon={i.faCalendar}
                  color={focus.career ? "#bf94e4" : "#D3D3D3"}
                />
                <s.Input
                  {...register("careerPeriod", {
                    required: "경력은 필수 입력 항목입니다.",
                    pattern: {
                      value: r.careerRegex,
                      message: "경력: 경력은 년 기준으로 입력 가능합니다.",
                    },
                  })}
                  placeholder="경력"
                  onFocus={onFocus("career")}
                  onBlur={onFocus("career")}
                />
              </s.InputBox>
              <s.InputBox
                className={focus.gender ? "focus small" : "small"}
                onFocus={onFocus("gender")}
                onBlur={onFocus("gender")}
              >
                <FontAwesomeIcon
                  icon={i.faVenusMars}
                  color={focus.gender ? "#bf94e4" : "#D3D3D3"}
                />
                <s.Select
                  className={placeholder ? "placeholder" : ""}
                  {...register("gender", {
                    required: "성별은 필수 선택 항목입니다.",
                    pattern: {
                      value: r.genderRegex,
                      message: "성별: 성별을 선택해 주세요.",
                    },
                    onChange(event) {
                      handlePlaceholder(event);
                    },
                  })}
                >
                  <s.Option value="" hidden>
                    성별
                  </s.Option>
                  <s.Option value="M">남자</s.Option>
                  <s.Option value="F">여자</s.Option>
                </s.Select>
              </s.InputBox>
            </s.FlexBox>
            <s.InputBox className={focus.nickname ? "focus" : ""}>
              <FontAwesomeIcon
                icon={i.faUser}
                color={focus.nickname ? "#bf94e4" : "#D3D3D3"}
              />
              <s.Input
                {...register("nickname", {
                  required: "닉네임은 필수 입력 항목입니다.",
                  pattern: {
                    value: r.nicknameRegex,
                    message: "닉네임: 닉네임은 2-10자 한글만 입력 가능합니다.",
                  },
                })}
                placeholder="닉네임"
                onFocus={onFocus("nickname")}
                onBlur={onFocus("nickname")}
              />
            </s.InputBox>
            <s.InputBox className={focus.birthday ? "focus" : ""}>
              <FontAwesomeIcon
                icon={i.faCalendarDay}
                color={focus.birthday ? "#bf94e4" : "#D3D3D3"}
              />
              <s.Input
                {...register("birth", {
                  required: "생년월일은 필수 입력 항목입니다.",
                  pattern: {
                    value: r.birthdayRegex,
                    message: "생년월일: 생년월일이 정확한지 확인해 주세요.",
                  },
                })}
                placeholder="생년월일 8자리"
                onFocus={onFocus("birthday")}
                onBlur={onFocus("birthday")}
              />
            </s.InputBox>
            <s.InputBox className={focus.phone ? "focus" : ""}>
              <FontAwesomeIcon
                icon={i.faPhone}
                color={focus.phone ? "#bf94e4" : "#D3D3D3"}
              />
              <s.Input
                {...register("phone", {
                  required: "핸드폰 번호는 필수 입력 항목입니다.",
                  pattern: {
                    value: r.phoneRegex,
                    message:
                      "핸드폰 번호: 핸드폰 번호가 정확한지 확인해 주세요.",
                  },
                })}
                placeholder="휴대전화번호"
                onFocus={onFocus("phone")}
                onBlur={onFocus("phone")}
              />
            </s.InputBox>
            <s.Submit type="submit" value="인증메일 전송" />
            <s.Message>
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
              ) : errors.careerPeriod ? (
                <>{errors.careerPeriod.message}</>
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
            </s.Message>
          </s.Form>
        </s.Wrapper>
      )}
    </>
  );
}
