import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { ToolCard } from "@/components/ToolCard";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.nameEn} Tools`,
    description: category.descriptionEn
  };
}

export default async function EnglishCategoryPage({ params }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryTools = tools.filter((tool) => tool.category === category.slug);
  const categoryArticles = articles.filter((article) => article.category === category.slug);

  return (
    <section className="section">
      <div className="container">
        <div className="pageTitle">
          <p className="eyebrow">Category</p>
          <h1>{category.nameEn} Tools</h1>
          <p>{category.descriptionEn}</p>
        </div>

        <AdSlot id={`en-category-${category.slug}-top`} label="English category top ad" compact />

        <div className="toolGrid">
          {categoryTools.map((tool) => (
            <ToolCard tool={tool} key={tool.slug} locale="en" />
          ))}
        </div>

        {categoryArticles.length > 0 ? (
          <section className="categoryBlock">
            <div className="sectionHead compact">
              <h2>Related guides</h2>
            </div>
            <div className="articleGrid">
              {categoryArticles.map((article) => (
                <ArticleCard article={article} key={article.slug} locale="en" />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}
