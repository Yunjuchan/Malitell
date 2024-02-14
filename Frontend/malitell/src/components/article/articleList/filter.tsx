import { useNavigate } from "react-router-dom";
import * as s from "../../../styles/article/filter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { saveState } from "../../../store/sessionStorage";
import { RootState } from "../../../store/store";
import { flipLoginModal } from "../../../store/common/loginModalSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boardType = useSelector((state: RootState) => state.board.boardType);


  const goToCreateArticle = () => {
    const token = window.sessionStorage.getItem("Access_Token");
    if (token) {
      navigate("/articles/create");
    } else {
      dispatch(flipLoginModal());
    }
  };


  useEffect(() => {
    saveState({ boardType }); // 상태가 변경될 때마다 저장
  }, [boardType]);

  return (
    <s.Wrapper>
      <s.FilterBox>
      </s.FilterBox>
      <s.CreateBox>
        {boardType === "gather" && sessionStorage.getItem("myRole") !== "ROLE_COUNSELOR" ? null :
        <s.CreateButton onClick={goToCreateArticle}>글쓰기</s.CreateButton>
        }
      </s.CreateBox>
    </s.Wrapper>
  );
}
