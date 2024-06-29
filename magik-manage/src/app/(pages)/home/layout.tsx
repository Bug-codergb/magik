import Nav from '@/app/components/nav';
import TopBar from '@/app/components/topBar/TopBar';
import Sider from 'antd/lib/layout/Sider';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import moment from 'moment';
export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Layout className={'size-full text-slate-950'} hasSider={true}>
			<Sider width="200px" className={'g-sider h-full bg-white'}>
				<Nav />
			</Sider>
			<Layout hasSider={false}>
				<Header>
					<TopBar />
				</Header>
				<Content className={'p-4'}>{children}</Content>
				<Footer className={'g-footer py-3'}>{moment().format('yyyy')} ©magik By GuoBin.</Footer>
			</Layout>
		</Layout>
	);
}
