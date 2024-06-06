"use client";
import ProTable from "@/app/components/pro-table/index";
import type { TableColumnsType } from "antd";
import { IRole } from "@/app/interface/IRole";
import { Button } from "antd";
const Role = () => {
  const columns: TableColumnsType<IRole> = [
    {
      title: "角色名称",
      dataIndex: "name",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
    },
    {
      title: "更新时间",
      dataIndex: "updateTime",
    },
  ];
  const handleCreateRole = () => {};
  return (
    <div className={"card table-box"}>
      <ProTable
        columns={columns}
        pagination={true}
        params={{}}
        url={"/api/role/all"}
        tableToolButton={
          <Button type={"primary"} onClick={() => handleCreateRole()}>
            新增角色
          </Button>
        }
      />
    </div>
  );
};
export default Role;
