'use client';
import { useRef } from "react";
import ProTable from '@/app/components/pro-table/index';
import { IMenu } from '@/app/interface/IMenu';
import { IMoment } from '@/app/interface/IMoment';
import { Button, message, Space, TableColumnsType } from "antd";
import { request } from "@/app/utils/request";
const Moment = () => {
	const columns: TableColumnsType<IMoment> = [
		{
			title: '内容',
			dataIndex: 'content',
			key: 'title',
			width: 220,
			fixed: 'left',
			render: (_, row) => {
				return <span className={'m-text-nowrap'}>{row.content}</span>;
			},
		},
		{
			title: '浏览量',
			dataIndex: 'view',
			align: 'center',
			key: 'path',
			width: 100,
		},
		{
			title: '用户',
			key: 'sort',
			width: 100,
			render: (_, row: IMoment) => {
				return <span>{row.user.userName}</span>;
			},
		},
		{
			title: '媒体文件',
			dataIndex: 'redirect',
			key: 'redirect',
			width: 100,
			render: (_, row) => {
				return (
					<div>
						<Button type="link">{row.mediaList.length}</Button>
					</div>
				);
			},
		},
		{
			title: '创建时间',
			dataIndex: 'createTime',
			key: 'icon',
			width: 200,
		},
		{
			title: '操作',
			key: 'action',
			fixed: 'right',
			width: 220,
			render: (_, row) => {
				return (
					<Space>
						<Button type={'link'}>查看</Button>
						<Button type={'link'}>编辑</Button>
						<Button danger type={'link'} onClick={()=>handleDeleteMoment(row)}>
							删除
						</Button>
					</Space>
				);
			},
		},
	];
	const tableRef = useRef();
	const handleDeleteMoment = async (row:IMoment)=>{
		const res = await request({
			url:"/server/moment/delete/"+row.id,
			method:"post",
		})
		if(res.code === 200){
			message.success("删除成功");
			tableRef.current?.search();
		}
	}
	return (
		<div className={'table-box card'}>
			<ProTable<IMenu>
				ref={tableRef}
				columns={columns}
				url={'/server/moment/list'}
				pagination={true}
				params={{}}
				tableToolButton={<Button type={'primary'}>新增帖子</Button>}
			/>
		</div>
	);
};
export default Moment;
