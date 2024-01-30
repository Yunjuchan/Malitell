import Carousel from "../../components/home/carousel";
import * as g from "../../styles/grid";
import Nav from "../../components/home/nav";
import Metaverse from "../../components/common/banners/metaverse";
import Bamboo from "../../components/common/banners/bamboo";
import Counsel from "../../components/home/counsel";
import Articles from "../../components/home/articles";

export default function home() {
  return (
    <>
      <Carousel />
      <g.BackHome />
      <g.Grid>
        {/* 홈 네브 */}
        <g.Box $col="1/13" $row="1/3">
          <Nav />
        </g.Box>

        {/* 배너 */}
        <g.Box $col="1/6" $row="3/8">
          <Metaverse />
          <Bamboo />
        </g.Box>

        {/* 상담하기 디자인 구상 중 */}
        <g.Box $col="6/13" $row="3/8">
          <Counsel />
        </g.Box>

        {/* 게시글 */}
        <g.Box $col="1/13" $row="8/13">
          <Articles />
        </g.Box>
      </g.Grid>
    </>
  );
}
