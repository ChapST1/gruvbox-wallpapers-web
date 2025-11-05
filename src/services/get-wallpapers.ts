import type { Wallpaper } from "src/types";
import { getCategories, type APIResponse } from "./get-categories";
import { fetchData } from "./fetch-data";
import { createWallpaperImageUrls } from "@lib/utils";

export async function getWallpapers({
  category,
  limit,
}: {
  category?: string;
  limit?: number;
}): Promise<Wallpaper[]> {
  try {
    const categories = await getCategories();
    const findCategory = categories.find(
      (i) => i.name.toLowerCase() === category?.toLowerCase(),
    );

    if (!findCategory) throw new Error("category not found");

    const response = await fetchData(`${findCategory?.allImagesApiUrl}`);

    const images = response.map((i) => {
      const imageFileName = i.path;
      const fileType = i.type as "blob" | "tree";

      const data = createWallpaperImageUrls({
        imageName: imageFileName,
        category: category,
      });

      return {
        hasLightMode: {
          status: fileType === "tree",
          allImagesApiUrl: fileType === "tree" ? i.url : "",
        },
        ...data,
      };
    });

    if (limit) {
      return images.slice(0, Number(limit));
    }

    return images;
  } catch (error) {
    return error;
  }
}
