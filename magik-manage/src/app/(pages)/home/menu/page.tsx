"use client"
import {useEffect, useState} from "react";
import { Table,Space ,Button,Flex} from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {IMenu} from "@/app/interface/IMenu";

const columns: TableColumnsType<IMenu> = [
  {
    title: '名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '路径',
    dataIndex: 'path',
    key: 'path',
  },
  {
    title: '重定向',
    dataIndex: 'redirect',
    key: 'redirect',
  },
  {
    title: '图标',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title:"组件",
    dataIndex: 'component',
    key: 'component',
  },
  {
    title:"路由元数据",
    dataIndex: 'meta',
    key: 'meta',
  },
  {
    title: '操作',
    key: 'action',
    fixed: 'right',
    render: (_, record) => (
        <Space size="middle">
          <Button type="link">
            编辑
          </Button>
          <Button type="link" danger>
            删除
          </Button>
        </Space>
    ),
  },
];
const Menu = ():React.ReactNode => {
  const [tableData,setTableData] = useState<IMenu[]>([]);

  useEffect(()=>{
    fetch('/api/menu/list',{
      method:"post"
    }).then((res)=>{
      return res.json();
    }).then((res)=>{
      if(res.code === 200){
        setTableData(res.data);
      }
    })
  },[])
  return <div className={'card table-box'}>

    <Flex justify={'flex-end'}>
      <Button >新增菜单</Button>
    </Flex>
    <Table
        rowKey={'id'}
        sticky={true}
        size={"middle"}
        columns={columns}
        dataSource={tableData}
        pagination={false}
        expandable={{defaultExpandAllRows:true}}
        scroll={{y:"max-content"}}
    />
  </div>
}
export default Menu;
