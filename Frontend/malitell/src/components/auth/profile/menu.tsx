import * as s from '../../../styles/auth/profile/menu';
import malitell from '../../../assets/images/malitell.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProfileMenu } from '../../../store/auth/profileSlice';
import { useEffect } from 'react';

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleMenu = (menu: string, menuKo: string) => {
    dispatch(setProfileMenu({menu , menuKo}))
    navigate(`/profile/${menu}`); 
  }
  const menuItems = [
    { menu: 'myInfo', menuKo: '내 정보' },
    { menu: 'myScrab', menuKo: '내 스크랩' },
    { menu: 'myReservation', menuKo: '내 예약' },
    { menu: 'myArticle', menuKo: '내 글' },
    { menu: 'myReview', menuKo: '내 리뷰' },
    { menu: 'myCounsel', menuKo: '내 상담 일지' },
    { menu: 'myGathering', menuKo: '내 모임' },
    { menu: 'passwordChange', menuKo: '비밀번호 변경 / 회원 탈퇴' },
  ];

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const currentMenu = pathSegments[2]; // URL에서 'myInfo'와 같은 값을 가져옴

    const matchedItem = menuItems.find((item) => item.menu === currentMenu);
    if (matchedItem) {
      dispatch(setProfileMenu(matchedItem)); // 'menu'와 'menuKo' 상태를 업데이트
    }
  }, [location.pathname, dispatch]);
  
  return (
    <s.Wrapper>
      <s.Title>프로필</s.Title>
      <s.Image src={localStorage.getItem("myImg") === null || "" ? malitell : localStorage.getItem("myImg")} alt='malitell' />
      <s.Tag>여기에 프로필 태그 들어가요~~</s.Tag>
      <s.Nav>
      {menuItems.map((item) => (
        <s.NavItem key={item.menu} onClick={() => handleMenu(item.menu, item.menuKo)}>
          {item.menuKo}
        </s.NavItem>
      ))}
      </s.Nav>
    </s.Wrapper>
  )
}
