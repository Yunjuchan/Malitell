import React, { useEffect, useState } from "react";
import * as s from "../../../styles/article/articleDetail/createComment";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { fetchUserInfo } from "../../../store/auth/profileSlice";
import { createComment } from "../../../store/article/communitySlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { flipLoginModal } from "../../../store/common/loginModalSlice";

export default function CreateComment() {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const dispatch = useDispatch();
  const { boardSeq } = useParams();
  const [username, setUsername] = useState(null);
  const [content, setContent] = useState("");
  const mySeq = sessionStorage.getItem("mySeq");
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mySeq) {
      dispatch(flipLoginModal());
    } else if (boardType === "community") {
      if (username) {
        createComment("community", {
          username,
          content,
          boardSeq: Number(boardSeq),
        }).then(() => window.location.reload());
      }
    } else if (boardType === "gather") {
      if (username) {
        createComment("gathering", {
          username,
          content,
          boardSeq: Number(boardSeq),
        }).then(() => window.location.reload());
      }
    } else if (boardType === "overcome") {
      if (username) {
        createComment("overCome", {
          username,
          content,
          boardSeq: Number(boardSeq),
        }).then(() => window.location.reload());
      }
    }
  };
  useEffect(() => {
    if (mySeq) {
      // token이 존재하면 로그인 상태라고 판단
      fetchUserInfo().then((res) => {
        setUsername(res.name);
      });
    }
  }, []);
  return (
    <>
      {username ? (
        <s.Wrapper onSubmit={handleSubmit}>
          <s.userInfoBox>{username}</s.userInfoBox>
          <s.Textarea
            onChange={handleContentChange}
            value={content}
            placeholder="댓글을 작성해 주세요."
          ></s.Textarea>
          <s.Submit type="submit">댓글 작성</s.Submit>
        </s.Wrapper>
      ) : (
        "댓글을 작성하려면 로그인 해주세요."
      )}
    </>
  );
}
