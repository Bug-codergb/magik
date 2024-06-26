import { IUser } from '@/app/interface/IUser';

interface ILists {
	id: string;
	name: string;
	description: string;
	user: IUser;
	count: number;
	attr: number;
	avatarUrl: string;
	coverUrl: string;
	createTime: string;
	updateTime: string;
}
export type { ILists };
