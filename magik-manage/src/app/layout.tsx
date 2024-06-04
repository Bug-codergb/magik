import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import zhCN from "antd/locale/zh_CN";
export const metadata: Metadata = {
  title: "Magik",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
