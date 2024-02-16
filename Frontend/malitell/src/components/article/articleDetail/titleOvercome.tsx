import { useSelector } from "react-redux";
import { Wrapper, TitleBox } from "../../../styles/article/articleDetail/title";
import * as t from "./types";
import { RootState } from "../../../store/store";
import { deleteSHGroup } from "../../../store/article/gatherSlice";
import { useParams } from "react-router-dom";
import { MouseEventHandler } from "react";

// 여기는 태그가 없음
export default function TitleOvercome({ article }: { article: t.OvercomeArticle }) {
  const { boardSeq } = useParams();
  const mySeq = Number(sessionStorage.getItem("mySeq")) || 0;
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (boardType === "community") {
    } else if (boardType === "gather") {
      deleteSHGroup(Number(boardSeq));
    } else {
    }
  };
  return (
    <Wrapper>
      <TitleBox>
        {article && (
          <>
            <div>
            {article.name} {article.title}
            </div>
            {mySeq === article.userSeq ? (
              <>
                {/* <button onClick={}>수정</button> */}
                <button onClick={handleDelete}>삭제</button>
              </>
            ) : null}
          </>
        )}
      </TitleBox>
    </Wrapper>
  );
}
