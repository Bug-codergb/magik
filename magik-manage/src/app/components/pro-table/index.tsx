"use client";
import {forwardRef, ReactNode, useEffect, useState,useImperativeHandle} from "react";
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
  rowKey?:string
}
const ProTable = forwardRef(function Fn<T>(props: IProps<T>,propsRef) {
  const {
    columns,
    tableData: rawTableData,
    url,
    method,
    tableHeader,
    tableToolButton,
    pagination,
    rowKey="id"
  } = props;
  const [tableData, setTableData] = useState<T[]>([]);
  const [total,setTotal] = useState<number>(0)
  const getTableData = (page:number=1,limit:number=10) => {
    fetch(`${url}?page=${page}&limit=${limit}`, {
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

  useImperativeHandle(propsRef,()=>{
    return {
      search:getTableData
    }
  })
  const [currentPage,setCurrentPage] = useState(1);
  const [pageSize,setPageSize] = useState(10);
  const onChange = (e: number) => {
    setCurrentPage(e);
    getTableData(e,pageSize);
  };
  const sizeChange = (current: number,size:number) => {
    setPageSize(size);
    setCurrentPage(1);
    getTableData(1,size);
  };
  return (
      <div className={"table-box"}>
        <Flex justify={"space-between"} className={"pb-3"}>
          <div>{tableHeader}</div>
          <div>{tableToolButton}</div>
        </Flex>
        <div className={"table-container"}>
          <Table
              rowKey={rowKey}
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
              current={currentPage}
              pageSize={pageSize}
              showSizeChanger={true}
              showTotal={(total,range)=>`共${total}条`}
              total={total}
              onChange={onChange}
              onShowSizeChange={sizeChange}
          />
        </Flex>
      </div>
  );
})
export default ProTable;
