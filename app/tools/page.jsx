import { AdSlot } from "@/components/AdSlot";
import { ToolCard } from "@/components/ToolCard";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export const metadata = {
  title: "AI 工具导航大全",
  description: "按写作、图片、视频、办公、开发和营销等场景查找实用 AI 工具。"
};

export default function ToolsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="pageTitle">
          <p className="eyebrow">Tool Directory</p>
          <h1>AI 工具导航大全</h1>
          <p>先从分类和工具说明开始，后续可以继续批量扩展工具库和文章库。</p>
        </div>

        {categories.map((category, index) => {
          const categoryTools = tools.filter((tool) => tool.category === category.slug);

          if (categoryTools.length === 0) {
            return null;
          }

          return (
            <section className="categoryBlock" key={category.slug}>
              <div className="sectionHead compact">
                <div>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                </div>
              </div>
              {index === 1 ? <AdSlot id="tools-list-middle" label="工具列表中部广告位" compact /> : null}
              <div className="toolGrid">
                {categoryTools.map((tool) => (
                  <ToolCard tool={tool} key={tool.slug} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
