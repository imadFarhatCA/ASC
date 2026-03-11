import { error } from '@sveltejs/kit';

export const prerender = true;

const API_KEY = 'wcp_cffcc6f7ea36df1ca3506479132dc4ce432bc6f2';
const API_URL = 'https://website-control-panel.pages.dev/api/projects';

let _cache = null;

async function fetchProjects() {
	if (_cache) return _cache;
	const res = await fetch(`${API_URL}?api_key=${API_KEY}`);
	if (!res.ok) throw new Error(`API error: ${res.status}`);
	const text = await res.text();
	let data;
	try { data = JSON.parse(text); } catch { throw new Error('API returned non-JSON'); }
	_cache = data.projects ?? [];
	return _cache;
}

export async function entries() {
	try {
		const projects = await fetchProjects();
		return projects.map(p => ({ slug: p.slug }));
	} catch {
		// Fallback slugs if API unreachable during build
		return ['chocoville', 'taiba-hospital', 'al-wafrah', 'promedic', 'testing-laboratory', 'oleana-playhouse']
			.map(slug => ({ slug }));
	}
}

export async function load({ params }) {
	try {
		const projects = await fetchProjects();
		const project = projects.find(p => p.slug === params.slug);
		if (!project) throw error(404, 'Project not found');
		return { project };
	} catch (e) {
		if (e.status === 404) throw e;
		throw error(404, 'Project not found');
	}
}
