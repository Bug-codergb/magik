import React from 'react';
function Layout({ children, userInfo, userTab }): React.ReactNode {
	return (
		<div className={'table-box'}>
			<div className={'card mb-3.5'}>{userInfo}</div>
			<div className={'card table-box'}>{userTab}</div>
		</div>
	);
}
export default Layout;
