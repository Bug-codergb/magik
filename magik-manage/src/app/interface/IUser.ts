import { IMenu } from '@/app/interface/IMenu';
import { IRole } from '@/app/interface/IRole';

export interface IUser {
	userId: string;
	userName: string;
	token: string;
	password: string;
	avatarUrl: string;
	avatar: string;
	createTime: string;
	updateTime: string;
	gender: number;
	role: IRole[];
	roleList: string[];
	menu: IMenu;
}
