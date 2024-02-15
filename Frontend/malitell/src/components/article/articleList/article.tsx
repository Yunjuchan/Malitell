import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as s from "../../../styles/article/article";
import { ArticleInfo } from "./articleList";
import { RootState } from "../../../store/store";

interface ArticlesProps {
  key: number;
  article: ArticleInfo;
}

export default function Article({ article }: ArticlesProps) {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const navigate = useNavigate();

  const handleArticle = (e: React.MouseEvent) => {
    navigate(`/articles/${boardType}/${article.boardSeq}`);
  };
  console.log(article)
  return (
    <s.Wrapper onClick={handleArticle}>
      <s.TagProfile>
        <s.Tag></s.Tag>
        <s.Profile>{article.username}</s.Profile>
      </s.TagProfile>
      <s.Title >{article.title}</s.Title>
      <s.Time >{article.time.slice(5, 7)}월 {article.time.slice(8, 10)}일</s.Time>
    </s.Wrapper>
  );
}
