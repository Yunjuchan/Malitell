import { useState } from "react";
import * as s from "../../../styles/article/createForm";
interface Tag {
  id: number;
  name: string;
}

export default function CreateForm() {
  const [tag, setTag] = useState("");

  return (
    <s.Wrapper>
      <s.TopBox>
        <s.TagBox>
          {["우울", "가족", "취업"].map((tag, index) => (
            <s.Tag key={index}>{tag}</s.Tag>
          ))}
        </s.TagBox>
        <s.Title></s.Title>
      </s.TopBox>
      <s.Input></s.Input>
      <s.Submit type="submit" />
    </s.Wrapper>
  );
}
