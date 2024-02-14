import { useNavigate } from "react-router-dom";
import * as s from "../../../styles/article/filter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setBoardTypeInfo } from "../../../store/article/boardSlice";
import { useEffect, useState } from "react";
import { saveState } from "../../../store/sessionStorage";
import { RootState } from "../../../store/store";
import { flipLoginModal } from "../../../store/common/loginModalSlice";

export default function Filter() {
  // CSS용 스크립트
  const boards = [
    { type: "community", name: "자유게시판" },
    { type: "gather", name: "자조모임" },
    { type: "overcome", name: "극복사례" },
  ];
  const [nowBoard, setNowBoard] = useState([true, false, false]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boardType = useSelector((state: RootState) => state.board.boardType);

  // const goToCreateArticle = () => {
  //   const token = window.sessionStorage.getItem("Access_Token");
  //   if (token) {
  //     navigate("/articles/create");
  //   } else {
  //     handleLogin();  // 로그인 모달을 띄우는 함수
  //   }
  // };
  const goToCreateArticle = () => {
    const token = window.sessionStorage.getItem("Access_Token");
    if (token) {
      navigate("/articles/create");
    } else {
      dispatch(flipLoginModal());
    }
  };

  const setBoardTypeAndNavigate = (boardType: string) => {
    dispatch(setBoardTypeInfo(boardType));
    navigate(`/articles/${boardType}`);
  };

  useEffect(() => {
    saveState({ boardType }); // 상태가 변경될 때마다 저장
  }, [boardType]);

  return (
    <s.Wrapper>
      <s.FilterBox>
        <>
          {boards.map((board, index) => (
            <s.Button
              key={index}
              onClick={() => setBoardTypeAndNavigate(board.type)}
            >
              {board.name}
            </s.Button>
          ))}
        </>
      </s.FilterBox>
      <s.CreateBox>
        <s.CreateButton onClick={goToCreateArticle}>글쓰기</s.CreateButton>
      </s.CreateBox>
    </s.Wrapper>
  );
}
