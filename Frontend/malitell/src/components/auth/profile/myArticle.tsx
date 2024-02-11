import { useEffect, useState } from "react";
import * as s from "../../../styles/auth/profile/myArticle";
import { ArticleInfo } from "../../article/articleList/articleList";
import { fetchMyArticles } from "../../../store/auth/profileSlice";

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
                <div key={index}>{article.title}</div>
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
                <div key={index}>{article.title}</div>
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
                <div key={index}>{article.title}</div>
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
