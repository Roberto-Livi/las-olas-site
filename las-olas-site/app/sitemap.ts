import type { MetadataRoute } from "next";

const siteUrl = "https://www.lasolasaruba.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/location",
    "/gallery",
    "/faq",
    "/book",
    "/eagle-beach",
    "/reviews",
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
