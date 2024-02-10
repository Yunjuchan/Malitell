import * as s from '../../../styles/auth/profile/menu';
import malitell from '../../../assets/images/malitell.png';

export default function Menu() {
  return (
    <s.Wrapper>
      <s.Title>프로필</s.Title>
      <s.Image src={malitell} alt='malitell' />
      <s.Tag>여기에 프로필 태그 들어가요~~</s.Tag>
      <s.Nav>
          <s.NavItem>내 정보</s.NavItem>
          <s.NavItem>내 스크랩</s.NavItem>
          <s.NavItem>내 예약</s.NavItem>
          <s.NavItem>내 글</s.NavItem>
          <s.NavItem>내 리뷰</s.NavItem>
          <s.NavItem>내 상담 일지</s.NavItem>
          <s.NavItem>내 모임</s.NavItem>
          <s.NavItem>비밀번호 변경 / 회원 탈퇴</s.NavItem>
      </s.Nav>
    </s.Wrapper>
  )
}
