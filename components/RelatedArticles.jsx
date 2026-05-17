import { ArticleCard } from "@/components/ArticleCard";

export function RelatedArticles({ articles, locale = "zh", title }) {
  if (!articles.length) {
    return null;
  }

  return (
    <section className="relatedBlock">
      <h2>{title}</h2>
      <div className="articleGrid compactGrid">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.slug} locale={locale} />
        ))}
      </div>
    </section>
  );
}
