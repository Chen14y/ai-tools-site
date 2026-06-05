"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <p>AI Tools Atlas</p>
        <div>
          <Link href={isEnglish ? "/en/tools" : "/tools"}>{isEnglish ? "Tool directory" : "工具导航"}</Link>
          <Link href={isEnglish ? "/en/articles" : "/articles"}>{isEnglish ? "SEO articles" : "SEO 文章"}</Link>
          <Link href="/about">{isEnglish ? "About" : "关于"}</Link>
          <Link href="/editorial-policy">{isEnglish ? "Editorial" : "编辑政策"}</Link>
          <Link href="/privacy">{isEnglish ? "Privacy" : "隐私政策"}</Link>
          <Link href="/terms">{isEnglish ? "Terms" : "条款"}</Link>
          <Link href="/contact">{isEnglish ? "Contact" : "联系"}</Link>
        </div>
      </div>
    </footer>
  );
}
