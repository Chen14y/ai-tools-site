import { TrustPage } from "@/components/TrustPage";

export const metadata = {
  title: "编辑政策",
  description: "AI Tools Atlas 的内容选择、人工审核、广告和外部链接原则。"
};

export default function EditorialPolicyPage() {
  return (
    <TrustPage
      eyebrow="Editorial Policy"
      title="编辑政策"
      intro="本站的目标是发布对读者有实际帮助的 AI 工具内容，而不是复制工具官网介绍或批量生成低价值页面。"
      sections={[
        {
          heading: "选题原则",
          paragraphs: [
            "我们优先选择具体场景型问题，例如 AI Excel 公式、SOC 告警分诊、渗透测试报告、私有仓库代码助手等，而不是只写“Best AI tools”这类竞争激烈且信息密度低的泛主题。",
            "一个选题只有在能提供使用场景、选择标准、风险提示和替代方案时，才适合发布成独立文章。"
          ]
        },
        {
          heading: "人工审核",
          paragraphs: [
            "AI 可以帮助整理框架和初稿，但文章发布前会进行人工编辑，包括删除重复段落、补充实际判断、检查是否存在夸大承诺，以及确保内容没有诱导误用。",
            "安全类内容只讨论防御、合规测试、报告和安全运营流程，不提供入侵、绕过、滥用或规避检测的操作步骤。"
          ]
        },
        {
          heading: "广告和外部链接",
          paragraphs: [
            "本站可能展示 Google AdSense 广告。广告内容由广告网络提供，本站不会要求用户点击广告，也不会用误导性布局诱导点击。",
            "工具官网链接用于帮助读者继续了解产品。除非明确标注，外部链接不代表付费推荐或商业合作。"
          ]
        },
        {
          heading: "更新和更正",
          paragraphs: [
            "AI 工具变化很快，价格、免费额度、功能和产品名称都可能更新。我们会优先更新访问量较高或影响决策较大的页面。",
            "如果发现页面信息不准确，可以通过联系页面提交更正建议。"
          ]
        }
      ]}
    />
  );
}
