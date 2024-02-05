import React, { useState } from "react";
import { Search, Wrapper, InputBox } from "../../../styles/counsel/searchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox() {
  const [focus, setFocus] = useState(false);
  const handleFocus = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setFocus(!focus);
  }
  return (
    <Wrapper>
      <InputBox className={focus? "focus" : "normal"}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#bf94e4" }}
        />
        <Search placeholder="전문가 검색" onFocus={handleFocus} onBlur={handleFocus} />
      </InputBox>
    </Wrapper>
  );
}
