import malitell from "../../assets/images/malitell.png";
import * as s from "../../styles/home/carousel";

export default function Carousel() {
  return (
    <s.Wrapper>
      <s.Content>
        <s.Img src={malitell} alt="" />{" "}
      </s.Content>
    </s.Wrapper>
  );
}
