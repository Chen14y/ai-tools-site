import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container pageTitle">
        <p className="eyebrow">404</p>
        <h1>页面没有找到</h1>
        <p>这个链接可能已经移动，回到首页继续浏览 AI 工具和教程。</p>
        <Link className="button primary" href="/">
          返回首页
        </Link>
      </div>
    </section>
  );
}
