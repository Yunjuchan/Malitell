import { useEffect, useState } from 'react';
import * as s from '../../../styles/article/articleList';
import Article from './article';
import { useNavigate } from 'react-router-dom';
import { fetchSHGroup } from '../../../store/article/gatherSlice';
import { fetchOvercomingList } from '../../../store/article/overcomingSlice';
import { fetchArticleList } from '../../../store/article/communitySlice';
import { useSelector } from 'react-redux';
import { BoardState } from '../../../store/article/boardSlice';

export interface ArticleInfo {
  title: string;
  nickname: string;
  hit: number;
  time: string;
  boardSeq: number;
  // tag: string | null;
}

export default function ArticleList() {
  const [articles, setArticles] = useState({
    community: [],
    gather: [],
    overcome: [],
  });
  const board: BoardState = useSelector((state: any) => state.board);

  const fetchArticles = () => {
    fetchOvercomingList()
    .then((res) => {
      if (!res) {
        res = []
      }
      setArticles((prev) => ({ ...prev, overcome: res }));
    });

    fetchSHGroup()
    .then((res) => {
      if (!res) {
        res = []
      }
      setArticles((prev) => ({ ...prev, gather: res }));
    });

    fetchArticleList()
    .then((res) => {
      if (!res) {
        res = []
      }
      setArticles((prev) => ({ ...prev, community: res }));
    });
  }

  useEffect(() => {
    
    fetchArticles();
  }, []);
  
  return (
    <s.Wrapper>
      <div>{articles.community}</div>

      {articles[board.boardType].map((article: ArticleInfo, index) => (
        <Article key={index} article={article} />
      ))}
    </s.Wrapper>
  )
}

        // <Article key={index} onClick={() => goToArticleDetail(article.boardSeq)}/>