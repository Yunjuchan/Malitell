import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Wrapper,
  InputBox,
  Input,
} from "../../../styles/article/articleDetail/search";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Search() {
  const [focus, setFocus] = useState(false);
  const handleFocus = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setFocus(!focus);
  };

  return (
    <Wrapper>
      <InputBox className={focus ? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#bf94e4" }}
        />
        <Input
          onFocus={handleFocus}
          onBlur={handleFocus}
          placeholder="게시글 검색"
        />
      </InputBox>
    </Wrapper>
  );
}
