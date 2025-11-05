import type { APIResponse } from "./get-categories";

export async function fetchData(apiUrl: string) {
  const getImages = await fetch(apiUrl, {
    headers: {
      Authorization: `token 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`,
    },
  });
  const { tree } = (await getImages.json()) as APIResponse;

  return tree;
}
