'use client';
import { BellOutlined, SkinOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Flex, Space } from 'antd';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const TopBar: FC = () => {
	const router = useRouter();
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
			label: <div onClick={() => handleLogout()}>退出登录</div>,
		},
	];
	const handleLogout = () => {
		fetch('/api/logout', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
			},
		})
			.then((res) => {
				res.json();
			})
			.then(() => {
				router.push('/login');
			});
	};
	return (
		<div className={'flex justify-between'}>
			<div></div>
			<div>
				<Flex align={'center'}>
					<Space size={'middle'} align={'center'}>
						<SkinOutlined style={{ fontSize: '22px' }} />
						<BellOutlined style={{ fontSize: '22px' }} />
						<span>叶子</span>
						<Dropdown menu={{ items }} placement="bottom" arrow>
							<Avatar
								size={48}
								icon={<UserOutlined />}
								src={'http://localhost:9000/45a97f5d01b651b15bdaf7446a1c45e6/1718199341691.avif'}
							/>
						</Dropdown>
					</Space>
				</Flex>
			</div>
		</div>
	);
};
export default TopBar;
