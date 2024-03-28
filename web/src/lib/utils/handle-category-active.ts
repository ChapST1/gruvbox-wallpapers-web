import { HOME_KEY_CATEGORIES } from "@lib/constants";

export function handleCategoryActive(pagePath: string, value: string) {
	return pagePath.toLocaleLowerCase() === value.toLocaleLowerCase() ||
		(pagePath === HOME_KEY_CATEGORIES && value === HOME_KEY_CATEGORIES)
		? "bg-bg-accent dark:bg-bg-accent-dark text-primary-dark dark:text-primary"
		: "bg-transparent text-color-text dark:text-color-text-dark hover:text-primary-dark hover:dark:text-primary";
}
