import SearchBox from "../../components/article/articleList/searchBox";
import RecommendedArticle from "../../components/article/recommendedArticle";
import Filter from "../../components/article/articleList/filter";
import ArticleList from "../../components/article/articleList/articleList";
import * as g from "../../styles/grid";
import { GridList } from "../../styles/article/grid";
import Bamboo from "../../components/common/banners/bamboo";
import Metaverse from "../../components/common/banners/metaverse";
import ArticleMenu from "../../components/article/articleList/articleMenu";
import { useState } from "react";
export default function Articles() {
  return (
    <>
      <g.Back />
      <GridList>
        <g.Box $col="1/13" $row="1/2" $position="sticky" $top="80px">
          <SearchBox />
        </g.Box>
        <g.Box $col="1/4" $row="2/5" $position="sticky" $top="150px">
          <ArticleMenu />
          <Bamboo />
          <Metaverse />
        </g.Box>
        <g.Box $col="4/13" $row="2/3" $position="sticky" $top="150px">
          <Filter />
        </g.Box>
        <g.Box $col="4/13" $row="3/12">
          <ArticleList />
        </g.Box>
      </GridList>
    </>
  );
}
