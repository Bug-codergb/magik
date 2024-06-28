import React from "react";
import { Badge, Descriptions,Tag } from 'antd';
import type { DescriptionsProps } from 'antd';
import {request} from "@/app/utils/request";
import {IUser} from "@/app/interface/IUser";
const type: string[] = ["success", "processing", "error", "warning", "default"];
async function getData(userId:string):Promise<IUser|null>{
  const res = await request<IUser>({
    url:`http://localhost:8888/user/detail/${userId}`,
    method:"get"
  });
  if(res.code === 200){
    return res.data;
  }
  return null;
}
interface IProps{
  params:Record<string, any>,
  searchParams:Record<string, any>
}
async function UserInfo(props:IProps){
  const user = await getData(props.params.id);
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '用户名',
      children: user?.userName,
      span:1
    },
    {
      key: '2',
      label: '性别',
      children: user?.gender === 0 ?'男':"女",
      span:1
    },
    {
      key: '3',
      label: '加入时间',
      children: user?.createTime,
      span:1
    },
    {
      key: '4',
      label: '角色',
      children: <>
        {
          user && user.role.map((item, index) => {
            return (
                <Tag key={item.id} color={type[index % 5]}>
                  {item.name}
                </Tag>
            )
          })
        }
      </>,
    },
  ];
  return <div>
    <Descriptions title=""  size={"small"} bordered items={items} />
  </div>
}
export default UserInfo;
