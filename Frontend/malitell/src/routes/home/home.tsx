import { Grid } from "../../styles/home/grid";
import Carousel from "../../components/home/carousel";
import Nav from "../../components/home/nav";
import Metaverse from "../../components/home/banners/metaverse";
import Bamboo from "../../components/home/banners/bamboo";
import Counsel from "../../components/home/counsel";
import * as g from "../../styles/grid";

export default function Home() {
  return (
    <>
      <Carousel />
      <g.BackHome />
      <Grid>
        {/* 홈 네브 */}
        <g.Box $col="1/13" $row="1/2" $color="white">
          <Nav />
        </g.Box>

        {/* 배너 */}
        <g.Box $col="1/6" $row="4/5" $color="#fbf3fd">
          <Metaverse />
          <Bamboo />
        </g.Box>

        {/* 상담하기 디자인 구상 중 */}
        <g.Box $col="6/13" $row="4/5" $color="#fbf3fd">
          <Counsel />
        </g.Box>
      </Grid>
    </>
  );
}
