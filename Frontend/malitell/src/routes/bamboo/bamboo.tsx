import styled from "styled-components";
import bamboo from '../../assets/images/banner/bamboo.png'
import { Back, Box } from "../../styles/grid";
import { Grid } from "../../styles/bamboo/grid";
import Subject from "../../components/bamboo/subject";
import Filter from "../../components/bamboo/filter";
import MessageList from "../../components/bamboo/messageList";
import Metaverse from "../../components/home/banners/metaverse";

const Img = styled.img`
  height: 75px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Text = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: bold;
  color: #00BC81;
  text-shadow: 1px 1px lightgray;
`;

export default function Bamboo() {
  return (
    <>
      <Back />
      <Grid>
        <Box $col="1/4" $row="2/3" $position="sticky" $top="160px">
          <Metaverse />
        </Box>
        <Box $col="4/13" $row="1/2" $display="flex" $position="sticky" $top="80px" $zindex="1">
          <Img src={bamboo} />
          <Text>대나무 숲</Text>
        </Box>
        <Box $col="4/13" $row="2/3">
          <Subject />
        </Box>
        <Box $col="4/13" $row="3/4">
          <Filter />
          <MessageList />
        </Box>
      </Grid>
    </>
  );
}
