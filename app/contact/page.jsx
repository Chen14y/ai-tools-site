import { TrustPage } from "@/components/TrustPage";

export const metadata = {
  title: "联系",
  description: "联系 AI Tools Atlas，提交工具建议、内容更正或合作咨询。"
};

export default function ContactPage() {
  return (
    <TrustPage
      eyebrow="Contact"
      title="联系"
      intro="欢迎提交工具建议、内容更正、隐私请求或合作咨询。"
      sections={[
        {
          heading: "联系邮箱",
          paragraphs: [
            "Email: x1120300197@gmail.com",
            "请在邮件标题中说明类型，例如“内容更正”“工具建议”“隐私请求”或“合作咨询”。"
          ]
        },
        {
          heading: "内容更正",
          paragraphs: [
            "如果你发现文章中的工具功能、价格、免费额度或政策描述已经过期，请附上相关页面链接和建议修改内容。",
            "我们会优先处理影响读者决策的信息，例如安全、隐私、价格和使用限制。"
          ]
        },
        {
          heading: "工具收录建议",
          paragraphs: [
            "推荐工具时，请说明工具官网、主要适用场景、是否有免费版、是否适合办公、开发或安全领域。",
            "本站不保证收录所有提交的工具。我们会优先选择能解决具体问题、信息透明且对读者有实际价值的工具。"
          ]
        }
      ]}
    />
  );
}
