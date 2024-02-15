import { Wrapper } from "../../styles/bamboo/message";
import { useEffect } from "react";

interface props {
  result: String;
}

export default function Message({ result }: props) {
  useEffect(() => {
    console.log(result);
  });
  return <Wrapper>{result}</Wrapper>;
}
