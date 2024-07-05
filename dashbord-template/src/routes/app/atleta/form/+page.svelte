<script lang="ts">
	import type { PageData } from './$types';
	import type { Atleta } from '$lib/types';

	let atleta: Atleta = {
		nome: '',
		nascimento: new Date(),
		idade: 0,
		altura: 0,
		peso: 0,
		dominancia: '',
		posicao: '',
		minutagem: 0,
		gols: 0,
		assistencias: 0,
		cartoesAmarelos: 0,
		cartoesVermelhos: 0
	};

	async function handleSubmit(event: Event) {
		const formData = new FormData(event.target as HTMLFormElement);
		const atletaData = Object.fromEntries(formData.entries()) as unknown as Atleta;
		atletaData.nascimento = new Date(atletaData.nascimento);

		// Handle form submission here
		// For example, you could make a POST request to your API to create a new atleta
		const response = await fetch('/api/atletas', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(atletaData)
		});

		// ... handle response
	}

	export let data: PageData;

	function formatDate(date: Date): string {
		if (date instanceof Date && !isNaN(date.getTime())) {
			return date.toISOString().split('T')[0];
		}
		return '';
	}
</script>

<main class="h-full overflow-y-auto pb-16 pt-6">
	<h2
		class="text-4xl mb-2 font-bold text-center bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text text-transparent"
	>
		Adicionar Atleta
	</h2>
	<form
		method="post"
		class="max-w-lg mx-auto bg-neutral-200 dark:bg-slate-500 p-4 shadow-md rounded-md"
		on:submit|preventDefault={handleSubmit}
	>
		<div class="mb-4">
			<label for="nome" class="block text-gray-700">Nome</label>
			<input
				id="nome"
				type="text"
				bind:value={atleta.nome}
				class="mt-1 p-2 w-full border rounded-md"
				required
			/>
		</div>

		<div class="mb-4">
			<label for="nascimento" class="block text-gray-700">Data de Nascimento</label>
			<input
				id="nascimento"
				type="date"
				bind:value={atleta.nascimento}
				class="mt-1 p-2 w-full border rounded-md"
				required
			/>
		</div>

		<div class="mb-4">
			<label for="altura" class="block text-gray-700">Altura (m)</label>
			<input
				id="altura"
				type="number"
				step="0.01"
				bind:value={atleta.altura}
				class="mt-1 p-2 w-full border rounded-md"
				required
			/>
		</div>

		<div class="mb-4">
			<label for="peso" class="block text-gray-700">Peso (kg)</label>
			<input
				id="peso"
				type="number"
				bind:value={atleta.peso}
				class="mt-1 p-2 w-full border rounded-md"
				required
			/>
		</div>

		<div class="mb-4">
			<label for="dominancia" class="block text-gray-700">Dominância</label>
			<input
				id="dominancia"
				type="text"
				bind:value={atleta.dominancia}
				class="mt-1 p-2 w-full border rounded-md"
				required
			/>
		</div>

		<div class="mb-4">
			<label for="posicao" class="block text-gray-700">Posição</label>
			<input
				id="posicao"
				type="text"
				bind:value={atleta.posicao}
				class="mt-1 p-2 w-full border rounded-md"
				required
			/>
		</div>

		<div class="text-right">
			<button
				type="submit"
				class="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">Salvar</button
			>
		</div>
	</form>
</main>
