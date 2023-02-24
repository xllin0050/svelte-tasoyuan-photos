<script lang="ts">
	import type { PageData } from './$types';
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import { goto } from '$app/navigation';
	import { storeSelectedUrl } from '$lib/stores';
	export let data: PageData;
	const { photos, fileNames } = data;

	const splideOptions: Options = {
		type: 'slide',
		fixedWidth: '30%',
		heightRatio: 0.5,
		cover: true,
		gap: 10,
		rewind: true,
		pagination: false,
		focus: 'center',

		breakpoints: {
			640: {
				direction: 'ttb',
				fixedWidth: '100%',
				heightRatio: 2.8,
				arrows: false,
				drag: false,
				perPage: 10
			}
		}
	};

	const gotoPage = (e: number) => {
		if (photos?.length) {
			storeSelectedUrl.set(photos[e]);
		}
		goto(`/${fileNames[e].replace(/\.[^/.]+$/, '')}`);
	};

	$: year = new Date().getFullYear();
</script>

<section class="h-screen w-full flex flex-col justify-between">
	<div class="text-xl grow p-4  ">
		<a href="/about" class="inline-flex flex-col sm:flex-row items-start sm:items-center">
			<h1 class="pr-4 pb-4 sm:pb-0">Hsu Tsao Yuan</h1>
			<h2 class="text-xs">許造元</h2>
		</a>
	</div>
	<div class="w-full">
		<Splide
			aria-label="My Favorite Images"
			options={splideOptions}
			class="mx-auto"
			on:click={(event) => {
				if (event) {
					gotoPage(event.detail.Slide.index);
				}
			}}
		>
			{#if photos?.length}
				{#each photos as url, idx}
					<SplideSlide>
						<img src={url} alt="" />
					</SplideSlide>
				{/each}
			{/if}
		</Splide>
	</div>
	<p class="text-xs text-slate-600 p-4">&copy; {year} Hsu Tsao Yuan</p>
</section>
