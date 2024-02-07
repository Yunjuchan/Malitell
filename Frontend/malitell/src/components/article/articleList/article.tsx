import { useNavigate } from 'react-router-dom';
import {Wrapper} from '../../../styles/article/article';

export default function Article() {
  const navigate = useNavigate();
  const goToOvercomingDetail = (overcomingSeq: number) => {
    navigate(`/articles/${overcomingSeq}`)
  }
  return (
    <Wrapper onClick={() => goToOvercomingDetail(1)}>aaa</Wrapper>
  )
}
