import { useSelector } from "react-redux";
import * as s from "../../../styles/article/articleDetail/title";
import * as t from "./types"


export default function Title({article}: {article: t.Article}) {
  const mySeq = Number(localStorage.getItem("mySeq")) || 0;
  console.log(article)
  console.log(mySeq, article?.userSeq)
  return (
    <s.Wrapper>
      <s.TitleBox>
        {article && (
          <>
          <div>{article.title} {article.name}</div>
          {mySeq === article.userSeq ? <>
          <button>수정</button>
          <button>삭제</button>
          </> : null
          }
          </>
        
      )}
      </s.TitleBox>
    </s.Wrapper>
  )
}
