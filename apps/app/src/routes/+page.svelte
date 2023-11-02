<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.countries_countries ?? [] as country}
	<div>{JSON.stringify(country)}</div>
{/each}
