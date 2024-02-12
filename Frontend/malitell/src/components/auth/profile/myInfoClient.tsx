import { useEffect, useState } from "react";
import * as s from "../../../styles/auth/profile/myInfo";
import {
  editClientInfo,
  fetchUserInfo,
} from "../../../store/auth/profileSlice";
import e from "express";
export interface editClientData {
  userId: string;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  birth: string;
  statusTags: any[];
}

export default function MyInfoClient() {
  const [clientData, setClientData] = useState<editClientData>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (clientData) {
      setClientData({
        ...clientData,
        [name]: value,
      });
    }
  };

  const handleEditProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (clientData) {
      editClientInfo(clientData);
    }
  };

  useEffect(() => {
    fetchUserInfo().then((res) => setClientData(res));
  }, []);

  return (
    <s.Wrapper onSubmit={handleEditProfile}>
      {clientData && (
        <>
          <s.Box type="text" name="userId" value={clientData.userId} disabled />
          <s.Box type="text" name="name" value={clientData.name} disabled />
          <s.Box
            type="text"
            name="nickname"
            value={clientData.nickname}
            disabled
          />
          <s.Box
            type="text"
            name="email"
            value={clientData.email}
            onChange={handleInputChange}
          />
          <s.Box
            type="text"
            name="phone"
            value={clientData.phone}
            onChange={handleInputChange}
          />
          <s.Box type="text" name="birth" value={clientData.birth} disabled />
          <s.Box type="submit" value={"회원정보 수정"} />
        </>
      )}
    </s.Wrapper>
  );
}
