import { useSelector } from "react-redux";
import {
  Wrapper,
  ContentBox,
} from "../../../styles/article/articleDetail/content";
import { RootState } from "../../../store/store";
import { CommunityArticle, GatherArticle, OvercomeArticle } from "./types";

interface Props {
  gatherArticle: GatherArticle;
  communityArticle: CommunityArticle;
  OvercomeArticle: OvercomeArticle;
}

export default function Content(article : Props) {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  return (
    <Wrapper>
      <ContentBox>
        {boardType === "community" ? (
          <>
            <div>커뮤니티 데이터</div>
            {/* <div>{article.tag}</div> */}
          </>
        ) : boardType === "gather" ? (
          <>
            <div>게더 데이터</div>
          </>
        ) : (
          <>
            <div></div>
          </>
        )}
      </ContentBox>
    </Wrapper>
  );
}
