import { CommentData } from "../../../store/article/communitySlice";
import { Wrapper } from "../../../styles/article/articleDetail/commentList";
import Comment from "./comment";
import { CommentType } from "./types";

export default function CommentList({ comments }: { comments: CommentType[] }) {
  return (
    <Wrapper>
      {comments &&
        comments.length > 0 &&
        comments.reverse().map((comment: CommentType, index: number) => (
          <Comment key={index} comment={comment} />
        ))}
    </Wrapper>
  );
}
