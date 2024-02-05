import Search from "../../components/article/articleDetail/search";
import Title from "../../components/article/articleDetail/title";
import RecommendedArticle from "../../components/article/recommendedArticle";
import Content from "../../components/article/articleDetail/content";
import CommentList from "../../components/article/articleDetail/commentList";
import { Back, Box } from "../../styles/grid";
import { GridDetail } from "../../styles/article/grid";

export default function ArticleDetail() {
  return (
    <>
      <Back />
      <GridDetail>
        <Box $col="4/13" $row="1/2" $position="sticky" $top="80px" />
        <Box
          $col="1/4"
          $row="2/3"
          $display="flex"
          $position="sticky"
          $top="100px"
        >
          <Search />
        </Box>
        <Box $col="1/4" $row="2/3" $position="sticky" $top="175px">
          <RecommendedArticle />
        </Box>
        <Box $col="4/13" $row="2/3" $position="sticky" $top="100px">
          <Title />
        </Box>
        <Box $col="4/13" $row="3/4">
          <Content />
        </Box>
        <Box $col="4/13" $row="6/7">
          <CommentList />
        </Box>
      </GridDetail>
    </>
  );
}
