import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/commons/layout";
import ApolloUploadSetting from "@/commons/settings/apollo-setting";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="ko">
      <body>
        <ApolloUploadSetting>
          <Layout>{children}</Layout>
        </ApolloUploadSetting>
      </body>
    </html>
  );
}
