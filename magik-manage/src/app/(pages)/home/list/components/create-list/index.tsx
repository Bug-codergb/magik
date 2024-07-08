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
				tag: 'Input',
			},
		],
		[
			{
				name: 'attr',
				label: '属性',
				required: true,
				initialValue: '',
				tag: 'Input',
			},
		],
		[
			{
				name: 'cover',
				label: '封面',
				required: true,
				initialValue: '',
				tag: 'Input',
			},
		],
		[
			{
				name: 'avatar',
				label: '缩略图',
				required: true,
				initialValue: '',
				tag: 'Input',
			},
		],
	];
	const [formData, setFormData] = useState<IListsDTO>({
		name: '',
		description: '',
		userId: '',
		attr: 0,
		avatar: '',
		cover: '',
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
