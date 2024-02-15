import { Wrapper, TitleBox } from "../../../styles/article/articleDetail/title";
import * as t from "./types"

// 여기는 태그 스크랩, 신청하기 버튼이 있음
export default function Title({article}: {article: t.Article}) {
  return (
    <Wrapper>
      <TitleBox>
        프로필 사진
        닉네임
        {article?.title}
        <button>수정</button>
        <button>삭제</button>
        <button>스크랩</button>
        <button>모임신청</button>

      </TitleBox>
    </Wrapper>
  )
}
