import {useState, useImperativeHandle, forwardRef, useEffect} from "react";
import type { TreeDataNode, TreeProps } from 'antd';
import { Tree } from 'antd';

import ProDrawer from "@/app/components/pro-drawer";
import {IRole} from "@/app/interface/IRole";

const MenuPermission = forwardRef(function MenuPermission(props, ref){
  const [title,setTitle] = useState<string>("编辑菜单权限");
  const [open,setOpen] = useState<boolean>(false);

  const [treeData,setTreeData] = useState<TreeDataNode[]>([]);

  const [role,setRole] = useState<IRole|null>(null);
  useEffect(()=>{

  },[])
  const getTreeData =async ()=>{
    const res = await fetch("/api/menu/list?page=1&limit=9999999",{method:'post'})
    const ret = await res.json();
    setTreeData(ret.rows);
  }
  const showDrawer=async (row:IRole)=>{
    setOpen(true);
    await getTreeData();
    setRole(row);
  }
  const handleClose=()=>{
    setRole(null);
    setOpen(false);
  }
  const handleConfirm=()=>{
    setOpen(false)
  }
  useImperativeHandle(ref,()=>{
    return {
      showDrawer
    }
  })
  return <ProDrawer width={600} title={title} onClose={handleClose} onConfirm={handleConfirm} open={open}>
    {
      treeData && treeData.length!==0 && <Tree
          checkable
          autoExpandParent={true}
          defaultExpandAll={true}
          selectedKeys={role?role.menuList :[]}
          checkedKeys={role?role.menuList :[]}
          onSelect={()=>{}}
          onCheck={()=>{}}
          treeData={treeData}
          fieldNames={{title:'title',key:'id'}}
      />
    }
  </ProDrawer>
})
export default MenuPermission
