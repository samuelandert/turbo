<script lang="ts">
  import { MyCounterButton } from 'ui';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex items-center justify-center h-screen flex-col">
  <MyCounterButton />

  {#each data.countries_countries ?? [] as country}
    <div>{country.name}</div>
  {/each}
</div>