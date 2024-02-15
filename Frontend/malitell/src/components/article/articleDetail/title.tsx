import { useSelector } from "react-redux";
import * as s from "../../../styles/article/articleDetail/title";
import React, { MouseEventHandler } from "react";
import { deleteSHGroup } from "../../../store/article/gatherSlice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../store/store";

interface props {
  name: string;
  title: string;
  userSeq: number;
}

export default function Title({ name, title, userSeq }: props) {
  const navigate = useNavigate();
  const { boardSeq } = useParams();
  const mySeq = Number(sessionStorage.getItem("mySeq")) || 0;
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (boardType === "community") {
    } else if (boardType === "gather") {
      deleteSHGroup(Number(boardSeq)).then((res) => {
        navigate("/articles/gathering");
      });
    } else {
    }
  };
  return (
    <s.Wrapper>
      <s.TitleBox>
        <s.Username>작성자: {name && name}</s.Username>
        <s.ArticleTitle>{title && title}</s.ArticleTitle>
        {userSeq && mySeq === userSeq ? (
          <>
            <s.ButtonBox>
              <s.Button color="skyblue">수정</s.Button>
              <s.Button color="tomato">삭제</s.Button>
            </s.ButtonBox>
          </>
        ) : (
          <s.ButtonBox />
        )}
      </s.TitleBox>
    </s.Wrapper>
  );
}
