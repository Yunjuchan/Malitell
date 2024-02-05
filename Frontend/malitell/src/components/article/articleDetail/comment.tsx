import { Wrapper } from "../../../styles/article/articleDetail/comment";

interface CommentListProps {
  role: string
}

export default function Comment({role}:CommentListProps) {
  return (
    <>
      <Wrapper className={role}></Wrapper>
    </>
  );
}
