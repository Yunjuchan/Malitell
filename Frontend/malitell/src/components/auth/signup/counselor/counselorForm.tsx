import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  setUserId,
  setEmail,
} from "../../../../store/auth/signupFormDataSlice";
import * as s from "../../../../styles/auth/signup/counselor/counselorForm";
import { AppDispatch, RootState } from "../../../../store/store";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function CounselorForm() {
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

  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.signupFormData.userId);
  const email = useSelector((state: RootState) => state.signupFormData.email);

  useEffect(() => {
    dispatch(setUserId(watch("userId")));
    dispatch(setEmail(watch("email")));
  }, [watch("userId"), watch("email")]);

  return (
    <s.Wrapper>
      <s.Form>
        <s.InputBox>
          <FontAwesomeIcon
            icon={faUser}
            // color={focus.id ? "#bf94e4" : "#D3D3D3"}
          />
          <s.Input placeholder="아이디" />
        </s.InputBox>
      </s.Form>
    </s.Wrapper>
  );
}
