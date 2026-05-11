import Link from "next/link";
import { categories } from "@/data/categories";

export function ArticleCard({ article }) {
  const category = categories.find((item) => item.slug === article.category);

  return (
    <article className="articleCard">
      <div className="articleCardMeta">
        <span>{category?.name ?? "AI 工具"}</span>
        <span>{article.readingTime}</span>
      </div>
      <h3>
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.description}</p>
      <Link className="textLink" href={`/articles/${article.slug}`}>
        阅读文章
      </Link>
    </article>
  );
}
