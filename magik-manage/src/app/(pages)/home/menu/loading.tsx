import { Skeleton } from 'antd';
const Loading = () => {
	return (
		<div className={'card table-box'}>
			<Skeleton active />
		</div>
	);
};
export default Loading;
