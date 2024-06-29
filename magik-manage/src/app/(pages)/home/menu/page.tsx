'use client';
import CreateMenu from '@/app/components/menu/create-menu';
import ProTable from '@/app/components/pro-table';
import { IMenu } from '@/app/interface/IMenu';
import type { TableColumnsType } from 'antd';
import { Button, Space, message } from 'antd';
import { useRef } from 'react';

const Menu = (): React.ReactNode => {
	const columns: TableColumnsType<IMenu> = [
		{
			title: '名称',
			dataIndex: 'title',
			key: 'title',
			width: 200,
			fixed: 'left',
		},
		{
			title: '路径',
			dataIndex: 'path',
			key: 'path',
			width: 200,
		},
		{
			title: '排序',
			dataIndex: 'sort',
			key: 'sort',
			width: 100,
		},
		{
			title: '重定向',
			dataIndex: 'redirect',
			key: 'redirect',
			width: 200,
		},
		{
			title: '图标',
			dataIndex: 'icon',
			key: 'icon',
			width: 200,
		},
		{
			title: '组件',
			dataIndex: 'component',
			key: 'component',
			width: 200,
		},
		{
			title: '路由元数据',
			dataIndex: 'meta',
			key: 'meta',
			width: 200,
		},
		{
			title: '操作',
			key: 'action',
			fixed: 'right',
			width: 260,
			render: (_, record) => (
				<Space size="middle">
					<Button type={'link'} onClick={() => handleCreateMenu(record)}>
						新增子菜单
					</Button>
					<Button type="link">编辑</Button>
					<Button type="link" danger onClick={() => handleDeleteMenu(record)}>
						删除
					</Button>
				</Space>
			),
		},
	];

	const createMenuRef = useRef<any>();
	const handleCreateMenu = (menu?: IMenu) => {
		let raw: IMenu = menu
			? menu!
			: {
					parent: '-1',
					title: '根目录',
					path: '',
					icon: '',
					id: '-1',
					redirect: '',
					meta: '',
					children: [],
					component: '',
				};
		createMenuRef.current?.showModal(raw);
	};

	const handleDeleteMenu = async (item: IMenu) => {
		const ret = await fetch(`/api/menu/delete/${item.id}`, { method: 'post' });
		const res = await ret.json();
		if (res.code === 200) {
			tableRef.current?.search();
			message.success('删除成功');
		}
	};
	const tableRef = useRef();
	const handleSuccess = (): void => {
		tableRef.current?.search();
	};
	return (
		<div className={'card table-box'}>
			<ProTable<IMenu>
				url={'/api/menu/list'}
				columns={columns}
				tableData={[]}
				params={{}}
				pagination={true}
				ref={tableRef}
				tableToolButton={
					<Button type={'primary'} onClick={() => handleCreateMenu()}>
						新增菜单
					</Button>
				}
			/>
			<CreateMenu ref={createMenuRef} finish={() => handleSuccess()} />
		</div>
	);
};
export default Menu;
