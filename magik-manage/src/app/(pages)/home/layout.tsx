"use client";
import { Layout } from "antd";
import Nav from "@/app/components/nav";
const { Header, Footer, Sider, Content } = Layout;

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className={"size-full"}>
      <Sider width="200px" className={"h-full bg-white"}>
        <Nav />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content className={"p-4"}>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
