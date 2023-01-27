import type { Load } from '@sveltejs/kit';

import { supabase } from '$lib/supabaseClient';

const getFileNames = async () => {
	const { data, error } = await supabase.storage.from('photos').list();
	if (error) return [];
	const names = data?.map((item) => item.name);
	return names;
};

const createUrl = async (names: string[]) => {
	const { data } = await supabase.storage.from('photos').createSignedUrls(names, 3600);
	const urls = data?.map((item) => item.signedUrl);
	return urls;
};

export const load: Load = async () => {
	let fileNames: string[];
	let fileUrls: string[] | undefined = [];

	fileNames = await getFileNames();

	if (fileNames.length) fileUrls = await createUrl(fileNames);

	return {
		fileNames,
		photos: fileUrls
	};
};
