// types.ts
export interface FormData {
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
}

export interface signupFocusState {
    id: boolean;
    pw: boolean;
    pwCheck: boolean;
    email: boolean;
    name: boolean;
    gender: boolean;
    nickname: boolean;
    birthday: boolean;
    phone: boolean;
    career: boolean;
}

export interface signupProcedure {
  certification: boolean;
}