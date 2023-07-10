<script lang="ts">
	import "../global.css";
	import "@fontsource/roboto";
	import "@fontsource-variable/jetbrains-mono";
	import type { LayoutData } from "./$types";
	import Navbar from "$lib/sections/Navbar.svelte";

	export let data: LayoutData;
</script>

<main id="main" data-theme={data.theme ? data.theme : "device"}>
	<div class="container">
		<Navbar />
		<slot />
	</div>
</main>

<style>
	#main {
		background-color: var(--background);
		color: var(--text);
		font-family: "Roboto", sans-serif;
		letter-spacing: 1.1px;
		min-height: 100vh;
	}

	.container {
		padding: 20px;
		max-width: 1440px;
		margin: 0 auto;
	}

	@media (min-width: 1200px) {
		.container {
			padding: 20px 80px;
		}
	}
</style>
