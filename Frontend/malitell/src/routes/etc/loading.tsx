import malitell from '../../assets/images/malitell.png'
import * as g from "../../styles/grid";
import * as s from "../../styles/etc/loading";

export default function Loading() {
  return (
    <g.Grid>
      <s.LoadingBox>
        <s.Message>You can do it!</s.Message>
        <s.Image>
          <img src={malitell} alt="malitell" />
        </s.Image>
      </s.LoadingBox>
    </g.Grid>
  );
}
