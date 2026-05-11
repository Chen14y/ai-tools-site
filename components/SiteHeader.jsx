import Link from "next/link";

const navItems = [
  { href: "/tools", label: "工具" },
  { href: "/articles", label: "文章" },
  { href: "/category/writing", label: "写作" },
  { href: "/category/image", label: "图像" }
];

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link href="/" className="brand" aria-label="AI Tools Atlas 首页">
          <span className="brandMark">AI</span>
          <span>Tools Atlas</span>
        </Link>
        <nav className="navLinks" aria-label="主导航">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
