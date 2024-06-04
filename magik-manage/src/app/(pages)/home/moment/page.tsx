import ProTable from "@/app/components/pro-table/index"
import {Button, Space, TableColumnsType,Pagination} from "antd";
import {IMenu} from "@/app/interface/IMenu";
const Moment=()=>{
  const columns: TableColumnsType<IMenu> = [
    {
      title: "名称",
      dataIndex: "title",
      key: "title",
      width: 200,
      fixed: "left",
    },
    {
      title: "路径",
      dataIndex: "path",
      key: "path",
      width: 200,
    },
    {
      title:"排序",
      dataIndex:"sort",
      key:"sort",
      width:100
    },
    {
      title: "重定向",
      dataIndex: "redirect",
      key: "redirect",
      width: 200,
    },
    {
      title: "图标",
      dataIndex: "icon",
      key: "icon",
      width: 200,
    },
    {
      title: "组件",
      dataIndex: "component",
      key: "component",
      width: 200,
    },
    {
      title: "路由元数据",
      dataIndex: "meta",
      key: "meta",
      width: 200,
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 260,
    },
  ];

  return <div className={"table-box card"}>
    <ProTable<IMenu> columns={columns} url={'/api/menu/list'} pagination={true} params={{}}/>
  </div>
}
export default Moment;
