'use client';
import { request } from '@/app/utils/request';
import type { TableColumnsType } from 'antd';
import { Flex, Pagination, Spin, Table } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ReactNode, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
interface IProps<T extends AnyObject> {
	columns: TableColumnsType<T>;
	tableData?: T[];
	url: string;
	pagination: boolean;
	params?: Record<string, any>;
	body?: Record<string, any>;
	headers: Record<string, any>;
	method?: 'get' | 'post' | 'delete' | 'put';
	tableHeader?: ReactNode;
	tableToolButton?: ReactNode;
	rowKey?: string;
}
const ProTable = forwardRef(function Fn<T extends AnyObject>(props: IProps<T>, propsRef) {
	const {
		columns,
		tableData: rawTableData,
		url,
		method,
		tableHeader,
		tableToolButton,
		pagination,
		rowKey = 'id',
		body = {},
		params = {},
		headers,
	} = props;
	const [tableData, setTableData] = useState<T[]>([]);
	const [total, setTotal] = useState<number>(0);
	const [isLoading, setLoading] = useState<boolean>(true);
	const getTableData = (page: number = 1, limit: number = 10) => {
		request({
			url,
			method: method ?? 'post',
			params: {
				...params,
				page,
				limit,
			},
			body,
			headers,
		})
			.then((res) => {
				if (res.code === 200) {
					pagination ? setTableData(res.rows) : setTableData(res.data);
					pagination ? setTotal(res.total) : '';
				} else {
				}
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		setLoading(true);
		getTableData();
	}, [url]);

	const search = () => {
		setCurrentPage(1);
		getTableData(1, pageSize);
	};

	useImperativeHandle(propsRef, () => {
		return {
			search,
		};
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const onChange = (e: number) => {
		setCurrentPage(e);
		getTableData(e, pageSize);
	};
	const sizeChange = (current: number, size: number) => {
		setPageSize(size);
		search();
	};
	return (
		<div className={'table-box'}>
			<Flex justify={'space-between'} className={'pb-3'}>
				<div>{tableHeader}</div>
				<div>{tableToolButton}</div>
			</Flex>
			<div className={'table-container'}>
				<Table
					rowKey={rowKey}
					sticky={true}
					loading={
						isLoading
							? {
									indicator: (
										<div>
											<Spin />
										</div>
									),
								}
							: false
					}
					size={'middle'}
					columns={columns}
					dataSource={tableData}
					pagination={false}
					bordered={false}
					expandable={{ defaultExpandAllRows: true }}
				></Table>
			</div>
			<Flex justify={'flex-end'} className={'pt-4'}>
				<Pagination
					showQuickJumper={false}
					defaultCurrent={1}
					defaultPageSize={10}
					current={currentPage}
					pageSize={pageSize}
					showSizeChanger={true}
					showTotal={(total, range) => `共${total}条`}
					total={total}
					onChange={onChange}
					onShowSizeChange={sizeChange}
				/>
			</Flex>
		</div>
	);
});
export default ProTable;
