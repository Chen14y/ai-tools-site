"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navItems = {
  zh: [
    { href: "/tools", label: "工具" },
    { href: "/articles", label: "文章" },
    { href: "/category/office", label: "办公" },
    { href: "/category/developer", label: "开发" },
    { href: "/category/cybersecurity", label: "安全" },
    { href: "/about", label: "关于" }
  ],
  en: [
    { href: "/en/tools", label: "Tools" },
    { href: "/en/articles", label: "Articles" },
    { href: "/en/category/office", label: "Office" },
    { href: "/en/category/developer", label: "Developer" },
    { href: "/en/category/cybersecurity", label: "Security" },
    { href: "/about", label: "About" }
  ]
};

export function SiteHeader() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "zh";

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link href={locale === "en" ? "/en" : "/"} className="brand" aria-label="AI Tools Atlas">
          <span className="brandMark">AI</span>
          <span>Tools Atlas</span>
        </Link>
        <nav className="navLinks" aria-label={locale === "en" ? "Main navigation" : "主导航"}>
          {navItems[locale].map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
