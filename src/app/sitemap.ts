import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";

async function getPages() {
  const baseUrl = "https://www.example.com";

  try {
    const indexPage = {
      url: "https://www.example.com/",
      date_modified: "2024-01-09T12:10:22Z",
    };
    const posts = await getAllPosts();

    const postPages = posts.map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      date_modified: post.date,
    }));

    const pages = [indexPage, ...postPages];
    return pages;
  } catch (error) {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getPages();
  return [
    ...pages.map((page) => ({
      url: page.url,
      lastModified: page.date_modified
        ? new Date(page.date_modified)
        : new Date(),
    })),
  ];
}
