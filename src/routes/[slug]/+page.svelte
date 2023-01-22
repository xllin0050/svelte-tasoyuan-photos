<script lang="ts">
	export let data: any;
	const { photoUrl } = data;
	$: year = new Date().getFullYear();

</script>

<section class="p-4 text-sm max-w-[1575px] mx-auto">
	<div class="w-full">
		<img src={photoUrl} alt="" />
	</div>
	<p class="pt-8 md:pt-10">作品尺寸：30*20cm</p>
	<p>輸出紙材：Canson白金純棉相紙</p>
	<p>裱褙裝鋁框：無酸卡紙夾裱＋高級鋁框</p>
	<div class="flex items-center justify-between pt-8 md:pt-10">
		<form action="mailto:xxx">
			<button class="border rounded px-6 py-2 transition-transform hover:scale-110">預訂</button>
		</form>
		<a href="/" class="w-5 transition-transform hover:scale-125">
			<img src="/return-svgrepo-com.svg" alt="" />
		</a>
	</div>
</section>
	<p class="text-xs sm:text-base text-slate-600 p-4">&copy; {year} Hsu Tsao Yuan</p>
