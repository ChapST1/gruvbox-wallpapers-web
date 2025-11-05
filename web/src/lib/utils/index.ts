export function createWallpaperImageUrls({
  imageName,
  category,
}: {
  imageName?: string;
  category?: string;
}) {
  const thumb = `https://gruvbox-wallpapers.pages.dev/thumbnails/${category}/${imageName}`;
  const image = `https://gruvbox-wallpapers.pages.dev/wallpapers/${category}/${imageName}`;

  return {
    thumb,
    image,
  };
}

export function createSubWallpaperImageUrls({
  imageName,
  currentCategory,
}: {
  imageName: string;
  currentCategory: string;
}) {
  const thumb = `https://gruvbox-wallpapers.pages.dev/thumbnails/${currentCategory}/light/${imageName}`;
  const image = `https://gruvbox-wallpapers.pages.dev/wallpapers/${currentCategory}/light/${imageName}`;

  return {
    thumb,
    image,
  };
}
