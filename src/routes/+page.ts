import { supabase } from '$lib/supabaseClient';

const fileNames = async () => {
	const { data, error } = await supabase.storage.from('photos').list();
	const names = data?.map((item) => item.name);
	return names;
};
const createUrl = async (names: string[]) => {
	const { data } = await supabase.storage.from('photos').createSignedUrls(names, 300);
	const urls = data?.map((item) => item.signedUrl);
	return urls;
};

const fileUrls = await fileNames()
	.then((e) => {
		return createUrl(e);
	})
	.then((e) => {
		return e;
	});

export const load = () => {
	return {
		photos: fileUrls
	};
};
