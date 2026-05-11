import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const category = categories.find((item) => item.slug === article.category);

  return (
    <article className="articlePage">
      <div className="container narrow">
        <div className="articleHeader">
          <Link href={`/category/${article.category}`} className="pill">
            {category?.name ?? "AI 工具"}
          </Link>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="articleMeta">
            <span>{article.date}</span>
            <span>{article.readingTime}</span>
          </div>
        </div>

        <AdSlot id={`article-${article.slug}-top`} label="文章顶部广告位" compact />

        <div className="prose">
          {article.sections.map((section, index) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {index === 1 ? (
                <AdSlot id={`article-${article.slug}-middle`} label="文章中部广告位" compact />
              ) : null}
            </section>
          ))}
        </div>

        <AdSlot id={`article-${article.slug}-bottom`} label="文章底部广告位" compact />
      </div>
    </article>
  );
}
