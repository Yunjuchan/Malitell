import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as s from "../../../styles/article/article";
import { ArticleInfo } from "./articleList";

interface ArticlesProps {
  key: number;
  article: ArticleInfo;
}

interface Board {
  boardType: "community" | "gather" | "overcome";
}

export default function Article({ article }: ArticlesProps) {
  const board: Board = useSelector((state: any) => state.board);
  const navigate = useNavigate();
  const goToArticleDetail = () => {
    console.log(article)
    navigate(`/articles/${board.boardType}/${article.boardSeq}`);
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
