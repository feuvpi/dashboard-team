<script>
	import 'tailwindcss/tailwind.css';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import TopBar from './TopBar.svelte';
	import Overlay from './Overlay.svelte';
	import Sidebar from './sidebar/Sidebar.svelte';
	import { sidebarOpen, closeSidebar } from './store';

	/*	lg:w-[calc(100%-16rem)] class get the remained width of the main tag from lg:viewport by subtracting
	(the total width by the width of the Sidebar component which is w-64 = 16rem)*/

	const style = {
		open: 'lg:w-full',
		close: 'lg:pl-4 lg:w-[calc(100%-16rem)]',
		mainContainer: `flex flex-col w-full h-screen pl-0 lg:space-y-4`,
		container: `bg-gray-100 h-screen overflow-hidden relative lg:p-4`,
		main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0`
	};

	if (browser) {
		page.subscribe(() => {
			// close Sidebar on route changes. it's triggered when viewport is less than 1024px
			if ($sidebarOpen && window.innerWidth < 1024) {
				closeSidebar();
			}
		});
	}
</script>

<div class={style.container}>
	<div class="flex items-start">
		<Overlay />
		<Sidebar mobileOrientation="end" />
		<div class={`${style.mainContainer} ${$sidebarOpen ? style.open : style.close}`}>
			<TopBar />
			<main class={style.main}>
				<slot />
			</main>
		</div>
	</div>
</div>
