import React from "react";
import * as s from "../../../styles/article/articleDetail/createComment";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export default function CreateComment() {
  const boardType = useSelector((state: RootState) => state.board.boardType);

  const handleSubmit = () => {};

  return (
    <s.Wrapper onSubmit={handleSubmit}>
      <s.userInfoBox>user 이름</s.userInfoBox>
      <s.Textarea></s.Textarea>
      <input type="submit" />
    </s.Wrapper>
  );
}
