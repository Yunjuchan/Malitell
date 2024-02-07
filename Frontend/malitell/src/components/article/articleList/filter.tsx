import { Link, useNavigate } from "react-router-dom";
import * as s from "../../../styles/article/filter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setBoardTypeInfo } from "../../../store/article/boardSlice";
import { useEffect } from "react";

export default function Filter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const board = useSelector((state: any) => state.board);

  const goToCreateArticle = () => {
    navigate("/articles/create")
  }
  
  const setBoardTypeAndNavigate = (boardType: string) => {
    dispatch(setBoardTypeInfo(boardType));
    navigate(`/articles/${boardType}`);
  };
  

  useEffect(() => {
    console.log(board.boardType)
  }, []);

  return (
    <s.Wrapper>
      <s.FilterBox>
        <s.Button onClick={() => setBoardTypeAndNavigate('community')}>자유게시판</s.Button>
        <s.Button onClick={() => setBoardTypeAndNavigate('gather')}>자조모집</s.Button>
        <s.Button onClick={() => setBoardTypeAndNavigate('overcome')}>극복사례</s.Button>
      </s.FilterBox>
      <s.CreateBox>
        <s.CreateButton onClick={goToCreateArticle}>
            글쓰기
        </s.CreateButton>
      </s.CreateBox>
    </s.Wrapper>
  );
}
