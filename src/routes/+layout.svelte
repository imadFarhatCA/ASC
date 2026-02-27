<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import NavFr from '$lib/components/NavFr.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FooterFr from '$lib/components/FooterFr.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
	let isFr = $derived($page.url.pathname.startsWith('/fr'));
</script>

<svelte:head>
	<script
		src="https://website-control-panel.pages.dev/tracker.js"
		data-key="wcp_cffcc6f7ea36df1ca3506479132dc4ce432bc6f2"
		data-endpoint="https://website-control-panel.pages.dev/api/track"
		defer
	></script>
</svelte:head>

{#if isFr}
	<NavFr />
{:else}
	<Nav />
{/if}

{@render children()}

{#if isFr}
	<FooterFr />
{:else}
	<Footer />
{/if}
