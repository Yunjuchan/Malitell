import { useEffect, useState } from 'react';
import * as s from '../../../styles/article/articleList';
import Article from './article';
import { useNavigate } from 'react-router-dom';
import { fetchSHGroup } from '../../../store/article/gatherSlice';
import { fetchOvercomingList } from '../../../store/article/overcomingSlice';
import { fetchArticleList } from '../../../store/article/communitySlice';
import { useSelector } from 'react-redux';

interface Board {
  boardType: 'community' | 'gather' | 'overcome';
}

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
  const board: Board = useSelector((state: any) => state.board);

  // 컴포넌트 전환을 위한 navigate hook
  const navigate = useNavigate();

  const goToArticleDetail = (seq: number) => {
    navigate(`/articles/${board.boardType}/${seq}`)
  }


  const fetchArticles = () => {
    fetchOvercomingList()
    .then((res) => {
      setArticles((prev) => ({ ...prev, overcome: res }));
    });

    fetchSHGroup()
    .then((res) => {
      setArticles((prev) => ({ ...prev, gather: res }));
    });

    fetchArticleList()
    .then((res) => {
      setArticles((prev) => ({ ...prev, community: res }));
    });
  }

  useEffect(() => {
    fetchArticles();
  }, []);
  
  return (
    <s.Wrapper>
      {articles[board.boardType].map((article: ArticleInfo, index) => (
        <Article key={index} onClick={() => goToArticleDetail(article.boardSeq)}/>
      ))}
    </s.Wrapper>
  )
}
