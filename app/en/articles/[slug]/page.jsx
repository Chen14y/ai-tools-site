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
    title: article.titleEn ?? article.title,
    description: article.descriptionEn ?? article.description
  };
}

export default async function EnglishArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const category = categories.find((item) => item.slug === article.category);
  const sections = article.sectionsEn ?? article.sections;

  return (
    <article className="articlePage">
      <div className="container narrow">
        <div className="articleHeader">
          <Link href={`/en/category/${article.category}`} className="pill">
            {category?.nameEn ?? "AI Tools"}
          </Link>
          <h1>{article.titleEn ?? article.title}</h1>
          <p>{article.descriptionEn ?? article.description}</p>
          <div className="articleMeta">
            <span>{article.date}</span>
            <span>{article.readingTimeEn ?? article.readingTime}</span>
          </div>
        </div>

        <AdSlot id={`en-article-${article.slug}-top`} label="English article top ad" compact />

        <div className="prose">
          {sections.map((section, index) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {index === 1 ? (
                <AdSlot id={`en-article-${article.slug}-middle`} label="English article middle ad" compact />
              ) : null}
            </section>
          ))}
        </div>

        <AdSlot id={`en-article-${article.slug}-bottom`} label="English article bottom ad" compact />
      </div>
    </article>
  );
}
