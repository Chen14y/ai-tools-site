import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <p>AI Tools Atlas</p>
        <div>
          <Link href="/tools">工具导航</Link>
          <Link href="/articles">SEO 文章</Link>
        </div>
      </div>
    </footer>
  );
}
