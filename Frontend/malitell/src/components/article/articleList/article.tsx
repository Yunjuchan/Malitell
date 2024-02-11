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
  const goToArticleDetail = () => {
    navigate(`/articles/${boardType}/${article.boardSeq}`);
  };

  const handleArticle = (e: React.MouseEvent) => {
    goToArticleDetail();
  };
  return (
    <s.Wrapper onClick={handleArticle}>
      <s.TagProfile>
        <s.Tag>dasd</s.Tag>
        <s.Profile>사진</s.Profile>
      </s.TagProfile>
      <s.Title >{article.title}</s.Title>
      <s.Time >{article.time}</s.Time>
    </s.Wrapper>
  );
}
