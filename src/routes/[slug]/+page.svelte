<script lang="ts">
	import { page } from '$app/stores';
	import { storeSelectedUrl } from '$lib/stores';
	import Modal from './OrderForm.svelte';

	$: year = new Date().getFullYear();

	let showModal = false;
</script>

<section class="p-4 text-sm max-w-[1575px] mx-auto">
	<div class="w-full">
		<img src={$storeSelectedUrl} alt="" />
	</div>
	<p class="pt-8 md:pt-10">作品尺寸：30*20cm</p>
	<p>輸出紙材：Canson白金純棉相紙</p>
	<p>裱褙裝鋁框：無酸卡紙夾裱＋高級鋁框</p>
	<div class="flex items-center justify-between pt-8 md:pt-10">
		<button
			class="border rounded px-6 py-2 transition-transform hover:scale-110"
			on:click={() => (showModal = true)}>Order</button
		>
		<a href="/" class="w-5 transition-transform hover:scale-125">
			<img src="/return-svgrepo-com.svg" alt="" />
		</a>
	</div>
</section>
<p class="text-xs text-slate-600 p-4">&copy; {year} Hsu Tsao Yuan</p>
{#if showModal}
	<Modal fileName={$page.params.slug} on:close={() => (showModal = false)} />
{/if}
