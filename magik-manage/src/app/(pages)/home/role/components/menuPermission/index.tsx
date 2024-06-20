import {useState, useImperativeHandle, forwardRef, useEffect,FC} from "react";
import type { TreeDataNode, TreeProps } from 'antd';
import { Tree } from 'antd';

import ProDrawer from "@/app/components/pro-drawer";
import {IRole} from "@/app/interface/IRole";
interface IProps{
  success:()=>void
}
interface IRawMenu{
  menuId:string;
  half:number
}
const MenuPermission:FC<IProps> = forwardRef(function MenuPermission(props, ref){
  const { success } =props;
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
  const [menuList,setMenuList] = useState<string[]>([]);
  const [rawMenuList,setRawMenuList] = useState<IRawMenu[]>([]);
  const showDrawer=async (row:IRole)=>{
    setOpen(true);
    await getTreeData();
    setRole(row);
    if(row.menuList){
      let menuList:string[] = row.menuList.filter((item)=>`${item.half}`!=='1').map((item)=>item.menuId);
      setMenuList(menuList);
      setRawMenuList(row.menuList);
    }

  }
  const handleClose=()=>{
    setRole(null);
    setOpen(false);
  }
  const handleCheck=(checkedKeys:string[],e:any)=>{
    console.log(e);
    const list:IRawMenu[]=[];
    for(let item of e.checkedNodes){
      list.push({
        menuId:item.id,
        half:0
      })
    }
    for(let item of e.halfCheckedKeys){
      list.push({
        menuId:item,
        half:1
      })
    }
    setRawMenuList(list);
    setMenuList(checkedKeys);
  }
  const handleConfirm = async ()=>{
    if(menuList.length!==0){
      let data={
        id:role?.id,
        menuList:rawMenuList
      }
      const res = await fetch("/api/role/set/menu",{
        method:"post",
        body:JSON.stringify(data),
        headers:{
          "Content-type":"application/json;charset=UTF-8"
        }
      })
      const ret = await res.json();
      if(ret.code === 200){
        setOpen(false)
        success();
      }
    }

  }
  useImperativeHandle(ref,()=>{
    return {
      showDrawer
    }
  })
  return <ProDrawer width={500} title={title} onClose={handleClose} onConfirm={handleConfirm} open={open}>
    {
      treeData && treeData.length!==0 && <Tree
          checkable
          checkStrictly={false}
          autoExpandParent={true}
          defaultExpandAll={true}
          selectedKeys={role?role.menuList :[]}
          checkedKeys={menuList}
          onSelect={()=>{}}
          onCheck={handleCheck}
          treeData={treeData}
          fieldNames={{title:'title',key:'id'}}
      />
    }
  </ProDrawer>
})
export default MenuPermission
