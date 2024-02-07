import { useNavigate } from 'react-router-dom';
import {Wrapper} from '../../../styles/article/article';
interface ArticleProps {
  onClick: () => void;
}
export default function Article({onClick}: ArticleProps) {
  return (
    <Wrapper onClick={onClick}>aaaa</Wrapper>
  )
}
