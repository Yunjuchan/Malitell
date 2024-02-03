import { Wrapper, TopBox, Filter, Title, Input, Submit } from "../../styles/article/createForm";

export default function CreateForm() {
  return (
    <Wrapper>
      <TopBox>
        <Filter></Filter>
        <Title></Title>
      </TopBox>
      <Input></Input>
      <Submit type="submit" />
    </Wrapper>
  )
}
