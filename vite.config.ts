import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	build:{
		target:'esnext'
	},
	server: {
		host: true,
		port: 5178
	}
};

export default config;
