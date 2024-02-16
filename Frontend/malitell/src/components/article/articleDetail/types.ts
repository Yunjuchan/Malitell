// types.ts
export interface CommonFields {
  title: string;
  content: string;
  name: string;
  hit: number;
  time: string;
  userSeq: number;
}

export interface SelfHelpGroup {
  selfHelpGroupSeq: number;
  title: string;
  content: string;
  times: string[];
  selfHelpType: string;
  selfHelpGroupUsers: number[];
}

export interface CommentType {
  username: string;
  content: string;
  time: string;
}

export interface GatherArticle extends CommonFields {
  selfHelpGroup: SelfHelpGroup;
  gatheringComments: CommentType[]; 
  participants: number[];
  headcount: number;
}

export interface CommunityArticle extends CommonFields {
  communityComments: CommentType[];
  worryTag: 'COURSE' | 'EMOTION' | 'RELATIONSHIP' | 'ECONOMY' | 'HEALTH';
}

export interface OvercomeArticle extends CommonFields {
  overComingComments: CommentType[];
}


