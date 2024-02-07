import { useEffect, useState } from 'react';
import * as s from '../../../styles/article/articleList';
import Article from './article';
import { fetchOvercomingList } from '../../../store/article/overcomingSlice';
import { useNavigate } from 'react-router-dom';

export interface overcomingsInfo {
  title: string;
  username: string;
  hit: number;
  time: string;
}

export default function ArticleList() {
  const [overcomings, setOvercomings] = useState<overcomingsInfo[]>([]);
  
  useEffect(() => {
    fetchOvercomingList()
    .then((res) => {
      // console.log(res);
      setOvercomings(res);
    });
  }, []);
  return (
    <s.Wrapper>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </s.Wrapper>
  )
}
