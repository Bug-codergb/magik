'use client';
import ProTable from '@/app/components/pro-table';
import { ILists } from '@/app/interface/ILists';
import { request } from '@/app/utils/request';
import { UserOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Avatar, Button, Image, message, Space, Tag } from 'antd';
import { useRef } from 'react';
import CreateList from './components/create-list';
const List = () => {
	const columns: TableColumnsType<ILists> = [
		{
			title: '名称',
			dataIndex: 'name',
			width: 150,
		},
		{
			title: '简介',
			dataIndex: 'description',
			width: 150,
		},
		{
			title: '成员',
			dataIndex: 'count',
			width: 90,
		},
		{
			title: '属性',
			dataIndex: 'attr',
			width: 100,
			render: (_, row) => {
				return (
					<Tag color={row.attr === 0 ? 'red' : 'success'}>{row.attr === 0 ? '私有' : '公共'}</Tag>
				);
			},
		},
		{
			title: '创建人',
			dataIndex: 'user',
			width: 120,
			key: 'user',
			render: (_, row) => {
				return (
					<Space>
						<Avatar size={50} icon={<UserOutlined />} src={row.user.avatarUrl} />
						<span>{row.user.userName}</span>
					</Space>
				);
			},
		},
		{
			title: '封面',
			dataIndex: 'coverUrl',
			width: 180,
			render: (_, row) => {
				return (
					<div>
						<Image width={100} src={row.coverUrl} />
					</div>
				);
			},
		},
		{
			title: '缩略图',
			dataIndex: 'avatarUrl',
			width: 200,
			render: (_, row) => {
				return (
					<div>
						<Image width={100} src={row.avatarUrl} />
					</div>
				);
			},
		},
		{
			title: '创建时间',
			dataIndex: 'createTime',
			width: 180,
		},
		{
			title: '操作',
			key: 'action',
			fixed: 'right',
			width: 200,
			render: (_, row) => {
				return (
					<Space size={'small'}>
						<Button type={'link'}>查看</Button>
						<Button type={'link'} onClick={() => handleEditLists(row)}>
							编辑
						</Button>
						<Button type={'link'} danger onClick={() => handleDeleteLists(row)}>
							删除
						</Button>
					</Space>
				);
			},
		},
	];

	const createListRef = useRef();
	const handleCreateListRef = () => {
		createListRef.current.showDrawer();
	};

	const handleDeleteLists = async (row: ILists) => {
		const res = await request({
			url: '/server/lists/delete/' + row.id,
		});
		if (res.code === 200) {
			message.success('列表删除成功');
			success();
		}
	};
	const handleEditLists = (row: ILists) => {
		createListRef.current.showDrawer(row);
	};
	const tableRef = useRef();
	const success = () => {
		tableRef.current?.search();
	};
	return (
		<div className={'card table-box'}>
			<ProTable<ILists>
				ref={tableRef}
				columns={columns}
				url={'/api/lists'}
				pagination={true}
				tableToolButton={
					<Button type={'primary'} onClick={handleCreateListRef}>
						新建列表
					</Button>
				}
			/>
			<CreateList ref={createListRef} success={success} />
		</div>
	);
};
export default List;
