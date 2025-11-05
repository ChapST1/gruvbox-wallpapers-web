import { GITHUB_TOKEN } from "@lib/constants";
import type { APIResponse } from "./get-categories";

export async function fetchData(apiUrl: string) {
  const getImages = await fetch(apiUrl, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { tree } = (await getImages.json()) as APIResponse;

  return tree;
}
