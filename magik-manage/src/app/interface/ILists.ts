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
type file = {
	id: string;
	url: string;
};
interface IListsDTO {
	name: string;
	description: string;
	userId: string;
	attr: number;
	cover: file;
	avatar: file;
}
export type { ILists, IListsDTO };
