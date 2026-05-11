import Link from "next/link";
import { categories } from "@/data/categories";

export function ToolCard({ tool }) {
  const category = categories.find((item) => item.slug === tool.category);

  return (
    <article className="toolCard">
      <div className="toolCardTop">
        <span className="toolIcon">{tool.initials}</span>
        <span className="pill">{category?.name ?? "AI 工具"}</span>
      </div>
      <h3>{tool.name}</h3>
      <p>{tool.description}</p>
      <div className="tagList">
        {tool.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="cardActions">
        <Link href={tool.url} target="_blank" rel="noreferrer">
          访问官网
        </Link>
        <Link href={`/category/${tool.category}`}>同类工具</Link>
      </div>
    </article>
  );
}
