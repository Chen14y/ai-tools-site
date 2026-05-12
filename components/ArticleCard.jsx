import Link from "next/link";
import { categories } from "@/data/categories";

export function ArticleCard({ article, locale = "zh" }) {
  const category = categories.find((item) => item.slug === article.category);
  const isEnglish = locale === "en";
  const articlePath = isEnglish ? `/en/articles/${article.slug}` : `/articles/${article.slug}`;
  const categoryName = isEnglish ? category?.nameEn : category?.name;

  return (
    <article className="articleCard">
      <div className="articleCardMeta">
        <span>{categoryName ?? (isEnglish ? "AI Tools" : "AI 工具")}</span>
        <span>{isEnglish ? article.readingTimeEn ?? article.readingTime : article.readingTime}</span>
      </div>
      <h3>
        <Link href={articlePath}>{isEnglish ? article.titleEn ?? article.title : article.title}</Link>
      </h3>
      <p>{isEnglish ? article.descriptionEn ?? article.description : article.description}</p>
      <Link className="textLink" href={articlePath}>
        {isEnglish ? "Read article" : "阅读文章"}
      </Link>
    </article>
  );
}
