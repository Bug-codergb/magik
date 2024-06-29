import { FC, ReactNode } from 'react';
const Home: FC = (): ReactNode => {
	console.log(process.env.NODE_ENV);
	return (
		<div className={'card table-box size-full text-slate-950'}>11211{process.env.SERVER_HOST}</div>
	);
};
export default Home;
