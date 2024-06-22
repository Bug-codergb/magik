import React,{FC} from "react";
import { Button, Dropdown, Avatar,Space,Flex } from 'antd';
import { UserOutlined,BellOutlined,SkinOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          个人信息
        </a>
    ),
  },
  {
    key: '2',
    label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          更换密码
        </a>
    ),
  },
  {
    key: '3',
    label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          退出登录
        </a>
    ),
  },
];
const TopBar:FC=()=>{
  return <div className={"flex justify-between"}>
    <div></div>
    <div>
      <Flex align={"center"}>
        <Space size={"middle"} align={"center"}>
          <SkinOutlined style={{fontSize:"22px"}}/>
          <BellOutlined style={{fontSize:"22px"}}/>
          <span>叶子</span>
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Avatar size={48} icon={<UserOutlined />} src={"http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718199341691.avif"} />
          </Dropdown>
        </Space>
      </Flex>
    </div>
  </div>
}
export default TopBar
