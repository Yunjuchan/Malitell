import React from "react";
import * as s from "../../../styles/counsel/review";

interface Props {
  content: string;
  grade: number;
}

export default function Review({ content, grade }: Props) {
  return (
    <s.Wrapper>
      <s.Grade>평가: {grade}점</s.Grade>
      <s.Content>{content}</s.Content>
    </s.Wrapper>
  );
}
