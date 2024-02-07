import { Link, useNavigate } from "react-router-dom";
import * as s from "../../../styles/article/filter";

export default function Filter() {
  const navigate = useNavigate();

  const goToCreateArticle = () => {
    navigate("/articles/create")
  }
  return (
    <s.Wrapper>
      <s.FilterBox>
        <s.Button>button</s.Button>
        <s.Button>button</s.Button>
        <s.Button>button</s.Button>
      </s.FilterBox>
      <s.CreateBox>
        <s.CreateButton onClick={goToCreateArticle}>
            글쓰기
        </s.CreateButton>
      </s.CreateBox>
    </s.Wrapper>
  );
}
