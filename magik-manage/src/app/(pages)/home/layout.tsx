"use client";
import { Layout } from "antd";
import moment from 'moment';
import Nav from "@/app/components/nav";
const { Header, Footer, Sider, Content } = Layout;

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className={"size-full text-slate-950"}>
      <Sider width="200px" className={"h-full bg-white g-sider"}>
        <Nav />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content className={"p-4"}>{children}</Content>
        <Footer className={"g-footer"}>
          {moment().format("yyyy")} ©magik By GuoBin.
        </Footer>
      </Layout>
    </Layout>
  );
}
