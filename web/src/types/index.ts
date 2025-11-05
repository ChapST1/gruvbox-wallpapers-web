import data from "../../public/data.json";
const item = data[0];

export interface Wallpaper {
  thumb: string;
  image: string;
  hasLightMode: {
    status: boolean;
    allImagesApiUrl?: string;
  };
}
export interface Category {
  name: string;
  href: string;
  allImagesApiUrl?: string;
}
export type WallpaperCategory = typeof item.category;
export type WallpaperImages = (typeof item.data)[0];
