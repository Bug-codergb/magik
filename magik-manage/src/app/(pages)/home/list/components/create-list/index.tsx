'use client';
import ProDrawer from '@/app/components/pro-drawer/index';
import ProForm from '@/app/components/pro-form';
import { IListsDTO } from '@/app/interface/ILists';
import { IProForm } from '@/app/interface/IProForm';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
const CreateUser = forwardRef((props, ref) => {
	const [title, setTitle] = useState<string>('创建列表');
	const [open, setOpen] = useState<boolean>(false);

	const handleClose = () => {
		setOpen(false);
	};
	const proFormRef = useRef();
	const handleConfirm = () => {
		proFormRef.current?.validateForm();
	};

	const showDrawer = () => {
		setOpen(true);
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
	const [formData, setFormData] = useState<IListsDTO>({
		name: '',
		description: '',
		userId: '',
		attr: 0,
		avatar: { id: '', url: '' },
		cover: { id: '', url: '' },
	});
	return (
		<>
			<ProDrawer title={title} onClose={handleClose} onConfirm={handleConfirm} open={open}>
				<ProForm<IListsDTO> config={config} formData={formData} ref={proFormRef} />
			</ProDrawer>
		</>
	);
});
export default CreateUser;
