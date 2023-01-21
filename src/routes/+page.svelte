<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import { goto } from '$app/navigation';

	let screenWidth: number;

	const splideOptions: Options = {
		fixedWidth: '30%',
		heightRatio: 0.5,
		cover: true,
		gap: 10,
		rewind: true,
		pagination: false,
		focus: 'center',
		breakpoints: {
			640: {
				destroy: true
			}
		}
	};
	const clickMe = (e: number) => {
		goto(`/${e}`);
	};
	export let data: any;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<section class="h-screen w-full bg-slate-400 flex flex-col justify-between">
	<div class="text-xl grow flex flex-col sm:flex-row p-4 w-full items-start sm:items-center">
		<h1 class="pr-4 pb-4 sm:pb-0">Hsu Tsao Yuan</h1>
		<h2>許造元</h2>
	</div>
	<div class="w-full">
		<Splide
			aria-label="My Favorite Images"
			options={splideOptions}
			class="mx-auto"
			on:click={(e) => {
				if (e) {
					clickMe(e.detail.Slide.index);
				}
			}}
		>
			{#each data.photos as url}
				<SplideSlide>
					<img src={url} alt="demo" />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</section>
<section class="h-screen w-full bg-slate-600">
	<p>2022 International Photography Awards Professional Official Selection (Event-Concert)</p>
	<p>2022 Tokyo International Foto Awards Professional Honorable Mention (Event-Music)</p>
</section>
