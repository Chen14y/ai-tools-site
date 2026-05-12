import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { ToolCard } from "@/components/ToolCard";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { tools } from "@/data/tools";

export const metadata = {
  title: "AI Tools Atlas - Long-Tail AI Tool Guides",
  description:
    "Find practical AI tools for office work, development, cybersecurity, and other high-intent use cases."
};

export default function EnglishHomePage() {
  const coreCategories = categories.filter((category) =>
    ["office", "developer", "cybersecurity"].includes(category.slug)
  );
  const featuredTools = tools.filter((tool) => coreCategories.some((category) => category.slug === tool.category));
  const latestArticles = articles.slice(-4).reverse();

  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">AI Tools / Long-Tail SEO Guides</p>
            <h1>AI tools for real work problems, not generic keywords</h1>
            <p className="heroText">
              Explore AI tools for office workflows, developer productivity, and cybersecurity use cases with
              practical guides built around specific search intent.
            </p>
            <div className="heroActions">
              <Link className="button primary" href="/en/tools">
                Browse tools
              </Link>
              <Link className="button secondary" href="/en/articles">
                Read guides
              </Link>
            </div>
          </div>
          <div className="heroPanel" aria-label="Site stats">
            <div>
              <span className="metric">{tools.length}</span>
              <span className="metricLabel">AI tools</span>
            </div>
            <div>
              <span className="metric">{coreCategories.length}</span>
              <span className="metricLabel">Core SEO categories</span>
            </div>
            <div>
              <span className="metric">{articles.length}</span>
              <span className="metricLabel">Practical guides</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Core Categories</p>
              <h2>Focus on high-intent AI use cases</h2>
            </div>
          </div>
          <div className="categoryGrid">
            {coreCategories.map((category) => (
              <Link className="categoryTile" href={`/en/category/${category.slug}`} key={category.slug}>
                <span>{category.nameEn}</span>
                <small>{category.descriptionEn}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdSlot id="en-home-middle" label="English homepage middle ad" />

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Tools</p>
              <h2>Featured AI tools</h2>
            </div>
            <Link href="/en/tools" className="textLink">
              All tools
            </Link>
          </div>
          <div className="toolGrid">
            {featuredTools.map((tool) => (
              <ToolCard tool={tool} key={tool.slug} locale="en" />
            ))}
          </div>
        </div>
      </section>

      <section className="section mutedBand">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">SEO Articles</p>
              <h2>Long-tail AI guides</h2>
            </div>
            <Link href="/en/articles" className="textLink">
              All articles
            </Link>
          </div>
          <div className="articleGrid">
            {latestArticles.map((article) => (
              <ArticleCard article={article} key={article.slug} locale="en" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
