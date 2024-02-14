import * as g from "../../styles/grid";
import * as s from "../../styles/etc/notFound";
import malitell from "../../assets/images/malitell.png";

export default function NotFound() {
  return (
    <g.GridNav>
      <g.Box $col="1/6" $row="3/8" $color="white">
        <s.Img src={malitell} alt="cat" />
      </g.Box>
      <g.Box $col="6/13" $row="3/8" $color="white">
        <s.Title>404 ERROR</s.Title>
        <s.SubTitle>페이지를 찾을 수 없습니다.</s.SubTitle>
        <s.Content>
          페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.
          <br />
          입력하신 주소가 정확한지 다시 한 번 확인해주세요.
        </s.Content>
      </g.Box>
    </g.GridNav>
  );
}
