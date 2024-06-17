"use client";
import {useRef} from "react";
import ProTable from "@/app/components/pro-table/index";
import MenuPermission from "./components/menuPermission/index"
import CreateRole from "./components/createRole/index"  ;
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
    {
      title:"操作",
      width:200,
      fixed:"right",
      render:(_,row)=>{
        return <Button type="link" onClick={()=>handleEditRoleMenu(row)}>编辑菜单权限</Button>
      }
    }
  ];
  const createRoleRef = useRef();
  const handleCreateRole = () => {
    createRoleRef.current && createRoleRef.current.showDrawer();
  };

  const tableRef = useRef();
  const search=()=>{
    tableRef.current && tableRef.current.search();
  }
  const menuPermissionRef = useRef();
  const handleEditRoleMenu=(row:IRole)=>{
    menuPermissionRef.current.showDrawer(row)
  }
  return (
    <div className={"card table-box"}>
      <ProTable
        ref={tableRef}
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
      <CreateRole ref={createRoleRef} success={search}/>
      <MenuPermission ref={menuPermissionRef}/>
    </div>
  );
};
export default Role;
