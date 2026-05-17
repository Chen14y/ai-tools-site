import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { HeroVisual } from "@/components/HeroVisual";
import { ToolCard } from "@/components/ToolCard";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { tools } from "@/data/tools";

export default function HomePage() {
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
            <p className="eyebrow">AI 工具导航 / 长尾 SEO 内容站</p>
            <h1>
              为办公开发
              <br />
              与安全场景
              <br />
              寻找 AI 工具
            </h1>
            <p className="heroText">
              聚焦 AI 办公、AI 开发和 AI 安全，不抢泛关键词，用具体问题承接更有价值的搜索流量。
            </p>
            <div className="heroActions">
              <Link className="button primary" href="/tools">
                浏览工具
              </Link>
              <Link className="button secondary" href="/articles">
                查看文章
              </Link>
            </div>
          </div>
          <HeroVisual
            labels={{
              aria: "AI 工具工作台视觉图",
              alt: "AI 办公、开发和安全工具工作台",
              panelOneTitle: "长尾场景",
              panelOneValue: `${coreCategories.length} 条主线`,
              panelTwoTitle: "内容资产",
              panelTwoValue: `${articles.length} 篇文章`
            }}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Core Categories</p>
              <h2>先做高价值长尾场景</h2>
            </div>
          </div>
          <div className="categoryGrid">
            {coreCategories.map((category) => (
              <CategoryCard category={category} href={`/category/${category.slug}`} key={category.slug} />
            ))}
          </div>
        </div>
      </section>

      <AdSlot id="home-middle" label="首页中部广告位" />

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Tools</p>
              <h2>精选 AI 工具</h2>
            </div>
            <Link href="/tools" className="textLink">
              全部工具
            </Link>
          </div>
          <div className="toolGrid">
            {featuredTools.map((tool) => (
              <ToolCard tool={tool} key={tool.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section mutedBand">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">SEO Articles</p>
              <h2>最新 AI 工具教程</h2>
            </div>
            <Link href="/articles" className="textLink">
              全部文章
            </Link>
          </div>
          <div className="articleGrid">
            {latestArticles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
