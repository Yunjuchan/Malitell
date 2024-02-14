import { useEffect, useState } from "react";
import * as s from "../../../styles/article/articleList";
import Article from "./article";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSHGroup } from "../../../store/article/gatherSlice";
import { fetchOvercomingList } from "../../../store/article/overcomingSlice";
import { fetchArticleList } from "../../../store/article/communitySlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useDispatch } from "react-redux";
import { setBoardTypeInfo } from "../../../store/article/boardSlice";

export interface ArticleInfo {
  title: string;
  nickname: string;
  hit: number;
  time: string;
  boardSeq: number;
  // tag: string | null;
}

export default function ArticleList() {
  const dispatch = useDispatch();
  const { boardType } = useParams();
  const [articles, setArticles] = useState({
    community: [],
    gather: [],
    overcome: [],
  });
  const board = useSelector((state: RootState) => state.board);

  useEffect(() => {
    dispatch(setBoardTypeInfo(boardType));
  }, []);

  const fetchArticles = () => {
    fetchOvercomingList().then((res) => {
      if (!res) {
        res = [];
      }
      setArticles((prev) => ({ ...prev, overcome: res }));
    });

    fetchSHGroup().then((res) => {
      if (!res) {
        res = [];
      }
      setArticles((prev) => ({ ...prev, gather: res }));
    });

    fetchArticleList().then((res) => {
      if (!res) {
        res = [];
      }
      setArticles((prev) => ({ ...prev, community: res }));
    });
  };

  useEffect(() => {
    fetchArticles();

  }, []);

  return (
    <s.Wrapper>
      {articles && articles[board.boardType].map((article: ArticleInfo, index: number) => (
        <>
          <Article key={index} article={article} />
          {articles[board.boardType].length - 1 === index ? null : <s.Line />}
        </>
      ))}
    </s.Wrapper>
  );
}
