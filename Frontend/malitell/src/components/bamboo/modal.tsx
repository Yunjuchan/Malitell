import { useForm } from "react-hook-form";
import * as s from "../../styles/bamboo/modal";

interface props {
  onClick: (e: React.MouseEvent) => void;
}

export default function Modal({ onClick }: props) {
interface FormData {
  // content
}

  return (
    <s.Wrapper>
      <s.ToolBox>
        <span onClick={onClick}>x</span>
      </s.ToolBox>
      <s.Form>
        <s.Input placeholder="메시지를 작성해 주세요." />
        <s.Submit type="submit" value="작성" />
      </s.Form>
    </s.Wrapper>
  );
}
