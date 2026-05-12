import { AdSlot } from "@/components/AdSlot";
import { ToolCard } from "@/components/ToolCard";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export const metadata = {
  title: "AI Tool Directory",
  description: "Browse AI tools for office work, development, cybersecurity, marketing, video, image, and writing."
};

export default function EnglishToolsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="pageTitle">
          <p className="eyebrow">Tool Directory</p>
          <h1>AI Tool Directory</h1>
          <p>Start with focused categories and expand around long-tail search problems.</p>
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
                  <h2>{category.nameEn}</h2>
                  <p>{category.descriptionEn}</p>
                </div>
              </div>
              {index === 1 ? <AdSlot id="en-tools-list-middle" label="English tools list middle ad" compact /> : null}
              <div className="toolGrid">
                {categoryTools.map((tool) => (
                  <ToolCard tool={tool} key={tool.slug} locale="en" />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
