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
        </div>
      </div>
    </footer>
  );
}
