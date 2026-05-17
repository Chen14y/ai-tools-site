const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-tools-site-lac.vercel.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
