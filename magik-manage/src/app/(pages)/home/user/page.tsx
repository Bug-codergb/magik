"use client";
import ProTable from "@/app/components/pro-table/index";
import type { TableColumnsType } from "antd";
import { Button, Space, Tag } from "antd";
import { IUser } from "@/app/interface/IUser";
const type: string[] = ["success", "processing", "error", "warning", "default"];
const Page = () => {
  const columns: TableColumnsType<IUser> = [
    {
      title: "用户名称",
      dataIndex: "userName",
    },
    {
      title: "头像",
      dataIndex: "avatarUrl",
    },
    {
      title: "角色",
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
      title: "创建时间",
      dataIndex: "createTime",
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          <Button type={"link"} onClick={() => handleEditUser(record)}>
            编辑
          </Button>
          <Button type="link" danger onClick={() => handleDeleteUser(record)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  const handleEditUser = (row: IUser) => {};
  const handleDeleteUser = (row: IUser) => {};
  return (
    <div className={"card table-box"}>
      <ProTable
        columns={columns}
        url={"/api/user/list"}
        pagination={true}
        params={{}}
        tableToolButton={<Button type={"primary"}>新增用户</Button>}
      />
    </div>
  );
};
export default Page;
