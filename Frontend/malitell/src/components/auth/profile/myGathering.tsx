import { useEffect, useState } from "react";
import * as s from "../../../styles/auth/profile/myGathering";
import { mySHGroup } from "../../../store/auth/profileSlice";
export interface mySHGroupData {
  title: string;
  content: string;
  time: string;
  selfHelpType: string;
  selfHelpGroupSeq: number;
}
export default function MyGathering() {
  const [myGroups, setMyGroups] = useState<mySHGroupData[]>();
  useEffect(() => {
    mySHGroup().then((res) => {
      setMyGroups(res);
    });
  }, []);

  return (
    <s.Wrapper>
      {myGroups && myGroups.length > 0 ? (
        <>
          {myGroups.map((group, index) => (
            <div>
              {group.title} {group.selfHelpType}
            </div>
          ))}
        </>
      ) : (
        <>
          <div>아직 모임이 없습니다.</div>
        </>
      )}
    </s.Wrapper>
  );
}
