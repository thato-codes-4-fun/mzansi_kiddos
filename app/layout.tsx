import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderComponent from "./(components)/header";
import Image from "next/image";

import logo from "@/assets/logo2.png";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mzansi Kiddos",
  description: "Zulu learning platform",
};

const headerStyle: React.CSSProperties = {
  // textAlign: "center",
  color: "black",
  height: 114,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "white",
};

const contentStyle: React.CSSProperties = {
  // textAlign: "center",
  minHeight: "85vh",
  maxHeight: "100vh",

  // color: "#fff",
  backgroundColor: "white",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  // color: "#fff",
  // backgroundColor: "#4096ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout className="p-2">
          <Header className="" style={headerStyle}>
            <HeaderComponent />
          </Header>
          <Content style={contentStyle}>{children}</Content>
          <Footer style={footerStyle} className="items-center">
            <div className="flex justify-around items-center">
              <div style={{ height: 100 }}>
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt="Picture of the MzansiKiddosLogo"
                />
              </div>
              <h2>Mzansi Kiddos (PTYLTD) ©</h2>
            </div>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
