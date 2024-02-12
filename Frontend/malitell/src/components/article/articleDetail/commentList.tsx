import {
  Wrapper,
  CommentListBox,
} from "../../../styles/article/articleDetail/commentList";
import Comment from "./comment";

export default function CommentList() {
  return (
    <Wrapper>
      <CommentListBox>
        <Comment role="client" />
        <Comment role="" />
        <Comment role="" />
        <Comment role="" />
        <Comment role="" />
        <Comment role="" />
        <Comment role="" />
        <Comment role="" />
        <Comment role="" />
      </CommentListBox>
    </Wrapper>
  );
}
