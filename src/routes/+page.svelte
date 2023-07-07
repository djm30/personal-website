<script lang="ts">
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Hello World</h1>

<ThemeToggle theme={data.theme} />

<style>
	h1 {
		font-weight: normal;
	}
</style>
