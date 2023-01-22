import type { PageLoad } from './$types';
import photoUrlStore from '../../stores';
let photoUrl: string;
photoUrlStore.subscribe((v) => {
	photoUrl = v;
});

export const load = (({ params }) => {
	return {
		title: params.slug,
		photoUrl
	};
}) satisfies PageLoad;
