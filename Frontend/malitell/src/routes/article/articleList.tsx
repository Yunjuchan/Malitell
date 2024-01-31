import SearchBox from "../../components/article/searchBox";
import RecommendedArticle from "../../components/article/recommendedArticle";
import Filter from "../../components/article/filter";
import ArticleList from "../../components/article/articleList";
import * as g from "../../styles/grid";
import Bamboo from "../../components/common/banners/bamboo";
import Metaverse from "../../components/common/banners/metaverse";

export default function Articles() {
  return (
    <g.Back>
      <g.Grid>
        <g.Box $col="1/13" $row="1/2">
          <SearchBox />
        </g.Box>
        <g.Box $col="1/4" $row="2/7">
          <RecommendedArticle />
        </g.Box>
        <g.Box $col="1/4" $row="7/11">
          <Bamboo />
          <Metaverse />
        </g.Box>
        <g.Box $col="4/13" $row="2/3">
          <Filter />
        </g.Box>
        <g.Box $col="4/13" $row="3/12">
          <ArticleList />
        </g.Box>
        <g.Box $col="4/13" $row="12/13">
          pagenation
        </g.Box>
      </g.Grid>
    </g.Back>
  );
}
