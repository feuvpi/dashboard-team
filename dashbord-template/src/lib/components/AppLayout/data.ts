import HomeIcon from './icons/HomeIcon.svelte';
import MediasIcon from './icons/MediasIcon.svelte';

export const data = [
	{
		section: 'MENU PRINCIPAL',
		content: [
			{
				title: 'Plantel',
				icon: HomeIcon,
				grouping: true,
				sublinks: [
					{
						title: 'Lista',
						link: '/app/plantel'
					},
					{
						title: 'Form',
						link: '/app/atleta/form'
					}
				]
			},
			{
				title: 'Times',
				icon: MediasIcon,
				link: '/app/times'
			},
			{
				title: 'Partidas',
				icon: MediasIcon,
				link: '/app/partidas'
			},
			{
				title: 'Desempenho',
				icon: MediasIcon,
				link: '/app/desempenho'
			}
		]
	},
]