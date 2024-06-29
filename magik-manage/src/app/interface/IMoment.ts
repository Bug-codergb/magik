interface IMoment {
	id: string;
	content: string;
	view: number;
	user: IUser;
	createTime: string;
	updateTime: string;
	mediaList: IFile[];
}
interface IUser {
	userId: string;
	userName: string;
	avatarUrl: string;
}
interface IFile {
	id: string;
	originalname: string;
	url: string;
	filename: string;
	size: string;
	description: string;
	warn: string;
	createTime: string;
	updateTime: string;
}
export type { IFile, IMoment, IUser };
