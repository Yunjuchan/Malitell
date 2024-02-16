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
            <s.Button><a href="https://heather-entree-15a.notion.site/README-md-90d1210269a84b0ebbb85b6d3dba8305">자세히 보기 {'>'} </a></s.Button>
          </s.Subscribe>
        </s.TextBox>
        <s.Img src={malitell} alt="cat" />
      </s.Content>
    </s.Wrapper>
  );
}
