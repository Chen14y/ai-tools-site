import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const metadata = {
  title: "AI Tool Guides and Reviews",
  description: "Long-tail AI tool guides for office workflows, developers, cybersecurity teams, and niche use cases."
};

export default function EnglishArticlesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="pageTitle">
          <p className="eyebrow">Articles</p>
          <h1>AI Tool Guides and Reviews</h1>
          <p>Each guide targets a specific search problem instead of broad, over-competitive AI keywords.</p>
        </div>
        <AdSlot id="en-articles-top" label="English articles top ad" compact />
        <div className="articleGrid">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.slug} locale="en" />
          ))}
        </div>
      </div>
    </section>
  );
}
