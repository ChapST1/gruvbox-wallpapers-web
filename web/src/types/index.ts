import data from "../../public/data.json";
const item = data[0];

export type Wallpaper = typeof item;
export type WallpaperCategory = typeof item.category;
export type WallpaperImages = (typeof item.data)[0];
