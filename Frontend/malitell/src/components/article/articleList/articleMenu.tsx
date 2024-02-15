import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setBoardTypeInfo } from "../../../store/article/boardSlice";
import { useEffect, useState } from "react";
import { saveState } from "../../../store/sessionStorage";
import { RootState } from "../../../store/store";
import * as s from "../../../styles/article/articleMenu";

export default function ArticleMenu() {
  // CSS용 코드
  const boards = [
    { type: "community", name: "자유게시판" },
    { type: "gather", name: "자조모임" },
    { type: "overcome", name: "극복사례" },
  ];
  const [now, setNow] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boardType = useSelector((state: RootState) => state.board.boardType);

  const goToCreateArticle = () => {
    navigate("/articles/create");
  };

  const setBoardTypeAndNavigate = (boardType: string) => {
    dispatch(setBoardTypeInfo(boardType));
    navigate(`/articles/${boardType}`);
  };

  useEffect(() => {
    saveState({ boardType }); // 상태가 변경될 때마다 저장
    if (boardType === "community") {
      setNow("자유게시판")
    } else if (boardType === "gather") {
      setNow("자조모임")
    } else if (boardType === "overcome") {
      setNow("극복사례")
    }
  }, [boardType]);

  return (
    <>
    <s.Title>{now}</s.Title>
      <s.Wrapper>
        {boards.map((board, index) => (
          <s.Label
            key={index}
            onClick={() => setBoardTypeAndNavigate(board.type)}
          >
            {board.name}
          </s.Label>
        ))}
      </s.Wrapper>
    </>
  );
}
