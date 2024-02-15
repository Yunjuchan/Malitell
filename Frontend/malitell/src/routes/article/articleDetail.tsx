import Title from "../../components/article/articleDetail/title";
import Content from "../../components/article/articleDetail/content";
import CommentList from "../../components/article/articleDetail/commentList";
import { Back, Box } from "../../styles/grid";
import { GridDetail } from "../../styles/article/grid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sHGroupDetail } from "../../store/article/gatherSlice";
import { overcomeDetail } from "../../store/article/overcomingSlice";
import { articleDetail } from "../../store/article/communitySlice";
import { GatherArticle, CommunityArticle, OvercomeArticle } from "../../components/article/articleDetail/types";
import CreateComment from "../../components/article/articleDetail/createComment";


export default function ArticleDetail() {
  const [gatherArticle, setGatherArticle] = useState<GatherArticle>();
  const [communityArticle, setCommunityArticle] = useState<CommunityArticle>();
  const [overcomeArticle, setOvercomeArticle] = useState<OvercomeArticle>();
  const { boardType, boardSeq } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (boardType === "gather") {
        const data = await sHGroupDetail(Number(boardSeq));
        setGatherArticle(data);
      } else if (boardType === "overcome") {
        const data = await overcomeDetail(Number(boardSeq));
        setOvercomeArticle(data);
      } else {
        const data = await articleDetail(Number(boardSeq));
        setCommunityArticle(data);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Back />
      <GridDetail>
        <Box $col="4/13" $row="1/2" $position="sticky" $top="80px" />
        <Box $col="1/13" $row="2/3" $position="sticky" $top="100px">
          {/* 보내야할 프롭스 게시판타입, 게시글태그, 작성자, 작성자 이미지, 제목 */}
          {/* notagTitle */}
          {/* <Title article={{gatherArticle, communityArticle, overcomeArticle}}/> */}
        </Box>
        <Box $col="1/13" $row="3/4">
          {/* <Content article={{gatherArticle, communityArticle, overcomeArticle}} /> */}
        </Box>
        <Box $col="1/13" $row="6/7">
          <CreateComment />
          <CommentList />
        </Box>
      </GridDetail>
    </>
  );
}
