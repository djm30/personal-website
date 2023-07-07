import type { themeTypes } from "$lib/types";

export function load({ cookies }) {
	const themeFromCookie = cookies.get("theme");

	let theme: themeTypes = "device";
	if (themeFromCookie === "light" || themeFromCookie === "dark") {
		theme = themeFromCookie;
	}
	return {
		theme
	};
}
