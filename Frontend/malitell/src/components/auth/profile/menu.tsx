import * as s from '../../../styles/auth/profile/menu';
import malitell from '../../../assets/images/malitell.png';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();

  const handleMenu = (menu: string) => {
    navigate(`/profile/${menu}`);
  }

  return (
    <s.Wrapper>
      <s.Title>프로필</s.Title>
      <s.Image src={malitell} alt='malitell' />
      <s.Tag>여기에 프로필 태그 들어가요~~</s.Tag>
      <s.Nav>
          <s.NavItem onClick={() => handleMenu('myInfo')}>내 정보</s.NavItem>
          <s.NavItem onClick={() => handleMenu('myScrab')}>내 스크랩</s.NavItem>
          <s.NavItem onClick={() => handleMenu('myReservation')}>내 예약</s.NavItem>
          <s.NavItem onClick={() => handleMenu('myArticle')}>내 글</s.NavItem>
          <s.NavItem onClick={() => handleMenu('myReview')}>내 리뷰</s.NavItem>
          <s.NavItem onClick={() => handleMenu('myCounsel')}>내 상담 일지</s.NavItem>
          <s.NavItem onClick={() => handleMenu('myGathering')}>내 모임</s.NavItem>
          <s.NavItem onClick={() => handleMenu('passwordChange')}>비밀번호 변경 / 회원 탈퇴</s.NavItem>
      </s.Nav>
    </s.Wrapper>
  )
}
