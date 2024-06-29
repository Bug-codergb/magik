import { Button, Drawer, Space } from 'antd';
import React, { FC } from 'react';
interface IProps
	extends Readonly<{
		children: React.ReactNode;
	}> {
	title: string;
	onClose: () => void;
	onConfirm: () => void;
	open: boolean;
	width?: number;
}
const ProDrawer: FC<IProps> = (props) => {
	const {
		title,
		onClose: handleClose,
		onConfirm: handleConfirm,
		open: isOpen,
		width = 500,
		children,
	} = props;
	return (
		<Drawer
			title={title}
			open={isOpen}
			maskClosable={false}
			onClose={handleClose}
			width={width}
			extra={
				<Space>
					<Button onClick={handleClose}>取消</Button>
					<Button type="primary" onClick={handleConfirm}>
						确认
					</Button>
				</Space>
			}
		>
			{children}
		</Drawer>
	);
};
export default ProDrawer;
