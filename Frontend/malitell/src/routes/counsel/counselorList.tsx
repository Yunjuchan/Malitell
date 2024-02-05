import { Back, Box } from "../../styles/grid";
import { Grid } from "../../styles/counsel/grid";
import styled from "styled-components";
import SearchBox from "../../components/counsel/counselorList/searchBox";
import Filter from "../../components/counsel/counselorList/filter";
import Counselors from "../../components/counsel/counselorList/counselors";

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
        <Box $col="1/4" $row="2/3" $position="sticky" $top="160px">
          <SearchBox />
        </Box>
        <Box $col="1/4" $row="3/6" $position="sticky" $top="230px">
          <Filter />
        </Box>
        <Box $col="4/13" $row="2/12">
          <Counselors />
        </Box>
        <Box $col="4/14" $row="12/13">
          pagenation
        </Box>
      </Grid>
    </>
  );
}
