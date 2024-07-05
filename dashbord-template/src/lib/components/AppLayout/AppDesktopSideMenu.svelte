<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { data } from './data';

	interface DesktopSideMenuProps {
		isPagesMenuOpen: boolean;
	}

	export let props: DesktopSideMenuProps;

	const style = {
		title: `mx-4 text-sm whitespace-pre`,
		section: `font-thin pl-5 text-white mb-6 uppercase lg:pl-6`,
		active: `backdrop-blur-md bg-gradient-to-r from-orange-400/70 to-orange-600/70 mx-2 rounded-md font-bold shadow-md lg:border-l-0 backdrop-filter backdrop-blur-lg`,
		inactive: `backdrop-blur-md mx-2 my-1 hover:bg-gradient-to-r hover:from-orange-300/70 hover:to-orange-400/70 rounded-lg backdrop-filter backdrop-blur-lg`,
		link: `hover:shadow-sm rounded-md hover:bg-white/10 flex items-center text-gray-200 justify-start my-2 p-3 w-full hover:text-white backdrop-filter backdrop-blur-lg`,
		close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
		open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
		item: `relative px-6 py-3 dark:text-white text-black`
	};
</script>

<aside
	class="z-20 hidden w-64 flex-shrink-0 overflow-y-auto border-r-[1px] border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 md:block"
>
	<div class="py-4 text-gray-500 dark:text-gray-400">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/">Meu Time</a>
		<!-- Desktop sidebar menu -->
		<ul class="mt-6">
			<!-- <li class="relative px-6 py-3">
				<span
					class="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg bg-emerald-600"
					aria-hidden="true"
				/>
				<a
					class="inline-flex w-full items-center text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-200"
					href="/"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
					<span class="ml-4">Dashboard</span>
				</a>
			</li> -->
			{#each data as { section, content } (section)}
				{#each content as item (item.title)}
					{#if item.grouping}
						<li>
							<div
								class={`${style.item} 
							${
								props.isPagesMenuOpen
									? style.item
									: item.link === $page.url.pathname
									  ? style.active
									  : style.inactive
							}`}
							>
								<!-- Grouping button -->
								<button
									class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
									on:click={() => (props.isPagesMenuOpen = !props.isPagesMenuOpen)}
									aria-haspopup="true"
								>
									<svg
										class="h-5 w-5"
										aria-hidden="true"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
										/>
									</svg>
									<span class="ml-4">{item.title}</span>
									<!-- Icon and title -->
								</button>
							</div>

							{#if props.isPagesMenuOpen}
								<ul
									class="mb-2 mx-2 space-y-2 overflow-hidden rounded-md bg-gray-50 p-2 text-sm font-medium text-gray-500 shadow-inner dark:bg-gray-900 dark:text-gray-400"
									aria-label="submenu"
									in:fly|global={{ y: -20, duration: 250 }}
									out:fly|global={{ duration: 50 }}
								>
									{#each item.sublinks as sublink (sublink.title)}
										<li
											class={`${style.item}
									${sublink.link === $page.url.pathname ? style.active : style.inactive}`}
										>
											<a
												class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
												href={sublink.link}
											>
												<svg
													class="h-5 w-5"
													aria-hidden="true"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
													/>
												</svg>
												<span class="ml-4">{sublink.title}</span>
											</a>
											<!-- Sublink -->
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{:else}
						<li
							class={`${style.item} 
            ${item.link === $page.url.pathname ? style.active : style.inactive}`}
						>
							<a
								class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
								href={item.link}
							>
								<svg
									class="h-5 w-5"
									aria-hidden="true"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
									/>
								</svg>
								<span class="ml-4">{item.title}</span>
							</a>
						</li>
					{/if}
				{/each}
			{/each}
		</ul>

		<div class="my-6 px-6">
			<button
				class="flex w-full items-center justify-between rounded-lg border border-transparent bg-orange-600/80 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-emerald-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
			>
				Create account
				<span class="ml-2" aria-hidden="true">+</span>
			</button>
		</div>
	</div>
</aside>
