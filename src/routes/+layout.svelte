<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import NavFr from '$lib/components/NavFr.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FooterFr from '$lib/components/FooterFr.svelte';
	import { page } from '$app/stores';
	import WebsiteTracker from '$lib/components/WebsiteTracker.svelte';

	let { children } = $props();
	let isFr = $derived($page.url.pathname.startsWith('/fr'));
</script>

<WebsiteTracker />

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
