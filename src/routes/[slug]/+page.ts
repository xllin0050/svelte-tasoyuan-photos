import type { Load } from '@sveltejs/kit';
import { storeUrls } from '$lib/stores';

let photoUrl: string;

storeUrls.subscribe((v) => {
	photoUrl = v;
});

export const load: Load = ({ params }) => {
	return {
		title: params.slug,
		photoUrl
	};
};
