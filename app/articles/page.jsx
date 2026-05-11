import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const metadata = {
  title: "AI 工具教程与评测",
  description: "围绕长尾关键词撰写的 AI 工具教程、评测、对比和使用指南。"
};

export default function ArticlesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="pageTitle">
          <p className="eyebrow">Articles</p>
          <h1>AI 工具教程与评测</h1>
          <p>每篇文章都可以作为 SEO 入口页，围绕具体问题、工具对比和使用场景展开。</p>
        </div>
        <AdSlot id="articles-top" label="文章列表顶部广告位" compact />
        <div className="articleGrid">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
