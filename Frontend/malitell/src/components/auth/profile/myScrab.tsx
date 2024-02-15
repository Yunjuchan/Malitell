import { useEffect, useState } from "react";
import * as s from "../../../styles/auth/profile/myScrab";
import { myscrapSHGroup } from "../../../store/article/gatherSlice";
export interface mySHScrapData {
  title: string;
  content: string;
  time: string;
  selfHelpType: string;
  selfHelpGroupSeq: number;
}
export default function MyScrab() {
  const [myScraps, setMyScraps] = useState<mySHScrapData[]>();
  useEffect(() => {
    myscrapSHGroup().then((res) => {
      console.log(res);
      setMyScraps(res);
    }); 
  }, []);
  return (
    <s.Wrapper>
      {myScraps && myScraps.length > 0 ? (
        <>
          {myScraps.map((scrap, index) => (
            <div>
              {scrap.title}
            </div>
          ))}
        </>
      ) : (
        <>
          <div>아직 스크랩한 글이 없습니다.</div>
        </>
      )}
    </s.Wrapper>
  );
}
