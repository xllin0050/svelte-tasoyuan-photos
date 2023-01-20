<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { onMount } from 'svelte';

	let main: Splide;
	let thumbs: SplideSlide;
	let screenWidth: number;

	const demoPhotos: string[] = [
		'IMG_0506',
		'IMG_0507',
		'IMG_0508',
		'IMG_0509',
		'IMG_0510',
		'IMG_0511',
		'IMG_0513',
		'IMG_0515',
		'IMG_0516',
		'IMG_0517'
	];

	const thumbsOptions = {
		type: 'slide',
		rewind: true,
		gap: '0.5rem',
		pagination: false,
		isNavigation: true,
		fixedWidth: '10%',
		fixedHeight: 70,
		cover: true,
		drag: true,
		updateOnMove: true,

		breakpoints: {
			640: {
				destroy: true
			}
		}
	};

	onMount(() => {
		if (main && thumbs) {
			main.sync(thumbs.splide);
		}
	});
</script>

<svelte:window bind:innerWidth={screenWidth} />
<section class="h-screen w-full bg-slate-400">
	<div>
		<h1>Hsu Tsao Yuan</h1>
		<h2>許造元</h2>
		{screenWidth}
	</div>
	<div class="max-w-[1575px] mx-auto">
		<Splide bind:this={thumbs} options={thumbsOptions}>
			{#each demoPhotos as url}
				<SplideSlide>
					<img src={`src/demo/${url}.jpg`} alt="demo" />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
	<Splide
		bind:this={main}
		aria-label="My Favorite Images"
		options={{
			width: '1575px',
			type: 'fade',
			arrows: false,
			rewind: true,
			mediaQuery: 'min',
			breakpoints: {
				1280: { height: '80vh' }
			},
			pagination: false
		}}
		class="mx-auto"
	>
		{#each demoPhotos as url}
			<SplideSlide>
				<img src={`src/demo/${url}.jpg`} alt="demo" />
			</SplideSlide>
		{/each}
	</Splide>
</section>
<section class="h-screen w-full bg-slate-600">
	<p>2022 International Photography Awards Professional Official Selection (Event-Concert)</p>
	<p>2022 Tokyo International Foto Awards Professional Honorable Mention (Event-Music)</p>
</section>
