interface IRoleMenu {
	menuId: string;
	half: number;
}
export interface IRole {
	id: string;
	name: string;
	menuList: IRoleMenu[];
	createTime: string;
	updateTime: string;
}
