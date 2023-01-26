<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';
	export let fileName: string;
	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal: any;

	const handle_keydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes: HTMLElement[] = modal.querySelectorAll('*');
			console.log(modal);

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
	{fileName}
	<form action="https://submit-form.com/jzRHuHEv">
		<label for="name">Name</label>
		<input type="text" id="name" name="name" placeholder="Name" required />
		<label for="email">Email</label>
		<input type="email" id="email" name="email" placeholder="Email" required />
		<label for="message">Message</label>
		<textarea id="message" name="message" placeholder="Message" required />
		<button type="submit">Send</button>
	</form>

	<button on:click={close}>close modal</button>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
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
