'use client';
import { request } from '@/app/utils/request';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Logout(): React.ReactNode {
	const router = useRouter();
	request({
		url: '/api/logout',
	}).then((res) => {
		router.push('/login');
	});
	return <div></div>;
}
