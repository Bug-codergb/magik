import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
function UserTab() {
	const items: TabsProps['items'] = [
		{
			key: '1',
			label: '帖子',
			children: 'Content of Tab Pane 1',
		},
		{
			key: '2',
			label: '列表',
			children: 'Content of Tab Pane 2',
		},
		{
			key: '评论',
			label: '评论',
			children: 'Content of Tab Pane 3',
		},
	];
	return (
		<div>
			<Tabs defaultActiveKey="1" items={items} />
		</div>
	);
}
export default UserTab;
