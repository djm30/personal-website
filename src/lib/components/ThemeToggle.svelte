<script lang="ts">
	import { onMount } from "svelte";
	import type { themeTypes } from "$lib/types";
	export let theme: themeTypes;

	function click() {
		switch (theme) {
			case "dark":
				switchTheme("light");
				break;
			case "light":
				switchTheme("dark");
				break;
		}
	}

	function updateCookie() {
		document.cookie = `theme=${theme}; path=/; max-age=31536000; sameSite=strict`;
	}

	function switchTheme(newTheme: themeTypes) {
		const rootElement = document.querySelector("#main") as HTMLElement;
		switch (theme) {
			case "dark":
				rootElement.dataset.theme = newTheme;
				theme = newTheme;
				updateCookie();
				break;
			case "light":
				rootElement.dataset.theme = newTheme;
				theme = newTheme;
				updateCookie();
				break;
		}
	}

	onMount(() => {
		const rootElement = document.querySelector("#main") as HTMLElement;

		if (theme === "device") {
			let backgroundColour = getComputedStyle(rootElement).getPropertyValue("--background");
			theme = backgroundColour === "#1d1e20" ? "dark" : "light";
		}
	});
</script>

<button on:click={click}> Toggle Theme </button>
