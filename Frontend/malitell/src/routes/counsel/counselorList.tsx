import { Back, Box } from "../../styles/grid";
import { Grid } from "../../styles/counsel/grid";
import styled from "styled-components";
import SearchBox from "../../components/counsel/counselorList/searchBox";
import Filter from "../../components/counsel/counselorList/filter";
import Counselors from "../../components/counsel/counselorList/counselors";
import Bamboo from "../../components/common/banners/bamboo";
import Metaverse from "../../components/common/banners/metaverse";

const Text = styled.div`
  width: 100%;
  height: 70px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
`

const Line = styled.hr`
  height: 2.5px;
  margin-top: 0;
  background-color: #bf94e4;
  border: none;
`

export default function CounselorList() {
  return (
    <>
      <Back />
      <Grid>
        <Box $col="1/13" $row="1/2" $position="sticky" $top="80px">
          <Text>
            전문가 찾기
          </Text>
          <Line />
        </Box>
        <Box $col="1/4" $row="2/5" $position="sticky" $top="170px">
          <Bamboo />
          <Metaverse />
        </Box>
        <Box $col="4/13" $row="2/6">
          <Counselors />
        </Box>
      </Grid>
    </>
  );
}
