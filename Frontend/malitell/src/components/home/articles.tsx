import { useNavigate } from "react-router-dom";
import { Popular, TextBox, ToArticles, Wrapper, ArticleBox } from "../../styles/home/articles";

export default function Articles() {
  const navigate = useNavigate();

  const toCommunity = (e: React.MouseEvent) => {
    navigate("/articles/community")
  }
  return (
    <Wrapper>
      <TextBox>
        <Popular>커뮤니티</Popular>
        <ToArticles onClick={toCommunity}>전체보기</ToArticles>
      </TextBox>
      {/* 게시글에서 단일 게시글 컴포넌트 생성후 불러올 생각 */}
      <ArticleBox></ArticleBox>
    </Wrapper>
  );
}
