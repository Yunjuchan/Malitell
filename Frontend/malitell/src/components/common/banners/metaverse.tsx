import metaverse from '../../../assets/images/banner/metaverse.png';
import * as s from '../../../styles/common/banner';

export default function Metaverse() {
  const onClick = () => {
    window.open("https://drive.usercontent.google.com/download?id=1b9IH969nO_SpCOcMlbtBu8nLQpwHUl1T&export=download&authuser=0", )
  }
  return (
    <s.Wrapper $color='#008FC0'>
      <s.TextBox>
        <s.Title>메타버스</s.Title>
        <s.Subscribe>메타버스 공간에서 자유롭게 대화해보세요.</s.Subscribe>
      </s.TextBox>
      <s.Image src={metaverse} alt='metaverse' />
    </s.Wrapper>
  )
}
