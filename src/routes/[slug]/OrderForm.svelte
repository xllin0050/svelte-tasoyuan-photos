<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';
	export let fileName: string;

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal: any;

	let orderMessage = `Order photo: ${fileName}`;

	const handle_keydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes: HTMLElement[] = modal.querySelectorAll('*');

			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement as HTMLElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused: any = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} on:keydown={() => {}} />

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<button class="w-5 absolute right-4 transition-transform hover:scale-125" on:click={close}>
		<img src="/close-square-svgrepo-com.svg" alt="" />
	</button>

	<p>Thank you so much for your interest.</p>
	<p>Please leave your information and we will be in touch.</p>
	<form class="py-4 flex flex-col" action="https://submit-form.com/jzRHuHEv">
		<label for="name" class="border-b pb-2">
			<span>Name:</span>
			<input type="text" id="name" name="name" placeholder="Name" required />
		</label>
		<label for="email" class="border-b py-2">
			<span>Email:</span>
			<input type="email" id="email" name="email" placeholder="Email" required />
		</label>
		<label for="message" class="pt-2 flex flex-col">
			<span>Message:</span>
			<textarea
				id="message"
				name="message"
				placeholder="message"
				bind:value={orderMessage}
				class="border mt-2"
			/>
		</label>
		<button type="submit" class="mt-4 transition hover:text-orange-400">Send</button>
	</form>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%, -50%);
		padding: 1em;
		border-radius: 0.2em;
		background: white;
	}
</style>
