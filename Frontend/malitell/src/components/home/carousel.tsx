import malitell from "../../assets/images/favicon.png";
import * as s from "../../styles/home/carousel";

export default function Carousel() {
  return (
    <s.Wrapper>
      <s.Content>
        <s.TextBox>
          <s.Title>마리텔 사용가이드</s.Title>
          <s.Subscribe>
            사이트를 이용하기 전에 한번 읽어보는건 어떨까요?
            <br />
            <s.Button>자세히 보기 {'>'} </s.Button>
          </s.Subscribe>
        </s.TextBox>
        <s.Img src={malitell} alt="cat" />
      </s.Content>
    </s.Wrapper>
  );
}
