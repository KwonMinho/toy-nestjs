export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLICK = 'PUBLICK',
  PRIVATE = 'PRIVATE',
}
