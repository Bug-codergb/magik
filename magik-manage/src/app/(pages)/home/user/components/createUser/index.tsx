'use client';
import ProDrawer from '@/app/components/pro-drawer';
import UploadFile from '@/app/components/upload-file';
import { IRole } from '@/app/interface/IRole';
import { IUser } from '@/app/interface/IUser';
import { request } from '@/app/utils/request';
import { PlusOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Form, Input, Radio, Select, message } from 'antd';
import { FC, FormEvent, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface IProps {
	success?: () => void;
}
interface IFormData {
	userId: string;
	userName: string;
	password: string;
	gender: number;
	avatar: string;
	avatarUrl: string;
	roleList: string[];
}
const CreateUser: FC<IProps> = forwardRef((props, propsRef) => {
	const { success } = props;

	const [title, setTitle] = useState<string>('新增用户');
	const [open, setOpen] = useState(false);

	const [user, setUser] = useState<IFormData>({
		userId: '',
		userName: '',
		password: '',
		gender: 1,
		avatar: '',
		roleList: [],
		avatarUrl: '',
	});
	const [formRef] = Form.useForm();

	const [roleList, setRole] = useState<IRole[]>([]);
	useEffect(() => {
		request({
			url: '/api/role/all',
			params: {
				page: 1,
				limit: 10000,
			},
		}).then((res) => {
			setRole(res.rows);
		});
	}, []);
	const onClose = () => {
		setOpen(false);
	};
	const onConfirm = () => {
		formRef.submit();
	};

	const isUpdate = useRef<boolean>(false);
	const showDrawer = (val?: IUser) => {
		setOpen(true);
		formRef.resetFields();
		setShowAvatar(false);
		isUpdate.current = Boolean(val);
		isUpdate.current ? setTitle('更新用户') : setTitle('新增用户');
		if (isUpdate.current) {
			val!.roleList = val!.role.map((item) => item.id);
			setUser({ ...val! });
			setShowAvatar(true);
			setAvatarUrl(val!.avatar ? val!.avatarUrl : '');
			formRef.setFieldsValue({ ...val! });
		}
	};
	useImperativeHandle(propsRef, () => {
		return {
			showDrawer,
		};
	});
	const handleGenderChange = (e: RadioChangeEvent) => {
		const formData = { ...user };
		user.gender = e.target.value;
		setUser(user);
	};
	const handleRoleChange = () => {};
	const handleFormFinish = (val: any) => {
		let params = {
			...val,
		};
		request({
			url: isUpdate.current ? `/api/user/update/${user.userId}` : '/api/user/create',
			body: params,
		}).then(() => {
			setOpen(false);
			success && success();
			message.success(isUpdate.current ? '更新成功' : '创建成功');
		});
	};

	const [isShowAvatar, setShowAvatar] = useState<boolean>(false);
	const [avatarUrl, setAvatarUrl] = useState<string>('');
	const uploadFileRef = useRef();
	const handleAvatarChange = (e: FormEvent<HTMLInputElement>) => {
		const file = e.currentTarget?.files![0];

		uploadFileRef.current?.showModal(file);
	};
	const handleConfirm = async (val: any) => {
		const url = URL.createObjectURL(val);
		setShowAvatar(true);
		setAvatarUrl(url);
		const rawFormData = new FormData();
		rawFormData.append('file', val);
		rawFormData.append('desc', '用户头像');
		rawFormData.append('warn', '');
		const response = await fetch('/api/file/upload', {
			body: rawFormData,
			method: 'post',
		});
		const res = await response.json();
		if (res.code === 200) {
			const data = { ...user };
			data.avatar = res.data[0].id;
			formRef.setFieldValue('avatar', res.data[0].id);
		}
	};
	return (
		<>
			<ProDrawer onClose={onClose} open={open} title={title} onConfirm={onConfirm}>
				<Form
					name={'create-user'}
					layout={'vertical'}
					scrollToFirstError={true}
					autoComplete="new-password"
					form={formRef}
					onFinish={handleFormFinish}
				>
					<Form.Item
						label={'用户名'}
						name={'userName'}
						rules={[{ required: true, message: '用户名不能为空' }]}
						initialValue={user.userName}
					>
						<Input
							placeholder={'请输入用户名'}
							value={user.userName}
							autoComplete={'new-password'}
						/>
					</Form.Item>
					<Form.Item
						label={'密码'}
						name={'password'}
						rules={[{ required: true, message: '密码不能为空' }]}
						initialValue={''}
					>
						<Input.Password placeholder={'请输入密码'} autoComplete={'new-password'} />
					</Form.Item>
					<Form.Item
						label={'性别'}
						name={'gender'}
						initialValue={user.gender}
						rules={[{ required: true, message: '性别不能为空' }]}
					>
						<Radio.Group onChange={handleGenderChange} value={user.gender}>
							<Radio value={0}>男</Radio>
							<Radio value={1}>女</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item
						label={'角色'}
						name={'roleList'}
						initialValue={user.roleList}
						rules={[{ required: true, message: '角色不能为空' }]}
					>
						<Select
							placeholder={'请选择用户角色'}
							mode={'multiple'}
							maxCount={40}
							style={{ width: '100%' }}
							onChange={handleRoleChange}
							options={roleList}
							value={user.roleList}
							fieldNames={{ label: 'name', value: 'id' }}
						/>
					</Form.Item>
					<Form.Item label={'头像'} name={'avatar'} initialValue={user.avatar}>
						<div className={'relative flex h-40 w-40 justify-center bg-slate-100'}>
							{!isShowAvatar && (
								<input
									className={'absolute size-full opacity-0'}
									type={'file'}
									onChange={handleAvatarChange}
								/>
							)}
							{!isShowAvatar && <PlusOutlined />}
							{isShowAvatar && <img src={avatarUrl} />}
						</div>
					</Form.Item>
				</Form>
			</ProDrawer>
			<UploadFile ref={uploadFileRef} aspectRatio={1} confirm={(val: any) => handleConfirm(val)} />
		</>
	);
});
export default CreateUser;
