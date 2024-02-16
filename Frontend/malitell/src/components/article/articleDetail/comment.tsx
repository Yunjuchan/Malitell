import * as s from "../../../styles/article/articleDetail/comment";
import { CommentType } from "./types";

export default function Comment({ comment }: { comment: CommentType }) {
  return (
    <s.Wrapper>
      <s.Writer>{comment.username}</s.Writer>
      <s.Content>{comment.content}</s.Content>
      <s.Time>{comment.time.slice(0, 11)}</s.Time>
    </s.Wrapper>
  );
}
