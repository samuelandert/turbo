<script lang="ts">
  import { MyCounterButton } from 'ui';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex items-center justify-center h-screen flex-col">
  <MyCounterButton /><br>
  my wundergraph query
  {#each data.countries_countries ?? [] as country}
    <b>{country.name}</b>
  {/each}
</div>