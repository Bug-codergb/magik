interface IRole {
  id: string;
  name: string;
}
interface IUser {
  userId: string;
  userName: string;
  avatarUrl: string;
  gender: number;
  token: string;
  createTime: string;
  updateTime: string;
  role: IRole[];
}
export type { IUser, IRole };
