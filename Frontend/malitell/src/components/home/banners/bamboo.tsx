import bamboo from "../../../assets/images/banner/bamboo.png";
import * as s from "../../../styles/home/banner";
import { useNavigate } from "react-router-dom";

export default function Bamboo() {
  const navigate = useNavigate();
  const toBamboo = (e: React.MouseEvent) => {
    navigate("/bamboo");
  };
  return (
    <s.Wrapper onClick={toBamboo} color="#00BC81">
      <s.TextBox>
        <s.Title>대나무 숲</s.Title>
        <s.Content>
          매주 새롭게 바뀌는 주제에 자유롭게 의견을 남겨주세요.
        </s.Content>
      </s.TextBox>
      <s.Image src={bamboo} alt="bamboo" />
    </s.Wrapper>
  );
}
