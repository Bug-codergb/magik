"use client"
import ProTable from "@/app/components/pro-table/index";
import { Button, Space, TableColumnsType, Pagination } from "antd";
import { IMenu } from "@/app/interface/IMenu";
import {IMoment} from "@/app/interface/IMoment";
const Moment = () => {
  const columns: TableColumnsType<IMoment> = [
    {
      title: "内容",
      dataIndex: "content",
      key: "title",
      width: 200,
      fixed: "left",
    },
    {
      title: "浏览量",
      dataIndex: "view",
      key: "path",
      width: 200,
    },
    {
      title: "用户",
      key: "sort",
      width: 100,
      render:(_,row:IMoment)=>{
        return <span>{row.user.userName}</span>
      }
    },
    {
      title: "媒体文件",
      dataIndex: "redirect",
      key: "redirect",
      width: 200,
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "icon",
      width: 200,
    },

    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 260,
    },
  ];

  return (
    <div className={"table-box card"}>
      <ProTable<IMenu>
        columns={columns}
        url={"/api/moment/list"}
        pagination={true}
        params={{}}
      />
    </div>
  );
};
export default Moment;
