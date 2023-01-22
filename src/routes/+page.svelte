<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
	import { goto } from '$app/navigation';
	import photoUrlStore from '../stores';
	export let data: any;
	const { photos } = data;
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
		photoUrlStore.set(photos[e]);
		goto(`/${e}`);
	};
	$: year = new Date().getFullYear();
</script>

<svelte:window bind:innerWidth={screenWidth} />
<section class="h-screen w-full flex flex-col justify-between">
	<div class="text-xl grow p-4  ">
		<a href="/about" class="inline-flex flex-col sm:flex-row items-start sm:items-center">
			<h1 class="pr-4 pb-4 sm:pb-0">Hsu Tsao Yuan</h1>
			<h2>許造元</h2>
		</a>
	</div>
	<div class="w-full">
		<Splide
			aria-label="My Favorite Images"
			options={splideOptions}
			class="mx-auto"
			on:click={(event) => {
				if (event) {
					clickMe(event.detail.Slide.index);
				}
			}}
		>
			{#each photos as url, idx}
				<SplideSlide>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<img
						src={url}
						alt="demo"
						on:click={() => {
							photoUrlStore.set(url);
							goto(`/${idx}`);
						}}
					/>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
	<p class="text-xs sm:text-base text-slate-600 p-4">&copy; {year} Hsu Tsao Yuan</p>
</section>
