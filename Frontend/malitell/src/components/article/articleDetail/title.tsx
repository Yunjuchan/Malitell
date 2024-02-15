import { useSelector } from "react-redux";
import * as s from "../../../styles/article/articleDetail/title";
import * as t from "./types";

export default function Title({ article }: { article: t.Article }) {
  const mySeq = Number(sessionStorage.getItem("mySeq")) || 0;
  console.log(article);
  console.log(mySeq, article?.userSeq);
  return (
    <s.Wrapper>
      <s.TitleBox>
        {article && (
          <>
            <s.Username>작성자: {article.name}</s.Username>
            <s.ArticleTitle>{article.title}</s.ArticleTitle>
            {mySeq === article.userSeq ? (
              <>
                <s.ButtonBox>
                  <s.Button color="skyblue">수정</s.Button>
                  <s.Button color="tomato">삭제</s.Button>
                </s.ButtonBox>
              </>
            ) : <s.ButtonBox />}
          </>
        )}
      </s.TitleBox>
    </s.Wrapper>
  );
}
