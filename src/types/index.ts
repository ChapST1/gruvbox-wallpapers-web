
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

