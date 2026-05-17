import Image from "next/image";
import Link from "next/link";

export function CategoryCard({ category, href, locale = "zh" }) {
  const isEnglish = locale === "en";

  return (
    <Link className="categoryTile visualCategory" href={href}>
      <span className="categoryImageWrap">
        <Image
          src={category.image}
          alt={isEnglish ? `${category.nameEn} visual` : `${category.name}视觉图`}
          fill
          sizes="(max-width: 700px) 100vw, 33vw"
          className="categoryImage"
        />
      </span>
      <span className="categoryContent">
        <strong>{isEnglish ? category.nameEn : category.name}</strong>
        <small>{isEnglish ? category.descriptionEn : category.description}</small>
      </span>
    </Link>
  );
}
