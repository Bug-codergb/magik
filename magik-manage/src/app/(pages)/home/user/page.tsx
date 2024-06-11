"use client";
import ProTable from "@/app/components/pro-table/index";
import CreateUser from "./components/createUser/index";
import type { TableColumnsType } from "antd";
import { Button, Space, Tag } from "antd";
import { IUser } from "@/app/interface/IUser";
import { useRef } from "react";
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

  const createUserRef = useRef();
  const handleCreateUser = () => {
    createUserRef.current?.showDrawer();
  };
  const tableRef = useRef();
  const handleRefresh = () => {
    console.log(tableRef.current);
    tableRef.current?.search();
  };
  return (
    <div className={"card table-box"}>
      <ProTable
        ref={tableRef}
        columns={columns}
        url={"/api/user/list"}
        pagination={true}
        params={{}}
        rowKey={"userId"}
        tableToolButton={
          <Button type={"primary"} onClick={() => handleCreateUser()}>
            新增用户
          </Button>
        }
      />
      <CreateUser ref={createUserRef} success={handleRefresh} />
    </div>
  );
};
export default Page;
