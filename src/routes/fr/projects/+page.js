export const prerender = true;

const API_KEY = 'wcp_cffcc6f7ea36df1ca3506479132dc4ce432bc6f2';
const API_URL = 'https://website-control-panel.pages.dev/api/projects';

const CATEGORY_FR = {
	Commercial: 'Commercial',
	Healthcare: 'Santé',
	Residential: 'Résidentiel',
	Hospitality: 'Hospitalité',
	Industrial: 'Industriel'
};

export async function load() {
	try {
		const res = await fetch(`${API_URL}?api_key=${API_KEY}`);
		if (!res.ok) throw new Error(`API ${res.status}`);
		const data = await res.json();
		const projects = (data.projects ?? []).map(p => ({
			...p,
			categoryFr: CATEGORY_FR[p.category] ?? p.category ?? ''
		}));
		return { projects };
	} catch {
		return { projects: [] };
	}
}
