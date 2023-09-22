<script lang="ts">
	import type { PageData } from './$types';
	import { MyCounterButton } from 'ui';

	export let data: PageData;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome</h2>

		<div class="flex justify-center space-x-2">
			<a class="btn variant-filled" href="https://skeleton.dev/" target="_blank" rel="noreferrer">
				Call to Action
			</a>
			{#each data.countries_countries ?? [] as country}
				<div>{country.name}</div>
			{/each}

			<MyCounterButton />
		</div>
	</div>
</div>
