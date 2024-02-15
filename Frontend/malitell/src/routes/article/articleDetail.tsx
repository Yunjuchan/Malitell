import Title from "../../components/article/articleDetail/title";
import Content from "../../components/article/articleDetail/communityContent";
import CommentList from "../../components/article/articleDetail/commentList";
import { Back, Box } from "../../styles/grid";
import { GridDetail } from "../../styles/article/grid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sHGroupDetail } from "../../store/article/gatherSlice";
import { overcomeDetail } from "../../store/article/overcomingSlice";
import { articleDetail } from "../../store/article/communitySlice";
import {
  GatherArticle,
  CommunityArticle,
  OvercomeArticle,
} from "../../components/article/articleDetail/types";
import CreateComment from "../../components/article/articleDetail/createComment";
import GatherContent from "../../components/article/articleDetail/gatherContent";
import CommunityContent from "../../components/article/articleDetail/communityContent";
import OvercomeContent from "../../components/article/articleDetail/overcomeContent";
import Loading from "../etc/loading";
import TitleGather from "../../components/article/articleDetail/titleGather";

export default function ArticleDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [gatherArticle, setGatherArticle] = useState<GatherArticle | any>(null);
  const [communityArticle, setCommunityArticle] = useState<
    CommunityArticle | any
  >(null);
  const [overcomeArticle, setOvercomeArticle] = useState<
    OvercomeArticle | any
  >(null);
  const { boardType, boardSeq } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (boardType === "gather") {
        const data = await sHGroupDetail(Number(boardSeq));
        setGatherArticle(data);
        setIsLoading(false);
      } else if (boardType === "overcome") {
        const data = await overcomeDetail(Number(boardSeq));
        setOvercomeArticle(data);
        setIsLoading(false);
      } else {
        const data = await articleDetail(Number(boardSeq));
        setCommunityArticle(data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return isLoading ? <><Loading /></> : (
    <>
      <Back />
      <GridDetail>
        <Box $col="1/13" $row="1/2"/>
        <Box $col="1/13" $row="2/3">
          {gatherArticle && (
            <TitleGather
              name={gatherArticle.name}
              title={gatherArticle.title}
              userSeq={gatherArticle.userSeq}
              participants={gatherArticle.participants}
              selfHelpGroup={gatherArticle.selfHelpGroup}
              headcount={gatherArticle.headcount}
            />
          )}
          {communityArticle && (
            <Title
              name={communityArticle.name}
              title={communityArticle.title}
              userSeq={communityArticle.userSeq}
            />
          )}
          {overcomeArticle && (
            <Title
              name={overcomeArticle.name}
              title={overcomeArticle.title}
              userSeq={overcomeArticle.userSeq}
            />
          )}
        </Box>
        <Box $col="1/13" $row="3/4">
          <>
            {gatherArticle ? (
              <GatherContent gatherArticle={gatherArticle} />
            ) : communityArticle ? (
              <CommunityContent communityArticle={communityArticle} />
            ) : overcomeArticle ? (
              <OvercomeContent overcomeArticle={overcomeArticle} />
            ) : null}
          </>
        </Box>
        <Box $col="1/13" $row="6/7">
          <CreateComment />
          <>
            {gatherArticle ? (
              <CommentList comments={gatherArticle.gatheringComments} />
            ) : communityArticle ? (
              <CommentList comments={communityArticle.communityComments} />
            ) : overcomeArticle ? (
              <CommentList comments={overcomeArticle.overComingComments} />
            ) : null}
          </>
        </Box>
      </GridDetail>
    </>
  );
}
