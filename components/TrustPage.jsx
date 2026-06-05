export function TrustPage({ eyebrow, title, intro, sections }) {
  return (
    <section className="section">
      <div className="container narrow trustPage">
        <div className="pageTitle">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        {sections.map((section) => (
          <section className="trustSection" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
