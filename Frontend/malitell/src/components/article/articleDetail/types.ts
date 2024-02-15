// types.ts
export interface CommonFields {
  title: string;
  content: string;
  name: string;
  hit: number;
  time: string;
  userSeq: number;
}

export interface GatherArticle extends CommonFields {
  selfHelpGroup: any; // 이 부분은 실제 데이터에 맞게 수정해주세요.
  gatheringComments: any[]; // 이 부분은 실제 데이터에 맞게 수정해주세요.
}

export interface CommunityArticle extends CommonFields {
  communityComments: any[]; // 이 부분은 실제 데이터에 맞게 수정해주세요.
  worryTag: string;
}

export interface OvercomeArticle extends CommonFields {
  overComingComments: any[]; // 이 부분은 실제 데이터에 맞게 수정해주세요.
}


