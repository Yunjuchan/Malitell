import bamboo from '../../../assets/images/banner/bamboo.png';
import * as s from "../../../styles/common/banner";
import { useNavigate } from 'react-router-dom';

export default function Bamboo() {
  const navigate = useNavigate()
  const toBamboo = (e: React.MouseEvent) => {
    navigate("/bamboo")
  }

  return (
    <s.Wrapper onClick={toBamboo} $color="#00BC81">
      <s.TextBox>
        <s.Title>대나무 숲</s.Title>
        <s.Subscribe>하고 싶은 말들을 편하게 해보세요.</s.Subscribe>
      </s.TextBox>
      <s.Image src={bamboo} alt='bamboo' />
    </s.Wrapper>
  );
}
