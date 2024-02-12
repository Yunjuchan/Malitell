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
    <s.Wrapper>
      {clientData && (
        <>
          <form onSubmit={handleEditProfile}>
            <input type="text" name="userId" value={clientData.userId} disabled />
            <input type="text" name="name" value={clientData.name} disabled />
            <input type="text" name="nickname" value={clientData.nickname} disabled/>
            <input type="text" name="email" value={clientData.email} onChange={handleInputChange}/>
            <input type="text" name="phone" value={clientData.phone} onChange={handleInputChange}/>
            <input type="text" name="birth"value={clientData.birth} disabled />
            <input type="submit" value={"회원정보 수정"} />
          </form>
        </>
      )}
    </s.Wrapper>
  );
}
