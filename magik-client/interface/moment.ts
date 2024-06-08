import type { IFile } from "./file";
import type { IUser } from "./user";

interface IMoment {
  id: string;
  content: string;
  view: number;
  user: IUser;
  createTime: string;
  updateTime: string;
  mediaList: IFile[];
}
export type { IMoment };
