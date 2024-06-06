import {IRole} from "@/app/interface/IRole";

export interface IUser{
  userId:string;
  userName:string;
  avatarUrl:string;
  createTime:string;
  updateTime:string;
  role?:IRole[]
}
