import { TrustPage } from "@/components/TrustPage";

export const metadata = {
  title: "使用条款",
  description: "AI Tools Atlas 的网站使用条款、内容免责声明和安全内容边界。"
};

export default function TermsPage() {
  return (
    <TrustPage
      eyebrow="Terms"
      title="使用条款"
      intro="访问 AI Tools Atlas 即表示你理解并同意以下使用条款。最后更新日期：2026 年 6 月 5 日。"
      sections={[
        {
          heading: "内容用途",
          paragraphs: [
            "本站内容仅用于一般信息和工具研究参考，不构成法律、财务、安全合规或专业服务建议。",
            "工具价格、功能、免费额度和政策可能变化。请在购买或部署前访问工具官网确认最新信息。"
          ]
        },
        {
          heading: "安全内容边界",
          paragraphs: [
            "本站安全类内容面向防御、授权测试、报告整理和安全运营。请勿将任何内容用于未授权访问、攻击、绕过安全控制或其他违法用途。",
            "如果你从事渗透测试或安全评估，应确保拥有明确授权，并遵守适用法律、合同和组织政策。"
          ]
        },
        {
          heading: "广告和第三方服务",
          paragraphs: [
            "本站可能展示广告，并包含第三方工具链接。广告和第三方网站由对应服务提供方负责。",
            "我们不对第三方工具的可用性、准确性、价格、数据处理或服务质量作出保证。"
          ]
        },
        {
          heading: "责任限制",
          paragraphs: [
            "你应自行判断工具是否适合自己的业务、技术和合规要求。",
            "因使用本站内容或第三方工具造成的直接或间接损失，本站不承担超出法律要求范围的责任。"
          ]
        }
      ]}
    />
  );
}
