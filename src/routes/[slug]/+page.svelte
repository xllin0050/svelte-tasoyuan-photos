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
	<p class="pt-10 md:pt-10">作品尺寸：30*20cm</p>
	<p class="pt-2">輸出紙材：Canson白金純棉相紙</p>
	<p class="pt-2">裱褙裝鋁框：無酸卡紙夾裱＋高級鋁框</p>
	<div class="flex items-center justify-between pt-12 md:pt-10">
		<button
			class="border border-gray-700 rounded px-12 sm:px-7 py-3 transition-transform hover:scale-110"
			on:click={() => (showModal = true)}>Order</button
		>
		<a href="/" class="w-8 sm:w-6 mr-8 transition-transform hover:scale-125">
			<img src="/return-svgrepo-com.svg" alt="" />
		</a>
	</div>
</section>
<p class="text-xs text-slate-600 px-4 py-8">&copy; {year} Hsu Tsao Yuan</p>
{#if showModal}
	<Modal fileName={$page.params.slug} on:close={() => (showModal = false)} />
{/if}
