import { fetchData } from "./fetch-data";
import { createSubWallpaperImageUrls } from "@lib/utils";

interface Options {
  apiUrl: string;
  currentCategory: string;
}

export async function getSubWallpaper({ apiUrl, currentCategory }: Options) {
  const data = await fetchData(apiUrl);
  const images = data.map((i) => {
    const imageFileName = i.path;
    const fileType = i.type as "blob" | "tree";

    const data = createSubWallpaperImageUrls({
      imageName: imageFileName,
      currentCategory: currentCategory,
    });

    return {
      hasLightMode: {
        status: fileType === "tree",
        allImagesApiUrl: fileType === "tree" ? i.url : "",
      },
      ...data,
    };
  });

  return images;
}
