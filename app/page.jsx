import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { ToolCard } from "@/components/ToolCard";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { tools } from "@/data/tools";

export default function HomePage() {
  const featuredTools = tools.slice(0, 8);
  const latestArticles = articles.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">AI 工具导航 / SEO 内容站模板</p>
            <h1>发现、筛选并学习真正能提高效率的 AI 工具</h1>
            <p className="heroText">
              按写作、图像、视频、办公、开发等场景整理 AI 工具，并通过高质量长尾文章持续获取搜索流量。
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
          <div className="heroPanel" aria-label="网站核心数据">
            <div>
              <span className="metric">{tools.length}</span>
              <span className="metricLabel">精选工具</span>
            </div>
            <div>
              <span className="metric">{categories.length}</span>
              <span className="metricLabel">内容分类</span>
            </div>
            <div>
              <span className="metric">{articles.length}</span>
              <span className="metricLabel">示例文章</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Categories</p>
              <h2>按使用场景分类</h2>
            </div>
          </div>
          <div className="categoryGrid">
            {categories.map((category) => (
              <Link className="categoryTile" href={`/category/${category.slug}`} key={category.slug}>
                <span>{category.name}</span>
                <small>{category.description}</small>
              </Link>
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
