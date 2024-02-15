import { useSelector } from "react-redux";
import * as s from "../../../styles/article/articleDetail/title";
import React, { MouseEventHandler } from "react";
import {
  deleteSHGroup,
  joinSHGroup,
  leaveSHGroup,
} from "../../../store/article/gatherSlice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../store/store";
import { SelfHelpGroup } from "./types";

interface props {
  name: string;
  title: string;
  userSeq: number;
  headcount: number;
  participants: number[];
  selfHelpGroup: SelfHelpGroup;
}

export default function TitleGather({
  name,
  title,
  userSeq,
  headcount,
  participants,
  selfHelpGroup,
}: props) {
  const navigate = useNavigate();
  const { boardSeq } = useParams();
  const mySeq = Number(sessionStorage.getItem("mySeq")) || 0;
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const isParticipating = participants.includes(mySeq);
  const isFull = participants.length >= headcount;
  const showJoinButton = !isParticipating && !isFull;
  const showCancelButton = isParticipating;
  const showFullButton = !isParticipating && isFull;
  const handleJoin = () => {
    joinSHGroup(selfHelpGroup.selfHelpGroupSeq).then((res) => {
      window.location.reload();
    });
  };

  const handleLeave = () => {
    leaveSHGroup(selfHelpGroup.selfHelpGroupSeq).then((res) => {
      window.location.reload();
    });
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (boardType === "community") {
    } else if (boardType === "gather") {
      deleteSHGroup(Number(boardSeq)).then((res) => {
        navigate("/articles/gathering");
      });
    } else {
    }
  };

  return (
    <s.Wrapper>
      <s.TitleBox>
        <s.Username>작성자: {name && name}</s.Username>
        <s.ArticleTitle>{title && title}</s.ArticleTitle>
        {userSeq && userSeq !== 0 && (
          <>
            {userSeq === mySeq ? (
              <s.ButtonBox>
                <s.Button color="skyblue">수정</s.Button>
                <s.Button color="tomato" onClick={handleDelete}>
                  삭제
                </s.Button>
              </s.ButtonBox>
            ) : (
              <s.ButtonBox>
                {showJoinButton && (
                  <s.Button onClick={handleJoin} color="skyblue">
                    참가하기
                  </s.Button>
                )}
                {showCancelButton && (
                  <s.Button onClick={handleLeave} color="tomato">
                    참가취소
                  </s.Button>
                )}
                {showFullButton && (
                  <>
                    <span>참가인원: {} </span>
                    <s.Button disabled>인원 마감</s.Button>
                  </>
                )}
              </s.ButtonBox>
            )}
          </>
        )}
      </s.TitleBox>
    </s.Wrapper>
  );
}
