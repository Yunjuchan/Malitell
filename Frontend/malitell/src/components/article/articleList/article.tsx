import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Wrapper } from "../../../styles/article/article";
import { ArticleInfo } from "./articleList";

interface ArticlesProps {
  key: number;
  article: ArticleInfo;
}

interface Board {
  boardType: "community" | "gather" | "overcome";
}

export default function Article({key, article}: ArticlesProps) {
  const board: Board = useSelector((state: any) => state.board);
  const navigate = useNavigate();
  const goToArticleDetail = () => {
    navigate(`/articles/${board.boardType}/${article.boardSeq}`);
  };

  const handleArticle = (e: React.MouseEvent) => {
    goToArticleDetail();
  }
  return <Wrapper onClick={handleArticle}>{article.title}</Wrapper>;
}
