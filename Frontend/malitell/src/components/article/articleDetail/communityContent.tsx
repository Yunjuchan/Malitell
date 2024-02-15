import {
  Wrapper,
  ContentBox,
} from "../../../styles/article/articleDetail/content";
import { CommunityArticle } from "./types";

interface ArticleProps {
  communityArticle: CommunityArticle;
}

const tags = {
  COURSE: "진로",
  EMOTION: "정서",
  RELATIONSHIP: "대인관계",
  ECONOMY: "경제",
  HEALTH: "건강",
};

export default function CommunityContent({ communityArticle }: ArticleProps) {
  return (
    <Wrapper>
      <ContentBox>
        <div>{tags[communityArticle.worryTag]}</div>
        <div>{communityArticle.content}</div>
      </ContentBox>
    </Wrapper>
  );
}
