import { error } from '@sveltejs/kit';

export const prerender = true;

const API_KEY = 'wcp_cffcc6f7ea36df1ca3506479132dc4ce432bc6f2';
const API_URL = 'https://website-control-panel.pages.dev/api/projects';

let _cache = null;

async function fetchProjects() {
	if (_cache) return _cache;
	const res = await fetch(`${API_URL}?api_key=${API_KEY}&lang=en`);
	if (!res.ok) throw new Error(`API error: ${res.status}`);
	const data = await res.json();
	_cache = data.projects ?? [];
	return _cache;
}

function nestApiProject(p) {
	return {
		slug: p.slug,
		meta: { title: `${p.title} | Art Specialized Construction` },
		header: {
			heroImage: p.heroImage ?? '',
			subtitle: p.heroSubtitle ?? '',
			title: p.title ?? ''
		},
		features: {
			cid: `cid-features-${p.slug}`,
			scopeOfWork: p.scopeOfWork ?? '',
			sector: p.sector ?? '',
			projectSize: p.projectSize ?? '',
			location: p.location ?? '',
			status: p.projectStatus ?? '',
			client: p.client ?? ''
		},
		content: {
			cid: `cid-content-${p.slug}`,
			paragraphs: p.paragraphs ?? [],
			blockquote: p.blockquote ?? '',
			trailing: p.trailing ?? []
		},
		gallery: {
			cid: `cid-gallery-${p.slug}`,
			alt: p.title ?? '',
			images: p.images ?? [],
			fullUrls: true
		}
	};
}

export async function entries() {
	try {
		const projects = await fetchProjects();
		return projects.map(p => ({ slug: p.slug }));
	} catch {
		return [];
	}
}

export async function load({ params }) {
	try {
		const projects = await fetchProjects();
		const p = projects.find(p => p.slug === params.slug);
		if (!p) throw error(404, 'Project not found');
		return { project: nestApiProject(p) };
	} catch (e) {
		if (e.status === 404) throw e;
		throw error(404, 'Project not found');
	}
}
