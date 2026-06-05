import { TrustPage } from "@/components/TrustPage";

export const metadata = {
  title: "关于 AI Tools Atlas",
  description: "了解 AI Tools Atlas 的内容方向、编辑原则和适合阅读本站的人群。"
};

export default function AboutPage() {
  return (
    <TrustPage
      eyebrow="About"
      title="关于 AI Tools Atlas"
      intro="AI Tools Atlas 是一个面向 AI 办公、AI 开发和 AI 安全场景的工具研究与教程站。本站不追逐泛 AI 大词，而是围绕具体工作问题整理工具、使用流程和选择建议。"
      sections={[
        {
          heading: "我们解决什么问题",
          paragraphs: [
            "很多 AI 工具列表只给名称和链接，但读者真正需要的是：这个工具适合什么场景、免费版有什么限制、团队使用时有什么风险、是否有替代方案。",
            "本站优先覆盖办公效率、开发流程和安全运营，因为这些场景通常有明确问题、较高商业价值，也更适合写出可验证的长尾内容。"
          ]
        },
        {
          heading: "内容如何制作",
          paragraphs: [
            "每篇文章会先确定一个具体搜索问题，再整理工具功能、限制、适合人群和验证清单。AI 可以辅助生成提纲或初稿，但最终内容会经过人工筛选、重写和结构调整。",
            "我们避免发布只有泛泛介绍的页面。文章会尽量加入使用场景、风险提示、检查清单、FAQ 和相关工具推荐。"
          ]
        },
        {
          heading: "适合谁阅读",
          paragraphs: [
            "本站适合正在选择 AI 工具的小团队、独立开发者、办公效率用户、安全从业者和内容站运营者。",
            "如果你只想看一个工具的官网链接，工具目录可以满足你；如果你需要判断工具是否适合真实工作流，文章页会提供更完整的背景。"
          ]
        }
      ]}
    />
  );
}
