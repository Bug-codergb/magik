"use client";
import { ReactNode, useEffect, useState } from "react";
import { Table, Space, Button, Flex, Pagination } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IMenu } from "@/app/interface/IMenu";
interface IProps<T> {
  columns: TableColumnsType<T>;
  tableData?: T[];
  url: string;
  pagination: boolean;
  params: Object;
  method?: string;
  tableHeader?: ReactNode;
  tableToolButton?: ReactNode;
}
function ProTable<T>(props: IProps<T>) {
  const {
    columns,
    tableData: rawTableData,
    url,
    method,
    tableHeader,
    tableToolButton,
    pagination
  } = props;
  const [tableData, setTableData] = useState<T[]>([]);
  const [total,setTotal] = useState<number>(0)
  const getTableData = () => {
    fetch(`${url}?page=${1}&limit=${10}`, {
      method: method ?? "post",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.code === 200) {
          pagination ? setTableData(res.rows): setTableData(res.data);
          pagination? setTotal(res.total):''
        }
      });
  };

  useEffect(() => {
    getTableData();
  }, [url]);

  const onChange = (e: number) => {
    console.log(e);
  };
  const sizeChange = (e: number) => {};
  return (
    <div className={"table-box"}>
      <Flex justify={"space-between"} className={"pb-3"}>
        <div>{tableHeader}</div>
        <div>{tableToolButton}</div>
      </Flex>
      <div className={"table-container"}>
        <Table
          rowKey={"id"}
          sticky={true}
          size={"middle"}
          columns={columns}
          dataSource={tableData}
          pagination={false}
          bordered={false}
          expandable={{ defaultExpandAllRows: true }}
        ></Table>
      </div>
      <Flex justify={"flex-end"} className={"pt-4"}>
        <Pagination
          showQuickJumper={false}
          defaultCurrent={1}
          defaultPageSize={10}
          pageSize={10}
          showSizeChanger={true}
          showTotal={(total,range)=>`共${total}条`}
          total={total}
          onChange={onChange}
          onShowSizeChange={sizeChange}
        />
      </Flex>
    </div>
  );
}
export default ProTable;
