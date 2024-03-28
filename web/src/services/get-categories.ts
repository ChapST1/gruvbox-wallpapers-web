import data from "../../public/data.json";
import { HOME_KEY_CATEGORIES } from "@lib/constants"; // "Home"

export function getCategories() {
	const categories = data.map(({ category }) => {
		return {
			name: category,
			href: `/wallpapers/${category}`,
		};
	});

	const home = { name: HOME_KEY_CATEGORIES, href: "/" };

	return [home, ...categories];
}
