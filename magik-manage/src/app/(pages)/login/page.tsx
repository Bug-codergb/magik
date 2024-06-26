'use client';
import { changeUserAction, selectUserMsg } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { CloseCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, notification } from 'antd';
import { useRouter } from 'next/navigation';
//import { cookies } from 'next/headers'

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};
const Login = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	//const cookieStore = cookies()
	const [api, contextHolder] = notification.useNotification();
	const userMsg = useAppSelector(selectUserMsg);
	const onFinish = async (val: any) => {
		let params = {
			userName: val.username as string,
			password: val.password as string,
		};
		const ret = await dispatch(changeUserAction(params));
		if (ret.payload) {
			router.push(ret.payload.menu.path);
		}
	};
	const onFinishFailed = () => {};
	return (
		<div className={'relative size-full'}>
			{contextHolder}
			<div
				className={
					'form-container absolute left-2/4 top-1/2 w-500px translate-y-50 rounded-lg p-12 shadow-login'
				}
			>
				<div className={'title mb-3.5'}>Magik</div>
				<Form
					name="basic"
					labelCol={{ span: 0 }}
					wrapperCol={{ span: 24 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item<FieldType>
						label=""
						name="username"
						rules={[{ required: true, message: '请输入用户名' }]}
					>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="用户名"
							autoComplete={'new-password'}
							size={'large'}
						/>
					</Form.Item>

					<Form.Item<FieldType>
						label=""
						name="password"
						rules={[{ required: true, message: '请输入密码' }]}
					>
						<Input.Password
							prefix={<LockOutlined className="site-form-item-icon" />}
							autoComplete={'new-password'}
							placeholder="密码"
							size={'large'}
						/>
					</Form.Item>

					<Form.Item>
						<Row gutter={20}>
							<Col span={12}>
								<Button block shape={'round'} size={'large'} icon={<CloseCircleOutlined />}>
									重置
								</Button>
							</Col>
							<Col span={12}>
								<Button
									block
									type="primary"
									size={'large'}
									icon={<UserOutlined />}
									shape={'round'}
									htmlType="submit"
								>
									登录
								</Button>
							</Col>
						</Row>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};
export default Login;
