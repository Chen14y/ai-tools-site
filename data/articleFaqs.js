export function getArticleFaqs(article, locale = "zh") {
  const customFaqs = locale === "en" ? article.faqsEn ?? article.faqs : article.faqs;

  if (customFaqs?.length) {
    return customFaqs;
  }

  if (locale === "en") {
    return [
      {
        question: "How should I use this guide?",
        answer:
          "Use it as a starting point for comparing AI tools in a specific workflow. Always verify pricing, feature limits, privacy terms, and export options on the official tool website."
      },
      {
        question: "Is this a paid recommendation?",
        answer:
          "No. Tool links are included for reader convenience. Unless explicitly stated, they are not paid placements or sponsored recommendations."
      }
    ];
  }

  return [
    {
      question: "这篇文章应该怎么用？",
      answer: "建议把它作为具体工作流下选择 AI 工具的起点。正式使用前，请到工具官网确认价格、功能限制、隐私条款和导出能力。"
    },
    {
      question: "这些工具推荐是付费合作吗？",
      answer: "不是。工具链接主要用于方便读者继续了解产品。除非页面明确说明，否则不代表付费推荐或赞助内容。"
    }
  ];
}
