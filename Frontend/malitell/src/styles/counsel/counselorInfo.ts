import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 99%;
  min-height: 500px;
  margin: 0% auto;
  background: #fff;
  border-radius: 15px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
`;

export const MsgTitle = styled.div`
  color: var(--global-gray-900, #222);
  font-family: "Noto Sans KR",sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.5px;
  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 25px;
`;

export const Bar = styled.div`
  background-color: rgb(34, 34, 34);
  width: 48px;
  stroke-width: 4px;
  stroke: rgb(0, 0, 0);
  height: 5px;
  margin-left: 25px;
`;

export const Sectiontable = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  font-size: 20px;
  font-weight: 700;
`;

export const ProCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  gap: 40px;
  margin-top: 30px;
  margin-left: 25px;
  margin-bottom: 30px;
  padding-bottom: 30px;
`;

export const ProContent = styled.div`
  width: 82px;
  display: flex;
  gap: 8px;
  min-width: max-content;
  font-weight: 700;
`;

export const ItemBox = styled.div`
  display: grid;
  gap: 2px 32px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  color: var(--global-gray-700, #626262);
  font-size: 14px;
`;


export const marker = styled.li`
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
    margin: 0;

    &:not(:first-child) {
        margin-top: 10px;
    }
`;
