import type { Wallpaper } from "src/types";
import data from "../../public/data.json";

export function getWallpapers({
	category,
}: { category: string; limit?: number }): Wallpaper {
	const findWallpaper = data.find(
		(item) => item.category.toLowerCase() === category.toLowerCase(),
	);

	return findWallpaper as Wallpaper;
}
