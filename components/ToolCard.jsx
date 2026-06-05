import Link from "next/link";
import { categories } from "@/data/categories";

export function ToolCard({ tool, locale = "zh" }) {
  const category = categories.find((item) => item.slug === tool.category);
  const isEnglish = locale === "en";
  const categoryName = isEnglish ? category?.nameEn : category?.name;
  const categoryPath = isEnglish ? `/en/category/${tool.category}` : `/category/${tool.category}`;

  return (
    <article className="toolCard">
      <div className="toolCardTop">
        <span className="toolIcon">{tool.initials}</span>
        <span className="pill">{categoryName ?? (isEnglish ? "AI Tools" : "AI 工具")}</span>
      </div>
      <h3>{tool.name}</h3>
      <p>{isEnglish ? tool.descriptionEn ?? tool.description : tool.description}</p>
      <div className="tagList">
        {(isEnglish ? tool.tagsEn ?? tool.tags : tool.tags).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="cardActions">
        <Link href={tool.url} target="_blank" rel="nofollow noopener noreferrer">
          {isEnglish ? "Visit site" : "访问官网"}
        </Link>
        <Link href={categoryPath}>{isEnglish ? "Same category" : "同类工具"}</Link>
      </div>
    </article>
  );
}
