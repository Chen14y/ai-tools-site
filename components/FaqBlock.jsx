export function FaqBlock({ faqs, title }) {
  if (!faqs?.length) {
    return null;
  }

  return (
    <section className="faqBlock">
      <h2>{title}</h2>
      <div className="faqList">
        {faqs.map((item) => (
          <details className="faqItem" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
