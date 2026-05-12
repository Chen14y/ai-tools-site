import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "AI Tools Atlas - AI 工具导航与教程",
    template: "%s | AI Tools Atlas"
  },
  description:
    "发现好用的 AI 写作、图片、视频、办公和开发工具，阅读面向搜索需求的 AI 工具教程与评测。",
  openGraph: {
    title: "AI Tools Atlas",
    description: "深色简洁的 AI 工具导航与内容网站模板。",
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
