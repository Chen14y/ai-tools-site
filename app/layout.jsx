import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://ai-tools-site-lac.vercel.app"),
  title: {
    default: "AI Tools Atlas - AI 工具导航与教程",
    template: "%s | AI Tools Atlas"
  },
  description:
    "面向 AI 办公、AI 开发和 AI 安全场景的工具研究、长尾教程和选择指南。",
  openGraph: {
    title: "AI Tools Atlas",
    description: "围绕真实工作场景整理 AI 工具、选择清单、风险提示和 FAQ。",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8695688664040613"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
