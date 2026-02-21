import { projectsFr as projects } from '$lib/projects.fr.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return Object.keys(projects).map((slug) => ({ slug }));
}

export function load({ params }) {
	const project = projects[params.slug];
	if (!project) throw error(404, 'Projet introuvable');
	return { project };
}
