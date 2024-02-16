import React from "react";
import {
  Wrapper,
  ContentBox,
} from "../../../styles/article/articleDetail/content";
import { GatherArticle } from "./types";
import { format, parseISO } from "date-fns";
import { ko } from "date-fns/locale";

interface ArticleProps {
  gatherArticle: GatherArticle;
}

export default function GatherContent({ gatherArticle }: ArticleProps) {
  return (
    <Wrapper>
      <ContentBox>
        <div>
          <h1>자조모임 정보</h1>
          <div>주제: {gatherArticle.selfHelpGroup.selfHelpType}</div>
          <ul>
            {gatherArticle.selfHelpGroup.times.map((time, index) => {
              const parsedDate = parseISO(time);
              const formattedDate = format(
                parsedDate,
                "yyyy년 MM월 dd일 HH:mm (EEEE)",
                { locale: ko }
              );
              return <li key={index}>{formattedDate}</li>;
            })}
          </ul>
        </div>
        <div>
          {gatherArticle.content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </ContentBox>
    </Wrapper>
  );
}
