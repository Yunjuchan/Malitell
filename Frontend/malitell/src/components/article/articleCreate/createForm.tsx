import * as s from "../../../styles/article/createForm";

export default function CreateForm() {
  return (
    <s.Wrapper>
      <s.TopBox>
        <s.Filter></s.Filter>
        <s.Title></s.Title>
      </s.TopBox>
      <s.Input></s.Input>
      {/* <MyCalendar /> */}
      <s.Submit type="submit" />
    </s.Wrapper>
  );
}
