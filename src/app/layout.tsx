import type { Metadata } from "next";
import Layout from "@/commons/layout";
import ApolloUploadSetting from "@/commons/settings/apollo-setting";
import "./globals.css";

export const metadata: Metadata = {
  title: "함께하는 여행 - 트립트립",
  description:
    "여러 사람과 여행 이야기를 공유하고, 자신의 숙박권을 판매해봐요!",
  icons: "/assets/logo_area.png",
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
