<script>
	import { data, itemsCondominio } from './data';
	import { page } from '$app/stores';

	// import type { PageData } from '../../$types';

	export let userData;
	console.log(userData);
	const style = {
		title: `mx-4 text-sm`,
		section: `font-thin pl-5 text-white mb-6 uppercase lg:pl-6`,
		active: `bg-white/50 rounded-md text-gray-500 font-bold shadow-md border-l-4 border-white lg:border-l-0 lg:border-r-4`,
		link: `hover:shadow-sm rounded-md hover:bg-white/10 flex items-center text-gray-200 justify-start my-2 p-3 w-full hover:text-white`
	};
</script>

<ul class="md:pl-6">
	<li>
		{#if userData != null && userData.isCondominio}
			{#each itemsCondominio as { section, content } (section)}
				<div class="mb-12">
					<div class={style.section}>{section}</div>

					{#each content as item (item.title)}
						<a
							href={item.link}
							class={`${style.link} ${item.link === $page.url.pathname ? style.active : ''}`}
						>
							<span><svelte:component this={item.icon} /></span>
							<span class={style.title}>{item.title}</span>
						</a>
					{/each}
				</div>
			{/each}
		{:else}
			{#each data as { section, content } (section)}
				<div class="mb-12">
					<div class={style.section}>{section}</div>

					{#each content as item (item.title)}
						<a
							href={item.link}
							class={`${style.link} ${item.link === $page.url.pathname ? style.active : ''}`}
						>
							<span><svelte:component this={item.icon} /></span>
							<span class={style.title}>{item.title}</span>
						</a>
					{/each}
				</div>
			{/each}
		{/if}
	</li>
</ul>
