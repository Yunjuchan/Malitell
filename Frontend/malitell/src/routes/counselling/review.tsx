import { useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as s from "../../styles/counselling/review";

export default function Review() {
  interface FormData {
    grade: string;
    counselorSeq: string;
    content: string;
  }

  const { seq } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      counselorSeq: seq,
    },
  });

  const onSubmit = (data: FormData) => {
    fetch(`http://localhost:8080/api/counseling/review`, {
      method: "POST",
      headers: {
        Access_Token: `${sessionStorage.getItem("Access_Token")}`,
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <s.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <s.Title>상담은 잘 진행하셨나요?</s.Title>
      <s.Box>
        <s.Star>
          <s.Subtitle>상담은 어떠셨나요?</s.Subtitle>
          <fieldset>
            <input
              {...register("grade", { required: "평점을 입력해 주세요." })}
              type="radio"
              name="grade"
              value="5"
              id="rate1"
            />
            <label htmlFor="rate1">⭐</label>
            <input
              {...register("grade")}
              type="radio"
              name="grade"
              value="4"
              id="rate2"
            />
            <label htmlFor="rate2">⭐</label>
            <input
              {...register("grade")}
              type="radio"
              name="grade"
              value="3"
              id="rate3"
            />
            <label htmlFor="rate3">⭐</label>
            <input
              {...register("grade")}
              type="radio"
              name="grade"
              value="2"
              id="rate4"
            />
            <label htmlFor="rate4">⭐</label>
            <input
              {...register("grade")}
              type="radio"
              name="grade"
              value="1"
              id="rate5"
            />
            <label htmlFor="rate5">⭐</label>
          </fieldset>
        </s.Star>
        <s.Review
          {...register("content")}
          placeholder="상담가님에 대한 간단한 리뷰를 남겨주세요."
        />
        <s.Submit type="submit" value="후기 남기기" />
      </s.Box>
    </s.Wrapper>
  );
}
