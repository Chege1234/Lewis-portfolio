export default function sitemap() {
  const baseUrl = "https://lewischege.site";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

