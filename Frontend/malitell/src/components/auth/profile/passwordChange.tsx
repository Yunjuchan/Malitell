import { useState } from "react";
import * as s from "../../../styles/auth/profile/passwordChage";

export default function PasswordChange() {
  const [nowPwd, setNowPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newPwdConfirm, setNewPwdConfirm] = useState("");

  const [deleteUserPwd, setDeleteUserPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");

  const handleNowPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNowPwd(e.target.value);
  };
  const handleNewPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPwd(e.target.value);
  };
  const handleNewPwdConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPwdConfirm(e.target.value);
  };

  const handleDeleteUserPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteUserPwd(e.target.value);
  };

  const handlePwdConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwdConfirm(e.target.value);
  };

  const handleChangePwd = () => {};
  const handleDeleteUser = () => {};

  return (
    <s.Wrapper>
      <s.Form onSubmit={handleChangePwd}>
        <div>현재</div>
        <s.Input type="password" value={nowPwd} onChange={handleNowPwd} />
        <div>새</div>
        <s.Input type="password" value={newPwd} onChange={handleNewPwd} />
        <div>새 확인</div>
        <s.Input
          type="password"
          value={newPwdConfirm}
          onChange={handleNewPwdConfirm}
        />
        <input type="submit" value="비밀번호 변경" /> 
      </s.Form>

      <s.Form onSubmit={handleDeleteUser}>
      <div>현재</div>
        <s.Input
          type="password"
          value={deleteUserPwd}
          onChange={handleDeleteUserPwd}
          />
          <div>확인</div>
        <s.Input
          type="password"
          value={pwdConfirm}
          onChange={handlePwdConfirm}
        />
        <input type="submit" value="회원 탈퇴" />
      </s.Form>
    </s.Wrapper>
  );
}
