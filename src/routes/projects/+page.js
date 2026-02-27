export const prerender = true;

const API_KEY = 'wcp_cffcc6f7ea36df1ca3506479132dc4ce432bc6f2';
const API_URL = 'https://website-control-panel.pages.dev/api/projects';

export async function load() {
	try {
		const res = await fetch(`${API_URL}?api_key=${API_KEY}`);
		if (!res.ok) throw new Error(`API ${res.status}`);
		const data = await res.json();
		return { projects: data.projects ?? [] };
	} catch {
		return { projects: [] };
	}
}
