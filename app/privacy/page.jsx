import { TrustPage } from "@/components/TrustPage";

export const metadata = {
  title: "隐私政策",
  description: "AI Tools Atlas 的隐私政策，包括 Cookie、广告、日志和外部链接说明。"
};

export default function PrivacyPage() {
  return (
    <TrustPage
      eyebrow="Privacy"
      title="隐私政策"
      intro="本隐私政策说明 AI Tools Atlas 如何处理访问数据、Cookie、广告相关技术和外部链接。最后更新日期：2026 年 6 月 5 日。"
      sections={[
        {
          heading: "我们收集的信息",
          paragraphs: [
            "本站本身不会要求用户注册账户，也不会主动收集姓名、身份证号、支付信息等敏感个人信息。",
            "当你访问网站时，托管服务、浏览器和基础分析或广告服务可能会处理 IP 地址、设备信息、浏览器类型、访问页面、引用来源和访问时间等常规日志信息。"
          ]
        },
        {
          heading: "Cookie 和广告",
          paragraphs: [
            "本站使用 Google AdSense 广告代码。Google 及其合作伙伴可能使用 Cookie 或类似技术展示广告、限制广告频率、衡量广告效果，并根据用户访问情况提供个性化或非个性化广告。",
            "你可以通过浏览器设置管理 Cookie，也可以访问 Google 的广告设置页面管理个性化广告偏好。"
          ]
        },
        {
          heading: "外部链接",
          paragraphs: [
            "本站包含指向第三方工具官网的链接。点击外部链接后，你将离开本站，第三方网站会按照其自己的隐私政策处理数据。",
            "我们建议在注册或上传敏感数据前，阅读对应工具的隐私政策、服务条款和数据处理说明。"
          ]
        },
        {
          heading: "联系我们",
          paragraphs: [
            "如果你对隐私政策或数据处理有疑问，可以通过 contact 页面提供的邮箱联系我们。",
            "如果你要求删除与联系邮件相关的信息，请在邮件标题中注明“隐私请求”。"
          ]
        }
      ]}
    />
  );
}
