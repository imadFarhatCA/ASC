import { projectsFr } from '$lib/projects.fr.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

const API_KEY = 'wcp_cffcc6f7ea36df1ca3506479132dc4ce432bc6f2';
const API_URL = 'https://website-control-panel.pages.dev/api/projects';

let _apiCache = null;

async function fetchProjects() {
	if (_apiCache) return _apiCache;
	const res = await fetch(`${API_URL}?api_key=${API_KEY}`);
	if (!res.ok) throw new Error(`API ${res.status}`);
	const data = await res.json();
	_apiCache = data.projects ?? [];
	return _apiCache;
}

function apiToFrFormat(p) {
	return {
		slug: p.slug,
		meta: { title: `${p.title} | Art Specialized Construction` },
		header: {
			heroImage: p.heroImage ?? p.images?.[0] ?? '',
			subtitle: p.heroSubtitle ?? '',
			title: p.title
		},
		features: {
			cid: '',
			scopeOfWork: p.scopeOfWork ?? '-',
			sector: p.sector ?? '-',
			projectSize: p.projectSize ?? '-'
		},
		content: {
			cid: '',
			paragraphs: p.paragraphs ?? [],
			blockquote: p.blockquote ?? '',
			trailing: p.trailing ?? []
		},
		gallery: {
			cid: '',
			alt: p.title,
			images: p.images ?? [],
			fullUrls: true
		}
	};
}

export async function entries() {
	const localSlugs = Object.keys(projectsFr).map(slug => ({ slug }));
	try {
		const apiProjects = await fetchProjects();
		const apiOnlySlugs = apiProjects
			.filter(p => !projectsFr[p.slug])
			.map(p => ({ slug: p.slug }));
		return [...localSlugs, ...apiOnlySlugs];
	} catch {
		return localSlugs;
	}
}

export async function load({ params }) {
	// Prefer local French translation
	if (projectsFr[params.slug]) {
		return { project: projectsFr[params.slug] };
	}
	// Fall back to API data
	try {
		const apiProjects = await fetchProjects();
		const p = apiProjects.find(p => p.slug === params.slug);
		if (p) return { project: apiToFrFormat(p) };
	} catch {
		// ignore
	}
	throw error(404, 'Projet introuvable');
}
