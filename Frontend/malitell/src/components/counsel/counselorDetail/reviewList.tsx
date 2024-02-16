import { Wrapper } from "../../../styles/counsel/reviewList";
import Review from "./review";

export default function ReviewList({ reviews }: any) {
  return (
    <Wrapper>
      {reviews &&
        reviews.map((review: any, index: number) => {
          return <Review key={index} content={review.content} grade={review.grade} />;
        })}
    </Wrapper>
  );
}
