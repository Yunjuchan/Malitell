import { Wrapper, TitleBox } from "../../../styles/article/articleDetail/title";
import * as t from "./types"

// 여기는 태그가 없음
export default function Title({article}: {article: t.Article}) {
  console.log(article)
  return (
    <Wrapper>
      <TitleBox>
        프로필 사진
        닉네임
        {article?.title}
        <button>수정</button>
        <button>삭제</button>
      </TitleBox>
    </Wrapper>
  )
}
