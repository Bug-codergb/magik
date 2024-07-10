import UploadFile from '@/app/components/upload-file';
import { IProForm } from '@/app/interface/IProForm';
import { DeleteOutlined, FileImageOutlined } from '@ant-design/icons';
import { Col, Form, Input, Radio, Row, message } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import cloneDeep from 'lodash/cloneDeep';
import {
	FormEvent,
	ReactElement,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
interface IProps<T extends AnyObject> {
	config: IProForm[][];
	formData: T;
	aspectRatio?: number;
	realWidth?: number;
	getFormData: (arg: T) => void;
}
const { TextArea } = Input;
const ProForm = forwardRef(function Fn<T extends AnyObject>(
	props: IProps<T>,
	propsRef
): ReactElement {
	const { getFormData } = props;
	const [config, setConfig] = useState(cloneDeep(props.config));
	const [formData, setFormData] = useState(cloneDeep(props.formData));
	useEffect(() => {
		setFormData(cloneDeep(props.formData));
	}, [props.formData]);
	useEffect(() => {
		for (const item of config) {
			for (let it of item) {
				it.isShowFile = false;
			}
		}
		let raw = [...config];
		setConfig(raw);
	}, [props.config]);

	const [formRef] = Form.useForm();
	const handleFormFinish = (val: T) => {
		getFormData(val);
	};
	const validateForm = () => {
		formRef.submit();
	};
	const resetFields = (val: T) => {
		formRef.resetFields();
	};
	const setFieldsValue = (val: T) => {
		formRef.setFieldsValue({ ...val });
		for (let item of config) {
			for (let it of item) {
				if (it.tag === 'Cover' && val[it.name]) {
					it.isShowFile = true;
				}
			}
		}
		setFormData(val);
		setConfig(config);
	};
	useImperativeHandle(propsRef, () => {
		return {
			validateForm,
			resetFields,
			setFieldsValue,
		};
	});

	const [aspectRatio, setAspectRatio] = useState(1);
	const [realWidth, setRealWidth] = useState(300);

	const [currentFile, setCurrentFile] = useState<IProForm | null>(null);
	const handleFileChange = (e: FormEvent<HTMLInputElement>, it: IProForm) => {
		it.attr && it.attr.aspectRatio && setAspectRatio(it.attr.aspectRatio);
		it.attr && it.attr.realWidth && setRealWidth(it.attr.realWidth);
		const file = e.currentTarget?.files![0];
		setCurrentFile(it);
		if (!file.type.includes('image')) {
			message.warning('请上传图片文件');
			return;
		} else {
			uploadFileRef.current?.showModal(file);
		}
	};
	const uploadFileRef = useRef();

	const handleConfirm = async (val: any) => {
		//setAvatarUrl(url);
		const rawFormData = new FormData();
		rawFormData.append('file', val);
		rawFormData.append('desc', '列表横幅');
		rawFormData.append('warn', '');
		const response = await fetch('/api/file/upload', {
			body: rawFormData,
			method: 'post',
		});
		const res = await response.json();
		if (res.code === 200) {
			currentFile && (formData[currentFile.name].url = res.data[0].url);
			currentFile && (formData[currentFile.name].id = res.data[0].id);
			currentFile && (currentFile.isShowFile = true);

			let raw = { ...formData };
			setFormData(raw);
			currentFile &&
				formRef.setFieldValue(currentFile.name, { id: res.data[0].id, url: res.data[0].url });
		}
	};
	const handleDeleteFile = (it: IProForm) => {
		formData[it.name].url = '';
		formData[it.name].id = '';
		it.isShowFile = false;
		let raw = { ...formData };
		setFormData(raw);
	};
	return (
		<>
			<Form
				name={'pro-form'}
				layout={'vertical'}
				scrollToFirstError={true}
				autoComplete={'new-password'}
				form={formRef}
				onFinish={handleFormFinish}
				initialValues={formData}
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
												{key === 'TextArea' && (
													<TextArea placeholder={`请输入${it.label}`} value={formData[it.name]} />
												)}
												{key === 'Radio' && (
													<Radio.Group value={formData[it.name]}>
														{it.group!.map((i) => {
															return (
																<Radio key={i.value} value={i.value}>
																	{i.label}
																</Radio>
															);
														})}
													</Radio.Group>
												)}
												{key === 'Cover' && (
													<div
														className={
															'img-container group relative flex h-32 cursor-pointer items-center justify-center bg-gray-200'
														}
													>
														{!it.isShowFile && (
															<input
																title={'请选择文件'}
																type={'file'}
																className={'absolute size-full cursor-pointer opacity-0'}
																onChange={(e) => handleFileChange(e, it)}
															/>
														)}
														{!it.isShowFile && (
															<div>
																<FileImageOutlined style={{ fontSize: '30px' }} />
															</div>
														)}
														{it.isShowFile && (
															<img
																className={'hover: size-full object-contain'}
																src={formData[it.name].url}
															/>
														)}
														{it.isShowFile && (
															<div
																onClick={() => handleDeleteFile(it)}
																className={
																	'absolute hidden size-full cursor-pointer items-center justify-center bg-zinc-600/40 transition-all group-hover:flex'
																}
															>
																<DeleteOutlined style={{ fontSize: '30px', color: '#fff' }} />
															</div>
														)}
													</div>
												)}
											</Form.Item>
										</Col>
									);
								})}
						</Row>
					);
				})}
			</Form>
			<UploadFile
				ref={uploadFileRef}
				aspectRatio={aspectRatio || 2.99}
				realWidth={realWidth || 300}
				confirm={(val: any) => handleConfirm(val)}
			/>
		</>
	);
});

export default ProForm;
