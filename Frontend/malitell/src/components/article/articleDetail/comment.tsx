import * as s from "../../../styles/article/articleDetail/comment";

interface CommentListProps {
  role: string
}

export default function Comment({role}:CommentListProps) {
  return (
    <>
      <s.Wrapper className={role}>
      </s.Wrapper>
    </>
  );
}
