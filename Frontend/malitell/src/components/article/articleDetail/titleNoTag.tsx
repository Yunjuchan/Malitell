import { Wrapper, TitleBox } from "../../../styles/article/articleDetail/title";
import * as t from "./types"


export default function Title({article}: {article: t.Article}) {
  console.log(article)
  return (
    <Wrapper>
      <TitleBox>
        프로필 사진
        닉네임
        {article?.title}
      </TitleBox>
    </Wrapper>
  )
}
