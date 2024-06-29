import { IUser } from '@/app/interface/IUser';
import cache from '@/app/utils/cache';
import { createAppSlice } from '@/lib/createAppSlice';
import type { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
export interface UserSliceState {
	userMsg: IUser;
	userDetail: any[];
}
const initialState: UserSliceState = {
	userMsg: {
		userId: '',
		userName: '',
		token: '',
		password: '',
		gender: 0,
		avatarUrl: '',
		avatar: '',
		createTime: '',
		updateTime: '',
		role: [],
		roleList: [],
		menu: {},
	},
	userDetail: [],
};

export const userSlice = createAppSlice({
	name: 'user',
	initialState,
	reducers: (create) => ({
		changeUserMsg: create.reducer((state, action: PayloadAction<IUser>) => {
			state.userMsg = action.payload;
		}),
		changeUserAction: create.asyncThunk(
			async (user: Partial<IUser>) => {
				let params = {
					userName: user.userName!,
					password: user.password!,
				};
				const res = await fetch('/api/login', {
					method: 'post',
					body: JSON.stringify(params),
					headers: {
						'Content-Type': 'application/json;charset=UTF-8',
					},
				});
				const ret = await res.json();
				if (ret.code === 200) {
					return ret.data;
				} else if (ret.code === 403) {
					notification.warning({
						message: ret.message,
						description: '您没有任何菜单权限，请联系管理员',
						placement: 'bottomLeft',
					});
					return {};
				}
			},
			{
				pending: () => {},
				fulfilled: (state, action) => {
					state.userMsg = action.payload;
					cache.setCache('user', state.userMsg);
					return state;
				},
				rejected: () => {},
			}
		),
	}),
	selectors: {
		selectUserMsg: (state) => state.userMsg,
	},
});
export const { changeUserMsg, changeUserAction } = userSlice.actions;
export const { selectUserMsg } = userSlice.selectors;
