import { useEffect, useRef, useState } from "react";
import * as s from "../../../styles/auth/profile/myInfo";
import {
  editClientInfo,
  editCounselorInfo,
  fetchUserInfo,
} from "../../../store/auth/profileSlice";
export interface editUserData {
  userId: string;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  birth: string;
  gender: string | null;
  role: string | null;
  profileImg: string | null;
  statusTags: any[];
  comment: null;
  careerPeriod: string | null;
  professionalField: string | null;
}

export default function MyInfoClient() {
  const [profileImage, setProfileImage] = useState(null);
  const [userData, setUserData] = useState<editUserData>();
  const fileInputRef = useRef<HTMLInputElement>(null); // 파일 입력 필드 참조 생성

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (userData) {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (userData) {
          setUserData({
            ...userData,
            profileImg: reader.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
    console.log(userData?.profileImg);
  };

  const clearFileInput = () => {
    if (fileInputRef.current) {
      // 파일 입력 필드 참조가 존재하는 경우
      fileInputRef.current.value = ""; // 파일 입력 필드 초기화
    }
  };

  const handleEditProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userData) {
      if (!userData.profileImg) {
        setUserData({
          ...userData,
          profileImg: profileImage
        })
      } 

      if (userData.role === "ROLE_CLIENT") {
        editClientInfo(userData);
      } else {
        editCounselorInfo(userData);
      }
    }
  };

  useEffect(() => {
    fetchUserInfo().then((res) => {
      console.log(res);
      setUserData(res);
      setProfileImage(res.profileImg);
    });
  }, []);

  return (
    <s.Wrapper onSubmit={handleEditProfile}>
      {userData && (
        <>
          <s.Box
            type="file"
            name="profileImg"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <button type="button" onClick={clearFileInput}>
            파일 선택 취소
          </button>
          <s.Box type="text" name="userId" value={userData.userId} disabled />
          <s.Box type="text" name="name" value={userData.name} disabled />
          <s.Box
            type="text"
            name="nickname"
            value={userData.nickname}
            disabled
          />
          <s.Box
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <s.Box
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
          <s.Box type="text" name="birth" value={userData.birth} disabled />
          <div>여기는 상태태그기능</div>
          {userData.role === "ROLE_CLIENT" ? (
            <s.Box type="submit" value={"회원정보 수정"} />
          ) : (
            <>
              <div>상담가 전용</div>
              <div>상담가 소개</div>
              <s.Box
                type="string"
                name="comment"
                value={userData.comment || undefined}
                onChange={handleInputChange}
              />
              <div>상담 경력</div>
              <s.Box
                type="number"
                name="careerPeriod"
                value={userData.careerPeriod || 0}
                onChange={handleInputChange}
              />
              <div>상담 분야</div>
              <s.Box
                type="text"
                name="professionalField"
                value={userData.professionalField || ""}
                onChange={handleInputChange}
              />
              <div>여기는 태그기능</div>
              <s.Box type="submit" value={"상담가정보 수정"} />
            </>
          )}
        </>
      )}
    </s.Wrapper>
  );
}
