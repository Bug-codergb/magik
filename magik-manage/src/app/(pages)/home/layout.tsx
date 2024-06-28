import Layout from "antd/lib/layout/layout";
import {Header}  from "antd/lib/layout/layout";
import{Footer}  from "antd/lib/layout/layout";
import {Content} from "antd/lib/layout/layout"
import Sider  from "antd/lib/layout/Sider";
import moment from 'moment';
import Nav from "@/app/components/nav";
import TopBar from "@/app/components/topBar/TopBar";
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className={"size-full text-slate-950"} hasSider={true}>
      <Sider width="200px" className={"h-full bg-white g-sider"}>
        <Nav />
      </Sider>
      <Layout hasSider={false}>
        <Header>
          <TopBar/>
        </Header>
        <Content className={"p-4"}>{children}</Content>
        <Footer className={"g-footer py-3"}>
          {moment().format("yyyy")} ©magik By GuoBin.
        </Footer>
      </Layout>
    </Layout>
  );
}
