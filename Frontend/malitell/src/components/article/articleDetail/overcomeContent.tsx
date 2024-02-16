import { useSelector } from "react-redux";
import {
  Wrapper,
  ContentBox,
} from "../../../styles/article/articleDetail/content";
import { RootState } from "../../../store/store";
import { OvercomeArticle } from "./types";

interface ArticleProps {
  overcomeArticle: OvercomeArticle;
}

export default function OvercomeContent({overcomeArticle} : ArticleProps) {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  return (
    <Wrapper>
      <ContentBox>
        <div>{overcomeArticle.content}</div>
      </ContentBox>
    </Wrapper>
  );
}
