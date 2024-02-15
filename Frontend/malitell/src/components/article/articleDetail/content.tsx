import {
  Wrapper,
  ContentBox,
} from "../../../styles/article/articleDetail/content";
import { Article } from "./types";

interface Props {
  article: Article;
}

export default function Content({article}: Props) {
  return (
    <Wrapper>
      <ContentBox>

      </ContentBox>
    </Wrapper>
  );
}
