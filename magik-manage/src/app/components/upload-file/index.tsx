import '@/app/cropper.css';
import { Modal } from 'antd';
import Cropper from 'cropperjs';
import { FC, ReactNode, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
interface IProps {
	aspectRatio: number;
	confirm?: (arg: any) => void;
	realWidth?: number;
}
const UploadFile: FC<IProps> = forwardRef((props, propsRef): ReactNode => {
	const { aspectRatio, confirm, realWidth } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const showModal = (file?: File) => {
		setIsModalOpen(true);
		file && setFile(file);
	};

	const handleOk = async () => {
		setIsModalOpen(false);
		try {
			const ret = await getCropperFile();
			confirm && confirm(ret);
		} catch (e) {
			confirm && confirm(null);
		}
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	useImperativeHandle(propsRef, () => {
		return {
			showModal,
		};
	});

	const imgRef = useRef();
	const [cropper, setCropper] = useState<Cropper>();
	useEffect(() => {
		if (isModalOpen && imgRef.current) {
			initCropper();
		}
	}, [isModalOpen, imgRef.current]);
	const initCropper = () => {
		if (cropper) {
			cropper.destroy();
		}
		const url = file && URL.createObjectURL(file);
		const cropperContainer =
			imgRef.current &&
			new Cropper(imgRef.current, {
				ready: function () {
					console.log('ready');
				},
				dragMode: 'move',
				aspectRatio,
				viewMode: 1,
				background: false,
				zoomable: false,
				preview: '.small',
			});
		setCropper(cropperContainer);
		cropperContainer?.replace(url);
	};
	const getCropperFile = async () => {
		return await new Promise((resolve, reject) => {
			if (cropper) {
				const canvasFile = cropper.getCroppedCanvas({
					imageSmoothingQuality: 'high',
					width: realWidth ?? 300,
					imageSmoothingEnabled: false,
					fillColor: '#fff',
				});
				canvasFile.toBlob((blob: Blob | null) => {
					if (blob && file) {
						const cropperFile = new File([blob], file.name, {
							type: file.type,
						});
						resolve(cropperFile);
					} else {
						resolve(null);
					}
				});
			} else {
				reject(new Error('cropper 不存在'));
			}
		});
	};
	return (
		<Modal
			title={'文件上传'}
			maskClosable={false}
			open={isModalOpen}
			width={750}
			onOk={handleOk}
			onCancel={handleCancel}
		>
			<div className={'flex h-96 w-full items-center overflow-hidden'}>
				<div className={'h-full flex-1'}>
					<img ref={imgRef} className={'w-full'} />
				</div>
				<div className={'preview-img flex h-full flex-1 items-center justify-center'}>
					<div className={'small overflow-hidden'}></div>
				</div>
			</div>
		</Modal>
	);
});
export default UploadFile;
