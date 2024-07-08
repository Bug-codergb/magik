import { IProForm } from '@/app/interface/IProForm';
import { Col, Form, Input, Row } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ReactElement, forwardRef, useImperativeHandle } from 'react';
interface IProps<T extends AnyObject> {
	config: IProForm[][];
	formData: T;
}

const ProForm = forwardRef(function Fn<T extends AnyObject>(
	props: IProps<T>,
	propsRef
): ReactElement {
	const { config, formData } = props;
	const [formRef] = Form.useForm();
	const handleFormFinish = () => {};
	const validateForm = () => {
		formRef.submit();
	};
	useImperativeHandle(propsRef, () => {
		return {
			validateForm,
		};
	});
	return (
		<>
			<Form
				name={'pro-form'}
				layout={'vertical'}
				scrollToFirstError={true}
				autoComplete={'new-password'}
				form={formRef}
				onFinish={handleFormFinish}
			>
				{config.map((item, index) => {
					return (
						<Row key={index} gutter={20}>
							{item &&
								item.map((it, i) => {
									const key = it.tag;

									return (
										<Col span={24 / item.length} key={it.name}>
											<Form.Item
												key={it.name}
												name={it.name}
												label={it.label}
												rules={[{ required: it.required, message: `${it.label}不能为空` }]}
											>
												{key === 'Input' && (
													<Input placeholder={`请输入${it.label}`} value={formData[it.name]} />
												)}
											</Form.Item>
										</Col>
									);
								})}
						</Row>
					);
				})}
			</Form>
		</>
	);
});

export default ProForm;
