<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import type { PageData } from './$types';
	import Table from './_Table.svelte';

	export let data: PageData;
</script>

<PageTitle name="Plantel" />
<Table />
