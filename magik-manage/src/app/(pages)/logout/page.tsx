'use client';
import { request } from '@/app/utils/request';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Logout(): React.ReactNode {
	const router = useRouter();
	message.destroy();
	message.warning('登录已失效');
	request({
		url: '/api/logout',
	}).then((res) => {
		router.push('/login');
	});
	return <div></div>;
}
