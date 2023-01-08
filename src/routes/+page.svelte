<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

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
</script>

<section class="h-screen w-full bg-slate-400">
	<div>
		<h1>Hsu Tsao Yuan</h1>
		<h2>許造元</h2>
	</div>
	<Splide aria-label="My Favorite Images">
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
