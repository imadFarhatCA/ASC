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
	<script defer>
		(function() {
			const API_KEY = 'wcp_cffcc6f7ea36df1ca3506479132dc4ce432bc6f2';
			const ENDPOINT = 'https://website-control-panel.pages.dev/api/track';
			const sid = sessionStorage.getItem('_wcp_sid') || Math.random().toString(36).slice(2);
			sessionStorage.setItem('_wcp_sid', sid);
			function send(event, extra) {
				navigator.sendBeacon(ENDPOINT, JSON.stringify(Object.assign({
					api_key: API_KEY, event, session: sid,
					path: location.pathname, referrer: document.referrer,
					ua: navigator.userAgent
				}, extra)));
			}
			send('pageview');
			let t = Date.now();
			window.addEventListener('visibilitychange', function() {
				if (document.visibilityState === 'hidden') send('duration', { duration: Math.round((Date.now() - t) / 1000) });
			});
		})();
	</script>
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
