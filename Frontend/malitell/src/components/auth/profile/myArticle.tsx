import { useEffect, useState } from "react";
import * as s from "../../../styles/auth/profile/myArticle";
import { ArticleInfo } from "../../article/articleList/articleList";
import { fetchMyArticles } from "../../../store/auth/profileSlice";
import { useNavigate } from "react-router-dom";

export interface ArticleSimple {
  boardSeq: number;
  title: string;
}
export interface ArticleData {
  communities: ArticleSimple[];
  gatherings: ArticleSimple[];
  overComings: ArticleSimple[];
}

export default function MyArticle() {
  const navigate = useNavigate();

  const handleOvercome = (e: React.MouseEvent, seq: Number) => {
    navigate(`/articles/overcome/${seq}`)
  }

  const handleCommunity = (e: React.MouseEvent, seq: Number) => {
    navigate(`/articles/overcome/${seq}`)
  }

  const handleGathering = (e: React.MouseEvent, seq: Number) => {
    navigate(`/articles/overcome/${seq}`)
  }

  const [articles, setArticles] = useState<ArticleData>();
  useEffect(() => {
    fetchMyArticles().then((res) => setArticles(res.body))
  }, [])

  return (
    <s.Wrapper>
      {articles && (
        <>
          <div>커뮤니티 작성글</div>
          {articles["communities"] && articles["communities"].length > 0 ? (
            <>
              {articles["communities"].map((article, index) => (
                <s.Box key={index} onClick={(e) => handleCommunity(e, article.boardSeq)}>{article.title}</s.Box>
              ))}
            </>
          ) : (
            <>
              <div>아직 커뮤니티 작성글이 없음</div>
            </>
          )}
          <div>모임모집 작성글</div>
          {articles["gatherings"] && articles["gatherings"].length > 0 ? (
            <>
              {articles["gatherings"].map((article, index) => (
                <s.Box key={index} onClick={(e) => handleGathering(e, article.boardSeq)}>{article.title}</s.Box>
              ))}
            </>
          ) : (
            <>
              <div>아직 모임모집 작성글이 없음</div>
            </>
          )}
          <div>극복사례 작성글</div>
          {articles["overComings"] && articles["overComings"].length > 0 ? (
            <>
              {articles["overComings"].map((article, index) => (
                <s.Box key={index} onClick={(e) => handleOvercome(e, article.boardSeq)}>{article.title}</s.Box>
              ))}
            </>
          ) : (
            <>
              <div>아직 극복사례 작성글이 없음</div>
            </>
          )}
        </>
      )}
    </s.Wrapper>
  );
}
