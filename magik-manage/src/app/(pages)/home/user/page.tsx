'use client';
import ProTable from '@/app/components/pro-table/index';
import type { IUser } from '@/app/interface/IUser';
import { UserOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Avatar, Button, Space, Tag } from 'antd';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import CreateUser from './components/createUser/index';
const type: string[] = ['success', 'processing', 'error', 'warning', 'default'];
const Page = () => {
	const columns: TableColumnsType<IUser> = [
		{
			title: '用户名称',
			dataIndex: 'userName',
			width: 150,
		},
		{
			title: '头像',
			dataIndex: 'avatarUrl',
			width: 120,
			render: (_, row) => {
				return <Avatar size={64} icon={<UserOutlined />} src={row.avatarUrl} />;
			},
		},
		{
			title: '角色',
			width: 280,
			render: (_, row) => {
				let role = row.role || [];
				return role.map((item, index) => {
					return (
						<Tag key={item.id} color={type[index % 5]}>
							{item.name}
						</Tag>
					);
				});
			},
		},
		{
			title: '性别',
			width: 80,
			render: (_, row) => {
				return <span>{row.gender === 0 ? '男' : '女'}</span>;
			},
		},
		{
			title: '创建时间',
			dataIndex: 'createTime',
			width: 140,
		},
		{
			title: '操作',
			key: 'action',
			fixed: 'right',
			width: 200,
			render: (_, record) => (
				<Space size="small">
					<Button type={'link'} onClick={() => handleShowUserDetail(record)}>
						查看
					</Button>
					<Button type={'link'} onClick={() => handleEditUser(record)}>
						编辑
					</Button>
					<Button type="link" danger onClick={() => handleDeleteUser(record)}>
						删除
					</Button>
				</Space>
			),
		},
	];
	const router = useRouter();
	const handleEditUser = (row: IUser) => {
		createUserRef.current?.showDrawer(row);
	};
	const handleShowUserDetail = (row: IUser) => {
		router.push(`/home/user/${row.userId}`);
	};
	const handleDeleteUser = async (row: IUser) => {
		const res = await fetch(`/api/user/delete/${row.userId}`, {
			method: 'post',
		});
		const ret = await res.json();
		if (ret.code === 200) {
			handleRefresh();
		}
	};

	const createUserRef = useRef();
	const handleCreateUser = () => {
		createUserRef.current?.showDrawer();
	};
	const tableRef = useRef();
	const handleRefresh = () => {
		tableRef.current?.search();
	};
	return (
		<div className={'card table-box'}>
			<ProTable<IUser>
				ref={tableRef}
				columns={columns}
				url={'/api/user/list'}
				pagination={true}
				params={{}}
				rowKey={'userId'}
				tableToolButton={
					<Button type={'primary'} onClick={() => handleCreateUser()}>
						新增用户
					</Button>
				}
			/>
			<CreateUser ref={createUserRef} success={handleRefresh} />
		</div>
	);
};
export default Page;
