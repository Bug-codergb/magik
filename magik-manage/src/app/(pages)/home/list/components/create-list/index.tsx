'use client';
import ProDrawer from '@/app/components/pro-drawer/index';
import ProForm from '@/app/components/pro-form';
import { ILists, IListsDTO } from '@/app/interface/ILists';
import { IProForm } from '@/app/interface/IProForm';
import { request } from '@/app/utils/request';
import { message } from 'antd';
import { FC, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface IProps {
	success: () => void;
}
const CreateUser: FC<IProps> = forwardRef((props, ref) => {
	const { success } = props;
	const [title, setTitle] = useState<string>('创建列表');
	const [open, setOpen] = useState<boolean>(false);

	const handleClose = () => {
		setOpen(false);
	};
	const proFormRef = useRef();
	const handleConfirm = () => {
		proFormRef.current?.validateForm();
	};
	const [formData, setFormData] = useState<IListsDTO>({
		id: '',
		name: '',
		description: '',
		userId: '',
		attr: 0,
		avatar: { id: '', url: '' },
		cover: { id: '', url: '' },
	});
	const [isUpdate, setIsUpdate] = useState<boolean>(false);
	const detail = useRef<ILists | null>(null);
	useEffect(() => {
		if (isUpdate && proFormRef.current) {
			proFormRef.current && proFormRef.current.setFieldsValue(detail.current);
		}
		if (!isUpdate && proFormRef.current) {
			proFormRef.current && proFormRef.current.resetFields();
		}
	}, [open, isUpdate, proFormRef.current]);
	const showDrawer = (row?: ILists) => {
		setOpen(true);
		const tmpIsUpdate = Boolean(row);
		setIsUpdate(tmpIsUpdate);
		if (tmpIsUpdate) {
			let raw: IListsDTO = {
				id: row!.id,
				userId: '',
				name: row!.name,
				description: row!.description,
				attr: row!.attr,
				avatar: { id: row!.avatar, url: row!.avatarUrl },
				cover: { id: row!.cover, url: row!.coverUrl },
			};
			setFormData(raw);
			detail.current = raw!;
		} else {
			let raw = {
				id: '',
				name: '',
				description: '',
				userId: '',
				attr: 0,
				avatar: { id: '', url: '' },
				cover: { id: '', url: '' },
			};
			setFormData(raw);
		}
	};
	useImperativeHandle(ref, () => {
		return {
			showDrawer,
		};
	});
	const config: IProForm[][] = [
		[
			{
				name: 'name',
				label: '名称',
				required: true,
				initialValue: '',
				tag: 'Input',
			},
		],
		[
			{
				name: 'description',
				label: '简介',
				required: true,
				initialValue: '',
				tag: 'TextArea',
				attr: {},
			},
		],
		[
			{
				name: 'attr',
				label: '属性',
				required: true,
				initialValue: '',
				tag: 'Radio',
				group: [
					{
						label: '私有',
						value: 0,
					},
					{
						label: '公开',
						value: 1,
					},
				],
			},
		],
		[
			{
				name: 'cover',
				label: '横幅',
				required: true,
				initialValue: '',
				tag: 'Cover',
				attr: {
					aspectRatio: 2.99,
					realWidth: 500,
				},
			},
		],
		[
			{
				name: 'avatar',
				label: '头像',
				required: true,
				initialValue: '',
				tag: 'Cover',
				attr: {
					aspectRatio: 1,
					realWidth: 150,
				},
			},
		],
	];

	const handleFormData = async (val: IListsDTO) => {
		const res = await request({
			url: isUpdate ? `/server/lists/update/${detail.current!.id}` : '/server/lists/create',
			body: {
				...val,
				cover: val.cover.id,
				avatar: val.avatar.id,
			},
		});
		if (res.code === 200) {
			message.success(isUpdate ? '列表更新成功' : '列表创建成功');
			setOpen(false);
			success && success();
		}
	};
	return (
		<>
			<ProDrawer title={title} onClose={handleClose} onConfirm={handleConfirm} open={open}>
				<ProForm<IListsDTO>
					config={config}
					formData={formData}
					ref={proFormRef}
					getFormData={handleFormData}
				/>
			</ProDrawer>
		</>
	);
});
export default CreateUser;
