"use client"
import {useEffect, useState,useRef } from "react";
import { Table,Space ,Button,Flex} from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {IMenu} from "@/app/interface/IMenu";
import CreateMenu from "@/app/components/menu/create-menu";


const Menu = ():React.ReactNode => {
  const columns: TableColumnsType<IMenu> = [
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title',
      width:200,
      fixed:"left"
    },
    {
      title: '路径',
      dataIndex: 'path',
      key: 'path',
      width:200,
    },
    {
      title: '重定向',
      dataIndex: 'redirect',
      key: 'redirect',
      width:200,
    },
    {
      title: '图标',
      dataIndex: 'icon',
      key: 'icon',
      width:200,
    },
    {
      title:"组件",
      dataIndex: 'component',
      key: 'component',
      width:200,
    },
    {
      title:"路由元数据",
      dataIndex: 'meta',
      key: 'meta',
      width:200
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width:260,
      render: (_, record) => (
          <Space size="middle">
            <Button type={'link'} onClick={()=>handleCreateMenu(record)}>新增子菜单</Button>
            <Button type="link">
              编辑
            </Button>
            <Button type="link" danger onClick={()=>handleDeleteMenu(record)}>
              删除
            </Button>
          </Space>
      ),
    },
  ];

  const [tableData,setTableData] = useState<IMenu[]>([]);

  useEffect(()=>{
    getTableData();
  },[])

  const getTableData=()=>{
    fetch('/api/menu/list',{
      method:"post"
    }).then((res)=>{
      return res.json();
    }).then((res)=>{
      if(res.code === 200){
        setTableData(res.data);
      }
    })
  }

  const createMenuRef = useRef<any>();
  const handleCreateMenu=(menu?:IMenu)=>{
    let raw:IMenu = menu ? menu! :{
      parent:"-1",
      title:"根目录",
      path:"",
      icon:"",
      id:"-1",
      redirect:"",
      meta:"",
      children:[],
      component:""
    }
    createMenuRef.current?.showModal(raw);
  }

  const handleDeleteMenu=async (item:IMenu)=>{
    const ret = await fetch(`/api/menu/delete/${item.id}`,{method:"post"});
    const res = await ret.json();
    if(res.code===200){
      getTableData();
    }
  }
  const handleSuccess=()=>{
    getTableData();
  }
  return <div className={'card table-box'}>
    <Flex justify={'flex-end'} >
      <Button   type={'primary'} onClick={()=>handleCreateMenu()}>新增菜单</Button>
    </Flex>
    <Table
        rowKey={'id'}
        sticky={true}
        size={"middle"}
        columns={columns}
        dataSource={tableData}
        pagination={false}
        expandable={{defaultExpandAllRows:true}}
        scroll={{y:"max-content",x:"max-content"}}
    />
    <CreateMenu ref={createMenuRef} finish={()=>handleSuccess()}/>
  </div>
}
export default Menu;
