import { GITHUB_TOKEN, } from "@lib/constants"; // "Home"
import { CATEGORIES_API_URL } from "./config";
import type { Category } from "src/types";



export interface APIResponse {
  sha: string;
  url: string;
  tree: {
    path: string;
    mode: string;
    type: string;
    sha: string;
    url: string;
  }[];
}

export async function getCategories(): Promise<Category[]> {
  const categories = await fetch(CATEGORIES_API_URL, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const res = (await categories.json()) as APIResponse;

  const keys = res?.tree.map((i) => {
    return {
      name: i.path,
      href: `/wallpapers/${i.path}`,
      allImagesApiUrl: i.url,
    };
  });

  return [...keys];
}
