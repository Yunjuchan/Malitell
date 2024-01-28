import React from "react";
import { Popular, TextBox, ToArticles, Wrapper, ArticleBox } from "../../styles/home/articles";

export default function Articles() {
  return (
    <Wrapper>
      <TextBox>
        <Popular>인기 게시글</Popular>
        <ToArticles>전체보기</ToArticles>
      </TextBox>
      {/* 게시글에서 단일 게시글 컴포넌트 생성후 불러올 생각 */}
      <ArticleBox></ArticleBox>
    </Wrapper>
  );
}
