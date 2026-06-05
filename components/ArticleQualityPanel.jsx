const categoryGuides = {
  cybersecurity: {
    zh: {
      method: "本文以防御和合规使用为边界，重点评估工具是否能帮助安全团队减少重复调查、改进报告质量或提升证据整理效率。",
      checks: ["是否适合授权和防御场景", "是否能保留证据链", "是否有权限和数据处理控制", "是否需要人工复核结论"]
    },
    en: {
      method:
        "This guide focuses on defensive and authorized use cases, evaluating whether a tool helps security teams reduce repetitive investigation, improve reporting, or organize evidence.",
      checks: ["Authorized and defensive use only", "Evidence traceability", "Permission and data controls", "Human validation of findings"]
    }
  },
  developer: {
    zh: {
      method: "本文从真实开发工作流出发，关注仓库上下文、多文件修改、代码评审、测试生成和团队采用成本。",
      checks: ["是否理解项目上下文", "生成 diff 是否容易审查", "是否能补充测试", "是否符合团队隐私要求"]
    },
    en: {
      method:
        "This guide looks at real development workflows: repository context, multi-file edits, code review, test generation, and adoption cost.",
      checks: ["Project context quality", "Reviewable diffs", "Test generation", "Team privacy requirements"]
    }
  },
  office: {
    zh: {
      method: "本文从办公场景的可落地性出发，关注免费额度、导出能力、团队协作、隐私和人工复核流程。",
      checks: ["免费版限制是否清楚", "是否支持导出和协作", "是否适合团队数据", "是否保留人工复核"]
    },
    en: {
      method:
        "This guide evaluates practical office workflows, including free-plan limits, exports, collaboration, privacy, and human review.",
      checks: ["Clear free-plan limits", "Export and collaboration", "Team data suitability", "Human review remains in place"]
    }
  }
};

const fallbackGuide = {
  zh: {
    method: "本文关注具体场景下的工具选择，而不是简单堆砌工具名单。",
    checks: ["是否解决明确问题", "是否说明限制", "是否有替代方案", "是否需要人工判断"]
  },
  en: {
    method: "This guide focuses on practical tool selection for a specific use case instead of a generic tool list.",
    checks: ["Clear problem fit", "Known limitations", "Alternative options", "Human judgment required"]
  }
};

export function ArticleQualityPanel({ article, category, locale = "zh" }) {
  const isEnglish = locale === "en";
  const guide = categoryGuides[article.category]?.[locale] ?? fallbackGuide[locale];
  const lastUpdated = article.updatedAt ?? article.date;

  return (
    <aside className="qualityPanel">
      <div>
        <span className="qualityLabel">{isEnglish ? "Editorial note" : "编辑说明"}</span>
        <p>
          {isEnglish
            ? `Written for the ${category?.nameEn ?? "AI tools"} category and last reviewed on ${lastUpdated}.`
            : `本文属于${category?.name ?? "AI 工具"}主题，最后检查日期：${lastUpdated}。`}
        </p>
      </div>
      <div>
        <span className="qualityLabel">{isEnglish ? "Evaluation method" : "评估方法"}</span>
        <p>{guide.method}</p>
      </div>
      <div>
        <span className="qualityLabel">{isEnglish ? "Reader checklist" : "读者检查清单"}</span>
        <ul>
          {guide.checks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
