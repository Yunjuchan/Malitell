import * as s from '../../../styles/auth/profile/menu';
import malitell from '../../../assets/images/malitell.png';

export default function Menu() {
  return (
    <s.Wrapper>
      <s.Title>프로필</s.Title>
      <s.Image src={malitell} alt='malitell' />
      <s.Tag>여기에 프로필 태그 들어가요~~</s.Tag>
      <s.Nav>여기에 매뉴 들어가요~~</s.Nav>
    </s.Wrapper>
  )
}
