import { useSelector } from "react-redux";
import * as s from "../../../styles/article/articleDetail/title";
import * as t from "./types";
import React, { MouseEventHandler } from "react";
import { deleteSHGroup } from "../../../store/article/gatherSlice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../store/store";

export default function Title({ article }: { article: t.Article }) {
  const navigate = useNavigate();
  const { boardSeq } = useParams();
  const mySeq = Number(sessionStorage.getItem("mySeq")) || 0;
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (boardType === "community") {
    } else if (boardType === "gather") {
      deleteSHGroup(Number(boardSeq))
      .then((res) => {
        navigate("/articles/gathering");
      });
    } else {
    }
  };
  return (
    <s.Wrapper>
      <s.TitleBox>
        {article && (
          <>
            <div>
              {article.title} {article.name}
            </div>
            {mySeq === article.userSeq ? (
              <>
                {/* <button onClick={}>수정</button> */}
                <button onClick={handleDelete}>삭제</button>
              </>
            ) : null}
          </>
        )}
      </s.TitleBox>
    </s.Wrapper>
  );
}
